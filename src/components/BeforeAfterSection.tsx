import Image from "next/image";
import FadeIn from "./ui/FadeIn";

const treatments = [
  {
    label: "GFC Hair Therapy",
    image: "/gfc.png",
    imageAlt: "GFC Hair Therapy result",
  },
  {
    label: "Platelet Growth Therapy",
    image: "/plate.png",
    imageAlt: "Platelet Growth Therapy result",
  },
  {
    label: "Exosome Hair Therapy",
    image: "/exo.png",
    imageAlt: "Exosome Hair Therapy result",
  },
];

export default function BeforeAfterSection() {
  return (
    <section id="results" className="bg-[#FFFFFF] py-12 md:py-12 lg:py-12 max-[470px]:py-6">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-4">
            <span className="inline-flex items-center gap-2">
              <span className="h-px w-8 bg-[#D4607A]" />
              <span className="text-[#D4607A] text-xs font-semibold tracking-widest uppercase">
                Real Results
              </span>
              <span className="h-px w-8 bg-[#D4607A]" />
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-section font-display font-bold text-[#5C3D8F] text-center mb-4">
            3 Advanced Treatments.
            <br />
            <span className="text-[#D4607A]">One Mission:</span> To Bring
            Your Hair Back.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-[#4A4A4A] text-center max-w-2xl mx-auto mb-12 max-[470px]:mb-6 leading-relaxed">
            Each treatment below is performed under the direct supervision of
            Dr. Sai at Creator Aesthetic Clinic, ECR - where medical precision
            meets aesthetic artistry.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {treatments.map((treatment, i) => (
            <FadeIn key={treatment.label} delay={i * 0.1}>
              <div className="flex flex-col gap-2">
                {/* <span className="text-xs font-semibold tracking-widest text-gold uppercase text-center">
                  {treatment.label}
                </span> */}
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-[0_4px_24px_rgba(26,58,42,0.15)]">
                  <Image
                    src={treatment.image}
                    alt={treatment.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <a
              href="#hero"
              className="btn-gold flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full text-white font-semibold text-sm tracking-wide"
            >
              Book Your Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a
              href="tel:+916385083099"
              className="lg:hidden flex items-center justify-center gap-2 text-center text-[#5C3D8F] font-semibold text-sm hover:text-[#D4607A] transition-colors w-full sm:w-auto"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.07 2.18 2 2 0 012.03 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
              </svg>
              Let&apos;s Talk · +91 63850 83099
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
