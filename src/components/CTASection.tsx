import FadeIn from "./ui/FadeIn";

export default function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden py-12 md:py-14 lg:py-16 bg-[#2C1A4B]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_10%_10%,rgba(212,96,122,0.26),transparent_45%),radial-gradient(circle_at_90%_70%,rgba(122,92,184,0.35),transparent_40%),linear-gradient(135deg,#5C3D8F_0%,#3A2568_55%,#24143f_100%)]" />
        <div className="absolute -top-24 -left-20 w-72 h-72 rounded-full border border-white/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/5" />
        <div className="absolute -bottom-24 -right-12 w-80 h-80 rounded-full border border-white/10" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(120deg,transparent_25%,rgba(255,255,255,0.08)_48%,transparent_72%)]" />
      </div>

      <div className="section-container relative z-10">
        <FadeIn>
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-16 right-8 h-40 w-40 rounded-full bg-[#D4607A]/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-[#7A5CB8]/25 blur-3xl" />
            <div className="absolute top-10 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-[#D4607A]/30 blur-2xl" />
          </div>

          <div className="relative py-4 md:py-6 lg:py-8 text-center flex flex-col items-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/80 text-[11px] tracking-[0.16em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4607A]" />
              Hair Recovery Starts Here
            </span>

            <h2 className="text-section font-display font-bold text-white mb-4">
              Take the First Step Today
            </h2>

            <p className="text-[#D4607A] font-display text-lg md:text-xl leading-tight max-w-2xl mb-4">
              Your Hair Can Grow Back. When Will You Start?
            </p>
            <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-3xl mb-7">
              The sooner hair loss is treated, the better the results. Follicles that are weakened but not yet dead respond dramatically to the right treatment. Book a consultation with Dr. Sai walk in, get assessed, and leave with a personalised hair restoration plan.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
              <a
                href="#hero"
                className="btn-gold inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-white font-semibold text-sm shadow-[0_10px_28px_rgba(212,96,122,0.35)]"
              >
                Book Your Consultation
                <svg
                  width="16"
                  height="16"
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
              <a
                href="https://wa.me/916385083099?text=Hi%2C%20I%20want%20to%20book%20a%20hair%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 rounded-full border border-white/35 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
