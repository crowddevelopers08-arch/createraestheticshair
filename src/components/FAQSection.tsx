"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "./ui/FadeIn";

const faqs = [
  {
    q: "What is the difference between GFC and Platelet Growth Therapy?",
    a: "Both are derived from your own blood, but GFC is more advanced and purer. GFC isolates only the growth factors, removing inflammatory cells, resulting in higher potency and less post-treatment discomfort. Dr. Sai will recommend the right one based on your hair loss pattern.",
  },
  {
    q: "Is Exosome Therapy better than GFC?",
    a: "Exosome Therapy is the most advanced option and works at a molecular level, going deeper than growth factor injections alone. For many patients, combining GFC with Exosome Therapy in a structured programme delivers the best possible outcome.",
  },
  {
    q: "Are these treatments painful?",
    a: "All three treatments are performed with topical numbing cream applied 20 to 30 minutes before injections. The vast majority of patients find the procedure very tolerable. Dr. Sai uses ultra-fine needles and a precise technique throughout.",
  },
  {
    q: "How many sessions will I need?",
    a: "GFC and Platelet Growth Therapy typically require 3 to 4 sessions spaced 4 to 6 weeks apart. Exosome Therapy often produces results in 2 to 3 sessions due to its higher potency. Dr. Sai will assess your hair loss and recommend the right number.",
  },
  {
    q: "When will I see results?",
    a: "Most patients notice a reduction in hair shedding within 4 to 6 weeks of the first session. Visible new hair growth typically appears between weeks 8 and 16. Maximum density improvement is seen at the 4 to 6 month mark.",
  },
  {
    q: "Are these treatments safe for women?",
    a: "Yes. All three treatments are safe and effective for women experiencing hair thinning, diffuse hair loss, or post-partum hair fall. Dr. Sai evaluates each patient individually, including hormonal and nutritional factors, to ensure the right approach.",
  },
  {
    q: "Is there any downtime?",
    a: "No significant downtime. Return to your normal routine the same day. Mild redness or sensitivity at the scalp may last 12 to 48 hours. Hair washing can resume after 24 hours.",
  },
  {
    q: "Can I combine treatments?",
    a: "Yes, and in many cases combination therapy produces the best results. GFC plus Exosome is our most premium hair restoration protocol. Dr. Sai designs a customised programme for patients wanting maximum outcomes.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#F8F4FF] py-10 md:py-12 lg:py-12 max-[470px]:py-6">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-3">
            <span className="inline-flex items-center gap-2">
              <span className="h-px w-8 bg-[#D4607A]" />
              <span className="text-[#D4607A] text-xs font-semibold tracking-widest uppercase">
                Frequently Asked Questions
              </span>
              <span className="h-px w-8 bg-[#D4607A]" />
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-section font-display font-bold text-[#5C3D8F] text-center mb-2">
            Questions About Hair Restoration?
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-[#4A4A4A] text-center mb-10 max-[470px]:mb-4 leading-relaxed max-w-2xl mx-auto">
            Quick answers from Dr. Sai and team before your first consultation.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-[360px_1fr] gap-6 lg:gap-8 items-start">
          <FadeIn delay={0.25}>
            <div className="hidden lg:block lg:sticky lg:top-24 space-y-4">
              <div className="relative h-[250px] rounded-2xl overflow-hidden border border-[#E8E0F2]">
                <Image
                  src="https://ik.imagekit.io/meafuhrp0/public/fa1.jpg?updatedAt=1773322231695"
                  alt="Dr. Sai at Creator Aesthetic Clinic"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b1748]/70 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold">
                  Doctor-supervised treatment planning for every patient
                </p>
              </div>
              <div className="relative h-[180px] rounded-2xl overflow-hidden border border-[#E8E0F2]">
                <Image
                  src="https://ik.imagekit.io/meafuhrp0/public/fa2.jpg?updatedAt=1773322232414"
                  alt="Hair restoration treatment area"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>

          <div className="space-y-2.5">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={0.06 + i * 0.03}>
                <div
                  className={`bg-white rounded-xl overflow-hidden border transition-all duration-200 ${
                    active === i
                      ? "border-[#D4607A] shadow-[0_4px_18px_rgba(212,96,122,0.14)]"
                      : "border-[#E8E0F2] hover:border-[#D4607A]/35"
                  }`}
                >
                  <button
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                    onClick={() => setActive(active === i ? null : i)}
                    aria-expanded={active === i}
                  >
                    <span className="font-display font-semibold text-[#5C3D8F] text-sm md:text-base leading-snug pr-4">
                      {faq.q}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#D4607A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="flex-shrink-0 transition-transform duration-300"
                      style={{
                        transform: active === i ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: active === i ? "520px" : "0px" }}
                  >
                    <p className="px-5 pb-5 text-[#4A4A4A] leading-relaxed text-sm">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
