import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

interface LeadData {
  name: string;
  phone: string;
  location?: string;
  hairStage?: string;
  treatment?: string;
  source?: string;
  formName?: string;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function generateFormDataString(data: LeadData): string {
  const parts: string[] = [];
  if (data.name)      parts.push(`Name: ${data.name}`);
  if (data.phone)     parts.push(`Phone: ${data.phone}`);
  if (data.location)  parts.push(`Location: ${data.location}`);
  if (data.hairStage) parts.push(`Hair Stage / Concern: ${data.hairStage}`);
  if (data.treatment) parts.push(`Treatment: ${data.treatment}`);
  if (data.source)    parts.push(`Source: ${data.source}`);
  return parts.join(" | ");
}

async function saveToDatabase(data: LeadData) {
  return prisma.lead.create({
    data: {
      name:      data.name,
      phone:     data.phone,
      location:  data.location  || null,
      concern:   data.hairStage || null,
      treatment: data.treatment || null,
      source:    data.source    || process.env.NEXT_PUBLIC_SITE_URL || "https://creatoraesthetic.in",
      formName:  data.formName  || "Hair Consultation Form",
      telecrmSynced: false,
    },
  });
}

async function updateTelecrmStatus(
  id: string,
  telecrmId?: string,
  errorMsg?: string
) {
  await prisma.lead.update({
    where: { id },
    data: {
      telecrmSynced: !errorMsg,
      telecrmId:     telecrmId || null,
      telecrmError:  errorMsg  || null,
      syncedAt:      new Date(),
    },
  });
}

async function sendToTeleCRM(data: LeadData) {
  const endpoint = process.env.TELECRM_API_URL;
  if (!endpoint) throw new Error("TELECRM_API_URL is not set");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  const formName   = data.formName || "Hair Consultation Form";
  const leadSource = data.source   || "https://creatoraesthetic.in";

  const payload = {
    fields: {
      Id:                     "",
      name:                   data.name,
      phone:                  data.phone.replace(/\D/g, ""),
      email:                  "",
      city_1:                 data.location  || "",
      select_the_procedure:   data.treatment || data.hairStage || "",
      message:                data.hairStage || "",
      preferredtime:          "",
      preferreddate:          "",
      Country:                "",
      LeadID:                 "",
      CreatedOn:              new Date().toLocaleString("en-US", {
        month: "short", day: "numeric", year: "numeric",
        hour: "numeric", minute: "2-digit", hour12: true,
      }),
      "Lead Stage":           "",
      "Lead Status":          "new",
      "Lead Request Type":    "consultation",
      PageName:               leadSource,
      State:                  "",
      Age:                    "",
      FormName:               formName,
    },
    actions: [
      { type: "SYSTEM_NOTE", text: `Form Name: ${formName}` },
      { type: "SYSTEM_NOTE", text: `Complete Form Data: ${generateFormDataString(data)}` },
      { type: "SYSTEM_NOTE", text: `Lead Source: ${leadSource}` },
      { type: "SYSTEM_NOTE", text: `Treatment: ${data.treatment || "Not specified"}` },
      { type: "SYSTEM_NOTE", text: `Hair Stage / Concern: ${data.hairStage || "Not specified"}` },
      { type: "SYSTEM_NOTE", text: `Location: ${data.location || "Not specified"}` },
    ],
  };

  try {
    const res = await fetch(endpoint, {
      method:  "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:  `Bearer ${process.env.TELECRM_API_KEY}`,
        "Accept":       "application/json",
      },
      body:   JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (res.status === 204) {
      return { synced: true, message: "204 No Content" };
    }

    const text = await res.text();

    if (text.trim().startsWith("<!DOCTYPE") || text.trim().startsWith("<html")) {
      throw new Error("TeleCRM returned HTML instead of JSON");
    }

    const json = text ? JSON.parse(text) : {};
    if (!res.ok) throw new Error(json.message || `HTTP ${res.status}`);
    return { ...json, synced: true };
  } catch (err) {
    clearTimeout(timeout);
    throw err instanceof Error ? err : new Error(String(err));
  }
}

// ── GET ───────────────────────────────────────────────────────────────────────

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, data: leads });
  } catch (error) {
    console.error("GET /api/leads error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch leads" },
      { status: 500 }
    );
  }
}

// ── POST ──────────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  let data: LeadData | undefined;
  let savedLead: Awaited<ReturnType<typeof saveToDatabase>> | null = null;

  try {
    data = await req.json();

    if (!data!.name || !data!.phone) {
      return NextResponse.json(
        { success: false, error: "Name and phone are required" },
        { status: 400 }
      );
    }

    // 1 — Save to DB
    savedLead = await saveToDatabase(data!);
    console.log("Lead saved:", { id: savedLead.id, formName: savedLead.formName });

    // 2 — Sync to TeleCRM (non-blocking failure)
    let telecrmError: string | null = null;
    let telecrmResponse: Record<string, unknown> | null = null;

    try {
      telecrmResponse = await sendToTeleCRM(data!);
      await updateTelecrmStatus(savedLead.id, (telecrmResponse?.id as string) || undefined);
      console.log("TeleCRM sync OK:", savedLead.id);
    } catch (err) {
      telecrmError = err instanceof Error ? err.message : String(err);
      console.error("TeleCRM sync failed:", telecrmError);
      await updateTelecrmStatus(savedLead.id, undefined, telecrmError);
    }

    return NextResponse.json(
      {
        success:         true,
        databaseId:      savedLead.id,
        telecrmSynced:   !telecrmError,
        telecrmError,
        message: telecrmError
          ? "Lead saved but TeleCRM sync failed"
          : "Lead saved and synced with TeleCRM",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/leads error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save lead" },
      { status: 500 }
    );
  }
}
