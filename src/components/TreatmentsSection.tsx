"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import FadeIn from "./ui/FadeIn";

const treatments = [
  {
    id: "gfc",
    num: "01",
    name: "GFC Hair Therapy",
    shortName: "GFC",
    tagline: "The Most Natural Way to Stop Hair Fall.",
    description:
      "GFC (Growth Factor Concentrate) extracts potent regenerative proteins from your own blood, concentrates them, and delivers them where follicles need support the most.",
    idealFor: [
      "Male and female pattern hair thinning",
      "Post-partum hair loss",
      "Stress or nutritional-related hair fall",
      "Anyone wanting pure growth factor treatment",
    ],
    image: "gfccreat.png",
    badge: "Most Popular",
    potency: 2,
    bgGradient: "from-[#5C3D8F] to-[#3A2568]",
  },
  {
    id: "prp",
    num: "02",
    name: "Platelet Growth Therapy",
    shortName: "PRP",
    tagline: "Your Blood Holds the Cure Your Hair Has Been Waiting For.",
    description:
      "Platelet Growth Therapy uses concentrated platelets loaded with growth signals and delivers them directly to hair follicles to improve stability and density.",
    idealFor: [
      "Early to mid-stage pattern baldness",
      "Female hair thinning and diffuse alopecia",
      "Hairline recession in men and women",
      "Active hair shedding",
    ],
    image: "/prpcreat.png",
    badge: "Clinically Proven",
    potency: 3,
    bgGradient: "from-[#3A2568] to-[#261748]",
  },
  {
    id: "exosome",
    num: "03",
    name: "Exosome Hair Therapy",
    shortName: "Exosome",
    tagline: "Not Just Regrowth. Complete Follicle Regeneration.",
    description:
      "Exosome therapy is an advanced hair restoration option using stem-cell-derived signaling vesicles that communicate with follicles at a deeper biological level.",
    idealFor: [
      "Advanced thinning or long-standing hair loss",
      "Limited results from other treatments",
      "Patients wanting faster visible response",
      "Scalp inflammation related shedding",
    ],
    image: "/exocreat.png",
    badge: "Most Advanced",
    potency: 4,
    bgGradient: "from-[#261748] to-[#160D30]",
  },
];

function PotencyBar({ level, max = 4 }: { level: number; max?: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-white/50 text-[10px] uppercase tracking-widest mr-1">
        Potency
      </span>
      {Array.from({ length: max }).map((_, i) => (
        <div
          key={i}
          className={`rounded-full transition-all duration-300 ${
            i < level ? "bg-[#D4607A] w-5 h-1.5" : "bg-white/20 w-3 h-1.5"
          }`}
        />
      ))}
    </div>
  );
}

