import FadeIn from "./ui/FadeIn";

const testimonials = [
  {
    name: "Karthik L.",
    location: "Adyar, Chennai",
    treatment: "GFC Hair Therapy",
    rating: 5,
    quote:
      "I had been losing hair for almost 4 years and tried every oil, shampoo, and supplement on the market. Nothing worked. After 2 sessions of GFC with Dr. Sai, the hair fall actually stopped - and by my third session I could see new hair coming in. I wish I had done this years ago.",
    initial: "K",
    color: "#5C3D8F",
  },
  {
    name: "Kaviya P.",
    location: "Velachery, Chennai",
    treatment: "Platelet Growth Therapy",
    rating: 5,
    quote:
      "I was scared about having injections in my scalp but the numbing cream made it completely manageable. Dr. Sai explained every step and was so professional. My hair fall reduced dramatically after the second session and my hair is noticeably thicker. I am very happy I came here.",
    initial: "K",
    color: "#7A5CB8",
  },
  {
    name: "Manoj K.",
    location: "OMR, Chennai",
    treatment: "Exosome Hair Therapy",
    rating: 5,
    quote:
      "I had already tried two rounds of a standard treatment at a different clinic and didn't see much improvement. Dr. Sai recommended Exosome Therapy and the difference was remarkable. After just one session there was a noticeable change in the texture and thickness of my hair. This is genuinely the future of hair treatment.",
    initial: "M",
    color: "#B04868",
  },
  {
    name: "Sneha P.",
    location: "ECR, Chennai",
    treatment: "GFC Hair Therapy",
    rating: 5,
    quote:
      "As a woman dealing with hair thinning, it's hard to find a doctor who takes it seriously. Dr. Sai was different - she was patient, and genuinely knowledgeable. The GFC treatment has made such a difference to my confidence. The clinic is clean, calm, and professional. I highly recommend.",
    initial: "S",
    color: "#D4607A",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#D4607A">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#FFFFFF] py-12 md:py-12 lg:py-12 max-[470px]:py-6">
      <div className="section-container">
        {/* Heading */}
        <FadeIn>
          <div className="text-center mb-4">
            <span className="inline-flex items-center gap-2">
              <span className="h-px w-8 bg-[#D4607A]" />
              <span className="text-[#D4607A] text-xs font-semibold tracking-widest uppercase">
                Real Patients · Real Results
              </span>
              <span className="h-px w-8 bg-[#D4607A]" />
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-section font-display font-bold text-[#5C3D8F] text-center mb-3">
            They Almost Gave Up on Their Hair.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-[#4A4A4A] text-center max-w-xl mx-auto mb-12 max-[470px]:mb-6 leading-relaxed">
            These are the words of real patients from Creator Aesthetic Clinic,
            ECR.
          </p>
        </FadeIn>

        {/* Mobile  */}
        <div className="sm:hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          <div className="flex gap-4">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.06} className="w-full shrink-0 snap-center">
                <div
                  className="bg-white rounded-2xl p-5 shadow-[0_4px_24px_rgba(92,61,143,0.08)] border-t-4 h-full flex flex-col"
                  style={{ borderTopColor: t.color }}
                >
                  <div className="flex justify-center">
                    <StarRating count={t.rating} />
                  </div>
                  <blockquote className="mt-4 flex-1">
                    <p className="font-display italic text-[#4A4A4A] text-sm leading-relaxed line-clamp-6 text-center">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </blockquote>
                  <div className="mt-5 pt-4 border-t border-[#F8F4FF] flex items-center justify-center gap-3 text-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-bold text-base flex-shrink-0"
                      style={{ backgroundColor: t.color }}
                    >
                      {t.initial}
                    </div>
                    <div>
                      <p className="font-semibold text-[#5C3D8F] text-sm leading-tight">
                        {t.name}
                      </p>
                      <p className="text-[#787878] text-xs mt-0.5">{t.location}</p>
                      <span className="inline-block mt-1 bg-[#5C3D8F]/8 text-[#5C3D8F] text-xs px-2 py-0.5 rounded-full font-medium">
                        {t.treatment}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#D4607A">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span className="text-xs text-[#787878]">Verified Patient</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Desktop/tablet grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.08}>
              <div
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_4px_24px_rgba(92,61,143,0.08)] border-t-4 hover:shadow-[0_8px_32px_rgba(92,61,143,0.13)] transition-shadow h-full flex flex-col"
                style={{ borderTopColor: t.color }}
              >
                <StarRating count={t.rating} />
                <blockquote className="mt-4 flex-1">
                  <p className="font-display italic text-[#4A4A4A] text-sm leading-relaxed line-clamp-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
                <div className="mt-5 pt-4 border-t border-[#F8F4FF] flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-bold text-base flex-shrink-0"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-[#5C3D8F] text-sm leading-tight">
                      {t.name}
                    </p>
                    <p className="text-[#787878] text-xs mt-0.5">{t.location}</p>
                    <span className="inline-block mt-1 bg-[#5C3D8F]/8 text-[#5C3D8F] text-xs px-2 py-0.5 rounded-full font-medium">
                      {t.treatment}
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#D4607A">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span className="text-xs text-[#787878]">Verified Patient</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Google Reviews trust signal */}
        <FadeIn delay={0.4}>
          <div className="mt-12 max-[470px]:mt-6 text-center">
            <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-[0_4px_20px_rgba(92,61,143,0.08)] border border-[#E8E0F2]">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#D4607A">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <div className="text-left">
                <p className="font-semibold text-[#5C3D8F] text-sm">
                  5.0 on Google Reviews
                </p>
                <p className="text-[#787878] text-xs">Creator Aesthetic Clinic, ECR</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}


