import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export const dynamic = "force-dynamic";

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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, location, hairStage, treatment, source, formName } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Name and phone are required" },
        { status: 400 }
      );
    }

    const lead = await prisma.lead.create({
      data: {
        name,
        phone,
        location: location || null,
        concern: hairStage || null,
        treatment: treatment || null,
        source: source || process.env.NEXT_PUBLIC_SITE_URL || "https://creatoraesthetic.in",
        formName: formName || "Hair Consultation Form",
      },
    });

    return NextResponse.json({ success: true, data: lead }, { status: 201 });
  } catch (error) {
    console.error("POST /api/leads error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save lead" },
      { status: 500 }
    );
  }
}