export default function TreatmentsSection() {
  const [active, setActive] = useState(0);
  const t = treatments[active];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((prev) => (prev + 1) % treatments.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="treatments" className="bg-[#F8F4FF] overflow-hidden">
      <div className="section-container pt-12 md:pt-12 lg:pt-12 max-[470px]:pt-6 pb-8 md:pb-10">
        <FadeIn>
          <div className="text-center mb-3">
            <span className="inline-flex items-center gap-2">
              <span className="h-px w-8 bg-[#D4607A]" />
              <span className="text-[#D4607A] text-xs font-semibold tracking-widest uppercase">
                What We Offer
              </span>
              <span className="h-px w-8 bg-[#D4607A]" />
            </span>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-section font-display font-bold text-[#5C3D8F] text-center mb-3">
            Everything Your Hair Needs.
            <br />
            <span className="text-[#D4607A]">Under One Roof.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-[#4A4A4A] text-center max-w-xl mx-auto leading-relaxed">
            Three treatments. Three potency levels. One doctor supervising every
            session.
          </p>
        </FadeIn>
      </div>

      <div className="section-container pb-0">
        <FadeIn delay={0.3}>
          <div className="grid grid-cols-3 gap-2 sm:flex sm:gap-3 sm:justify-center pb-1">
            {treatments.map((tr, i) => (
              <button
                key={tr.id}
                onClick={() => setActive(i)}
                className={`group flex items-center justify-center sm:justify-start gap-2 sm:gap-3 rounded-xl px-2.5 sm:px-6 py-2.5 sm:py-4 border-2 transition-all duration-300 ${
                  active === i
                    ? "bg-[#5C3D8F] border-[#5C3D8F] text-white shadow-[0_8px_32px_rgba(92,61,143,0.25)]"
                    : "bg-white border-[#E8E0F2] text-[#4A4A4A] hover:border-[#5C3D8F]/40"
                }`}
              >
                <span
                  className={`font-display font-bold text-lg sm:text-2xl leading-none transition-colors ${
                    active === i ? "text-[#D4607A]" : "text-[#C0B5D8]"
                  }`}
                >
                  {tr.num}
                </span>
                <span
                  className={`w-px h-8 transition-colors ${
                    active === i ? "bg-white/20" : "bg-[#E8E0F2]"
                  }`}
                />
                <div className="text-center sm:text-left">
                  <p
                    className={`font-semibold text-sm sm:text-base leading-tight transition-colors ${
                      active === i ? "text-white" : "text-[#5C3D8F]"
                    }`}
                  >
                    {tr.shortName}
                  </p>
                  <p
                    className={`text-xs leading-tight mt-0.5 transition-colors ${
                      active === i ? "text-white/60" : "text-[#787878]"
                    }`}
                  >
                    {tr.badge}
                  </p>
                </div>
                {active === i && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4607A] ml-1" />
                )}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>

      <div key={t.id} className={`relative mt-4 bg-linear-to-br ${t.bgGradient} overflow-hidden`}>
        <div
          className="absolute select-none pointer-events-none font-display font-black leading-none text-white/[0.04] z-0"
          style={{
            fontSize: "clamp(160px, 30vw, 380px)",
            top: "-5%",
            right: "-3%",
            lineHeight: 1,
          }}
        >
          {t.num}
        </div>

        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/[0.04] pointer-events-none" />

        <div className="section-container relative z-10 py-8 md:py-10 lg:py-14">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-14 items-start">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <PotencyBar level={t.potency} />
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#D4607A] bg-[#D4607A]/10 border border-[#D4607A]/25 px-3 py-1 rounded-full">
                  {t.badge}
                </span>
              </div>

              <div className="relative aspect-[4/3] md:aspect-[15/10] overflow-hidden rounded-2xl shadow-[0_4px_24px_rgba(26,58,42,0.15)]">
                <Image
                  src={t.image}
                  alt={`${t.name} result`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <p className="text-white/30 text-[11px] text-center leading-relaxed">
                *Individual results may vary. Images shown with patient consent.
              </p>

              <div className="hidden lg:flex items-center justify-between mt-2">
                <button
                  onClick={() => setActive((active - 1 + 3) % 3)}
                  className="flex items-center gap-2 text-white/50 hover:text-[#D4607A] transition-colors text-sm font-medium"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                  Prev treatment
                </button>
                <div className="flex gap-1.5">
                  {treatments.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === active ? "bg-[#D4607A] w-6 h-1.5" : "bg-white/20 w-3 h-1.5 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setActive((active + 1) % 3)}
                  className="flex items-center gap-2 text-white/50 hover:text-[#D4607A] transition-colors text-sm font-medium"
                >
                  Next treatment
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="text-white">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mb-5 text-center sm:text-left">
                <div className="w-10 sm:w-1 h-1 sm:h-auto bg-[#D4607A] rounded-full flex-shrink-0 mt-0 sm:mt-1 min-h-0 sm:min-h-12" />
                <div>
                  <h3 className="text-treatment font-display font-bold text-white leading-tight">
                    {t.name}
                  </h3>
                  <p className="text-[#D4607A] text-sm font-medium italic mt-1">
                    &ldquo;{t.tagline}&rdquo;
                  </p>
                </div>
              </div>

              <p className="text-white/70 leading-relaxed text-sm mb-7">{t.description}</p>

              <div className="mb-7">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#D4607A] mb-3">
                  Ideal For
                </h4>
                <ul className="space-y-2.5">
                  {t.idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/80 leading-relaxed">
                      <span className="text-[#D4607A] text-xs flex-shrink-0 mt-0.5">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px bg-white/10 mb-7" />

              <a
                href="#hero"
                className="btn-gold inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-white font-semibold text-sm tracking-wide"
              >
                Book Free Consultation
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 lg:h-12">
            <path d="M0 48L480 12L960 40L1440 4V48H0Z" fill="#FFFFFF" />
          </svg>
        </div>
      </div>

      <div className="bg-[#FFFFFF] py-8 md:py-10 max-[470px]:py-6 section-container">
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              "Blood-derived, no synthetic chemicals",
              "Every session supervised by Dr. Sai",
              "Sessions under 60 minutes",
              "FDA-approved protocols",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[#E8E0F2] bg-[#FDFBFF] px-3 py-3 flex items-center gap-2.5 text-[#5C3D8F] text-xs font-medium shadow-[0_2px_12px_rgba(92,61,143,0.06)]"
              >
                <span className="w-5 h-5 rounded-full bg-[#D4607A]/12 text-[#D4607A] flex items-center justify-center text-[10px] font-bold">
                  ✓
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
