"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface LeadFormProps {
  variant?: "hero" | "treatment";
  treatmentName?: string;
}

const HAIR_LOSS_STAGES = [
  { id: "stage1", label: "Stage 1", sub: "Minimal loss", image: "https://ik.imagekit.io/meafuhrp0/public/st1.jpeg?updatedAt=1773322231443" },
  { id: "stage2", label: "Stage 2", sub: "Mild receding", image: "https://ik.imagekit.io/meafuhrp0/public/st2.jpeg?updatedAt=1773322231686" },
  { id: "stage3", label: "Stage 3", sub: "Moderate", image: "https://ik.imagekit.io/meafuhrp0/public/st3.jpeg?updatedAt=1773322231436" },
  { id: "stage4", label: "Stage 4", sub: "Significant", image: "https://ik.imagekit.io/meafuhrp0/public/st4.jpeg?updatedAt=1773322231351" },
  { id: "stage5", label: "Stage 5", sub: "Advanced", image: "https://ik.imagekit.io/meafuhrp0/public/st5.jpeg?updatedAt=1773322231624" },
];

export default function LeadForm({ variant = "hero", treatmentName }: LeadFormProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [hairStage, setHairStage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formName =
        variant === "treatment" && treatmentName
          ? `${treatmentName} Consultation`
          : "Hair Consultation Form";

      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          location,
          hairStage,
          treatment: treatmentName || null,
          source: window.location.href,
          formName,
        }),
      });
    } catch (err) {
      console.error("Lead submission error:", err);
    } finally {
      router.push("/thank-you");
    }
  };

  const inputBase =
    variant === "hero"
      ? "w-full px-4 py-3 rounded-xl bg-white/15 border border-white/25 text-white placeholder-white/60 text-sm focus:outline-none focus:border-[#D4607A] focus:bg-white/20 transition-all"
      : "w-full px-4 py-3 rounded-xl bg-white border border-[#E8E0F2] text-[#1C1C1C] placeholder-[#787878] text-sm focus:outline-none focus:border-[#D4607A] focus:ring-2 focus:ring-[#D4607A]/20 transition-all";

  const labelBase =
    variant === "hero"
      ? "block text-xs font-semibold text-white/80 mb-1.5 uppercase tracking-wide"
      : "block text-xs font-semibold text-[#5C3D8F] mb-1.5 uppercase tracking-wide";

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl ${
        variant === "hero"
          ? "bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-5 md:p-7"
          : "bg-white border border-[#E8E0F2] shadow-[0_4px_24px_rgba(92,61,143,0.10)] p-4 sm:p-5 md:p-6"
      }`}
    >
      {variant === "hero" && (
        <div className="mb-5">
          <p className="text-white font-display text-lg font-semibold">
            Book Your Consultation
          </p>
          <p className="text-white/70 text-xs mt-1">
            Whatever your concern, we have a solution!
          </p>
        </div>
      )}
      {variant === "treatment" && treatmentName && (
        <div className="mb-4">
          <p className="text-[#5C3D8F] font-display text-base font-semibold">
            Enquire About {treatmentName}
          </p>
        </div>
      )}

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className={labelBase}>Full Name</label>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={inputBase}
          />
        </div>

        {/* Phone */}
        <div>
          <label className={labelBase}>Phone Number</label>
          <div className="flex gap-2">
            <span
              className={`px-3 py-3 rounded-xl text-sm font-medium flex-shrink-0 ${
                variant === "hero"
                  ? "bg-white/20 text-white border border-white/25"
                  : "bg-[#F8F4FF] text-[#5C3D8F] border border-[#E8E0F2]"
              }`}
            >
              +91
            </span>
            <input
              type="tel"
              placeholder="63850 83099"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
              }
              required
              pattern="[0-9]{10}"
              className={inputBase}
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className={labelBase}>Location / Area</label>
          <input
            type="text"
            placeholder="e.g. ECR, Adyar, Velachery"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className={inputBase}
          />
        </div>

        {/* Hair Loss Stage selector */}
        <div>
          <label className={labelBase}>
            Select Your Hair Loss Stage
            <span className="ml-1 normal-case tracking-normal font-normal opacity-60">
              (tap to select)
            </span>
          </label>
          <div
            className={
              variant === "hero"
                ? "flex gap-2 overflow-x-auto sm:overflow-visible pb-1 scrollbar-hide"
                : "grid grid-cols-3 sm:grid-cols-5 gap-2"
            }
          >
            {HAIR_LOSS_STAGES.map((stage) => {
              const isActive = hairStage === stage.id;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setHairStage(stage.id)}
                  className={`relative rounded-xl overflow-hidden transition-all duration-200 flex flex-col ${
                    isActive
                      ? "ring-2 ring-[#D4607A] ring-offset-1 shadow-[0_0_12px_rgba(212,96,122,0.35)] scale-[1.03]"
                      : variant === "hero"
                      ? "border border-white/20 hover:border-[#D4607A]/50 hover:scale-[1.02]"
                      : "border border-[#E8E0F2] hover:border-[#D4607A]/50 hover:scale-[1.02]"
                  } ${
                    variant === "hero"
                      ? isActive
                        ? "bg-[#D4607A]/20"
                        : "bg-white/10"
                      : isActive
                      ? "bg-[#D4607A]/10"
                      : "bg-white"
                  } ${
                    variant === "hero"
                      ? "w-14 sm:w-auto sm:flex-1 sm:min-w-0 flex-shrink-0 sm:flex-shrink"
                      : ""
                  }`}
                >
                  {/* Stage image */}
                  <div className="relative w-full aspect-square">
                    <img
                      src={stage.image}
                      alt={stage.label}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Selected overlay */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gold/20 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-gold flex items-center justify-center">
                          <svg
                            width="8"
                            height="6"
                            viewBox="0 0 8 6"
                            fill="none"
                          >
                            <path
                              d="M1 3L3 5L7 1"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Label */}
                  <div
                    className={`px-1 py-1.5 text-center ${
                      variant === "hero"
                        ? isActive
                          ? "bg-gold/30"
                          : "bg-white/5"
                        : isActive
                        ? "bg-gold/15"
                        : "bg-[#F9F6F0]"
                    }`}
                  >
                    <p
                      className={`text-[10px] font-bold leading-tight ${
                        isActive
                          ? "text-gold"
                          : variant === "hero"
                          ? "text-white/80"
                          : "text-forest"
                      }`}
                    >
                      {stage.label}
                    </p>
                    <p
                      className={`text-[9px] leading-tight mt-0.5 ${
                        variant === "hero" ? "text-white/50" : "text-charcoal-soft"
                      }`}
                    >
                      {stage.sub}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-gold w-full mt-5 py-3.5 rounded-xl text-white font-semibold text-sm tracking-wide flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {loading ? "Submitting..." : (
          <>
            Book Your Consultation
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </>
        )}
      </button>

      <p
        className={`text-xs mt-3 text-center ${
          variant === "hero" ? "text-white/50" : "text-charcoal-soft"
        }`}
      >
        By submitting, you agree to our <a href="#" className="underline hover:opacity-80">Terms</a>{" & "}
        <a href="/privacy-policy" className="underline hover:opacity-80">
          Privacy Policy
        </a>
      </p>
    </form>
  );
}
