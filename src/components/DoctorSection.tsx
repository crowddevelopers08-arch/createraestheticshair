import Image from "next/image";
import FadeIn from "./ui/FadeIn";

const philosophy = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4607A" strokeWidth="1.5" strokeLinecap="round">
        <path d="M9 12h6M9 16h6M9 8h6M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
        <circle cx="7.5" cy="12" r="1" fill="#D4607A" />
      </svg>
    ),
    title: "Diagnose Before Treating",
    body: "Every patient receives a thorough clinical assessment before any treatment is recommended. No assumptions, no rush.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4607A" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Educate, Then Decide",
    body: "Dr. Sai explains the science behind every treatment in plain language so you understand exactly what is being done to your scalp and why.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4607A" strokeWidth="1.5" strokeLinecap="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: "No Delegation - Ever",
    body: "Every injection, every protocol, every follow-up is Dr. Sai - not a technician. Your result is her personal responsibility.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4607A" strokeWidth="1.5" strokeLinecap="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Real Results Over Quick Wins",
    body: "Dr. Sai designs treatment plans for lasting outcomes - not temporary improvements that fade within months.",
  },
];

export default function DoctorSection() {
  return (
    <section id="doctor" className="bg-[#FFFFFF] py-12 md:py-12 lg:py-12 max-[470px]:py-6">
      <div className="section-container">
        <div className="grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-20 items-start">
          {/* Doctor photo + credentials */}
          <FadeIn direction="left">
            <div className="flex flex-col items-center lg:items-start gap-6">
              {/* Photo placeholder */}
              <div className="relative w-full max-w-72 h-80 lg:max-w-none lg:w-full lg:h-96 rounded-3xl overflow-hidden border-4 border-[#D4607A]/30 shadow-[0_8px_48px_rgba(92,61,143,0.15)]">
                <Image
                  src="/creatdoc.png"
                  alt="Dr. Sai - Creator Aesthetic Clinic"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 256px, 340px"
                />
                {/* Fallback gradient when no photo */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#5C3D8F]/40 via-transparent to-[#5C3D8F]/60 flex flex-col justify-end p-4 sm:p-6">
                  <div className="text-white">
                    <p className="font-display font-bold text-xl">Dr. Sai</p>
                    <p className="text-white/80 text-sm mt-1">
                      Founder, Creator Aesthetic Clinic
                    </p>
                    <p className="text-white/80 text-xs mt-0.5">
                      Hair Restoration Specialist · ECR Chennai
                    </p>
                  </div>
                </div>
              </div>

              {/* Credentials card */}
              <div className="bg-[#5C3D8F] rounded-2xl p-4 sm:p-5 w-full max-w-xs text-white">
                <h4 className="font-display font-semibold text-[#D4607A] mb-3 text-sm uppercase tracking-wider">
                  Credentials
                </h4>
                <ul className="space-y-2 text-sm text-white/85">
                  {[
                    "MBBS, MD - Aesthetic Medicine",
                    "Certified Hair Restoration Physician",
                    "FDA-Approved Treatment Protocols",
                    "Advanced GFC & Exosome Training",
                  ].map((cred) => (
                    <li key={cred} className="flex items-start gap-2">
                      <span className="text-[#D4607A] text-xs mt-0.5 flex-shrink-0">
                        -
                      </span>
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <div>
            <FadeIn direction="right">
              <div className="mb-3">
                <span className="inline-flex items-center gap-2">
                  <span className="h-px w-8 bg-[#D4607A]" />
                  <span className="text-[#D4607A] text-xs font-semibold tracking-widest uppercase">
                    The Doctor Behind Your Results
                  </span>
                </span>
              </div>
              <h2 className="text-section font-display font-bold text-[#5C3D8F] mb-4">
                Meet Dr. Sai.
              </h2>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              {/* Pull quote */}
              <blockquote className="border-l-4 border-[#D4607A] pl-5 mb-8">
                <p className="font-display text-lg italic text-[#5C3D8F] leading-relaxed">
                  &ldquo;Behind every hair transformation at Creator Aesthetic
                  Clinic is a doctor who takes hair loss personally - because
                  she understands the confidence it costs you.&rdquo;
                </p>
              </blockquote>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <p className="text-[#4A4A4A] leading-relaxed mb-10">
                Real results come from the right diagnosis, the right
                technology, and the right hands. Dr. Sai combines clinical
                precision with a genuine care for each patient&apos;s journey
                - from first consultation to final result.
              </p>
            </FadeIn>

            {/* Philosophy cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {philosophy.map((item, i) => (
                <FadeIn key={item.title} delay={0.1 + i * 0.08}>
                  <div className="bg-white rounded-2xl p-4 sm:p-5 border-l-4 border-[#D4607A] shadow-[0_4px_24px_rgba(92,61,143,0.08)] hover:shadow-[0_8px_32px_rgba(92,61,143,0.13)] transition-shadow">
                    <div className="mb-3">{item.icon}</div>
                    <h4 className="font-display font-semibold text-[#5C3D8F] text-base mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* CTA */}
            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full">
                <a
                  href="#hero"
                  className="btn-gold flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-white font-semibold text-sm tracking-wide text-center"
                >
                  Book a Consultation with Dr. Sai
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </a>
                <a
                  href="tel:+916385083099"
                  className="lg:hidden flex items-center justify-center gap-2 w-full sm:w-auto border-2 border-forest text-forest rounded-full px-7 py-3.5 font-semibold text-sm hover:bg-forest hover:text-white transition-all btn-outline"
                >
                  Call +91 63850 83099
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

