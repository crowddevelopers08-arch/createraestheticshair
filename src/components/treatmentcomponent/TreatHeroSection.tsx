"use client";

const trustPoints = [
  "US FDA-Approved treatments — safe & clinically proven",
  "Every session personally supervised by Dr. Sai",
  "No surgery, no downtime — walk in, walk out",
  "2000+ patients treated at ECR Chennai",
];

const stats = [
  { value: "2000+", label: "Happy Patients" },
  { value: "100%", label: "Doctor-Led" },
  { value: "5★", label: "Google Rating" },
];

export default function TreatHeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1A0A35 0%, #2E1A4F 55%, #3D2468 100%)",
      }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#5C3D8F]/25 blur-[110px]" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-[#D4607A]/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 lg:py-24">

          {/* ── Left: Content ── */}
          <div className="flex flex-col items-start">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-2 mb-7">
              <span className="w-2 h-2 rounded-full bg-[#D4607A] animate-pulse shrink-0" />
              <span className="text-[#F2D7DF] text-xs font-semibold tracking-widest uppercase">
                Hair Restoration Clinic · ECR Chennai
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-white leading-[1.1] mb-5 text-4xl sm:text-5xl lg:text-5xl">
              Stop Losing Hair.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4607A] to-[#E8909C]">
                Start Restoring It
              </span>{" "}
              Today.
            </h1>

            {/* Description */}
            <p className="text-white/70 text-sm md:text-[15px] leading-relaxed mb-8 max-w-[480px]">
              At Creator Aesthetic Clinic, every treatment — GFC, Platelet Growth
              Therapy or Exosome Hair Therapy — is personally chosen and supervised
              by Dr. Sai based on your unique hair loss pattern.
            </p>

            {/* Trust checkpoints */}
            <ul className="space-y-3 mb-9">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#D4607A]/15 border border-[#D4607A]/35 flex items-center justify-center shrink-0">
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path d="M1 3.5L3.5 6L8 1" stroke="#D4607A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-white/75 text-sm">{point}</span>
                </li>
              ))}
            </ul>

            {/* Stats row */}
            <div className="flex items-stretch border border-white/12 rounded-2xl overflow-hidden mb-9 self-stretch max-w-sm">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex-1 text-center py-4 px-2 ${
                    i < stats.length - 1 ? "border-r border-white/12" : ""
                  }`}
                >
                  <p className="text-[#D4607A] font-display font-bold text-2xl leading-none">
                    {stat.value}
                  </p>
                  <p className="text-white/45 text-[10px] mt-1.5 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <a
                href="#consult"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white font-bold text-sm bg-gradient-to-r from-[#D4607A] to-[#B04868] shadow-[0_4px_20px_rgba(212,96,122,0.40)] hover:shadow-[0_6px_28px_rgba(212,96,122,0.55)] transition-all active:scale-[0.98]"
              >
                Book Free Consultation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href="tel:+916385083099"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/8 transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.07 2.18 2 2 0 012.03 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                </svg>
                Call Now
              </a>
            </div>

            {/* WhatsApp + stars */}
            <div className="flex items-center gap-5 flex-wrap">
              <a
                href="https://wa.me/916385083099?text=Hi%2C%20I%27m%20interested%20in%20a%20hair%20restoration%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] hover:text-[#34d778] text-sm font-semibold transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill="#D4607A">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white/50 text-xs">5-Star Google Reviews</span>
              </div>
            </div>
          </div>

          {/* ── Right: Image ── */}
          <div className="hidden lg:block relative">
            {/* Floating badge — top right */}
            <div className="absolute -top-4 right-0 z-10 bg-white rounded-2xl px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.18)] flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#5C3D8F]/10 flex items-center justify-center shrink-0">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#5C3D8F" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <p className="text-[#1C1C1C] text-xs font-bold">US FDA-Approved</p>
                <p className="text-[#787878] text-[10px]">All treatments</p>
              </div>
            </div>

            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.50)] mt-6">
              <img
                src="https://ik.imagekit.io/meafuhrp0/public/ban.jpg?updatedAt=1773322232470"
                alt="Creator Aesthetic Clinic - Hair Restoration"
                className="w-full h-[560px] object-cover object-center"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A35]/75 via-transparent to-transparent" />

              {/* Bottom info tag */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4">
                <p className="text-white font-display font-bold text-sm leading-tight">
                  Creator Aesthetic Clinic
                </p>
                <p className="text-white/60 text-xs mt-0.5">
                  Vettuvankeni, ECR Chennai · Mon–Sat · 10:30 AM–8:30 PM
                </p>
              </div>
            </div>

            {/* Floating badge — bottom left */}
            <div className="absolute -bottom-4 left-0 z-10 bg-white rounded-2xl px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.18)] flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#D4607A]/10 flex items-center justify-center shrink-0">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#D4607A" strokeWidth="2" strokeLinecap="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <div>
                <p className="text-[#1C1C1C] text-xs font-bold">2000+ Patients</p>
                <p className="text-[#787878] text-[10px]">Treated by Dr. Sai</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile image */}
      <div className="lg:hidden relative h-56 overflow-hidden">
        <img
          src="https://ik.imagekit.io/meafuhrp0/public/ban.jpg?updatedAt=1773322232470"
          alt="Creator Aesthetic Clinic"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A35] via-[#1A0A35]/30 to-transparent" />
      </div>
    </section>
  );
}
