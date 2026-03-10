import LeadForm from "./LeadForm";

const trustBadges = [
  "FDA-Approved Treatments",
  "Doctor Supervised Every Session",
  "No Surgery - No Downtime",
  "5-Star Google Rated Clinic",
];

const stats = [
  { value: "2000+", label: "Happy Patients" },
  { value: "3", label: "Advanced Treatments" },
  { value: "100%", label: "Doctor-Led Sessions" },
];

export default function HeroSection() {
  return (
    <section
      className="hero-section relative min-h-screen overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(46,26,79,0.84), rgba(46,26,79,0.86)), url('/ban.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="section-container hero-container relative z-10">
        <div className="hero-grid grid lg:grid-cols-[1fr_420px] gap-6 sm:gap-8 lg:gap-12 items-start py-8 sm:py-10 lg:py-14 lg:min-h-screen">
          <div className="hero-copy flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <div className="hero-kicker inline-flex items-center justify-center lg:justify-start gap-2 mb-4 flex-wrap">
              <span className="h-px w-8 bg-[#D4607A]" />
              <span className="text-[#F2D7DF] text-xs font-semibold tracking-widest uppercase">
                Doctor-Led Hair Restoration Clinic - ECR Chennai
              </span>
            </div>

            <h1 className="text-hero text-white font-display font-bold mb-5 max-w-[22ch]">
              Your Hair Is Not Lost.
              <br />
              <span className="text-[#D4607A]">It Needs</span> The Right Doctor.
            </h1>

            <p className="hero-desc text-white/85 text-sm md:text-base leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              At Creator Aesthetic Clinic, every treatment is personally supervised
              by Dr. Sai. GFC, Platelet Growth Therapy, and Exosome Hair Therapy
              are selected based on your unique hair loss pattern.
            </p>

            <div className="hero-badges flex flex-wrap justify-center lg:justify-start gap-2 mb-7 w-full">
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center justify-center gap-2 bg-white/12 border border-white/20 rounded-full px-3 py-1.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4607A]" />
                  <span className="text-white/95 text-xs font-medium">{badge}</span>
                </div>
              ))}
            </div>

            <div className="hero-stats grid grid-cols-3 w-full gap-3 sm:gap-4 border-t border-white/20 pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-display font-bold text-[#D4607A]">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-5 mt-6">
              <a
                href="#hero"
                data-book-consultation="true"
                className="btn-gold px-6 py-3 rounded-full text-white font-semibold text-sm"
              >
                Book Your Consultation
              </a>
              <a
                href="https://wa.me/916385083099?text=Hi%2C%20I%27m%20interested%20in%20a%20hair%20restoration%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:text-[#34d778] text-sm font-semibold transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="hero-reviews flex items-center justify-center lg:justify-start gap-2.5 mt-5 text-center lg:text-left flex-wrap">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#D4607A"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-white/75 text-xs">
                5-Star Google Reviews - ECR Chennai
              </span>
            </div>
          </div>


          <section id="hero" className="hero-form-anchor w-full">

          <div className="hero-form-wrap w-full max-w-full lg:sticky lg:top-20">
            <LeadForm variant="hero" />
            <div className="flex gap-3 mt-3 lg:hidden">
              <a
                href="tel:+916385083099"
                className="flex-1 flex items-center justify-center bg-white/15 border border-white/25 rounded-xl py-3 text-white font-semibold text-sm"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/916385083099"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center bg-[#25D366]/20 border border-[#25D366]/40 rounded-xl py-3 text-[#25D366] font-semibold text-sm"
              >
                WhatsApp
              </a>
            </div>
          </div>

          </section>
        </div>
      </div>
    </section>
  );
}
