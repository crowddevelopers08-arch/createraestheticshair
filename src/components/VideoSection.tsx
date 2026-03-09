import FadeIn from "./ui/FadeIn";

const reels = [
  {
    url: "https://www.instagram.com/reel/DVQmGObDCei/embed/",
    title: "Patient Transformation Journey",
  },
  {
    url: "https://www.instagram.com/reel/DU5n-l1EwWh/embed/",
    title: "What to Expect During GFC Treatment",
  },
  {
    url: "https://www.instagram.com/reel/DTtoZAWk006/embed/",
    title: "Hair Restoration Tips by Dr. Sai",
  },
];

export default function VideoSection() {
  return (
    <section id="videos" className="bg-[#5C3D8F] py-12 md:py-12 lg:py-12 max-[470px]:py-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] overflow-hidden">
        <svg viewBox="0 0 400 400" className="w-[400px] h-[400px] absolute -bottom-20 -left-20 text-[#D4607A]" fill="currentColor">
          <circle cx="200" cy="200" r="160" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        {/* Heading */}
        <FadeIn>
          <div className="text-center mb-4">
            <span className="inline-flex items-center gap-2">
              <span className="h-px w-8 bg-[#D4607A]" />
              <span className="text-[#D4607A] text-xs font-semibold tracking-widest uppercase">
                Watch Before You Book
              </span>
              <span className="h-px w-8 bg-[#D4607A]" />
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-section font-display font-bold text-white text-center mb-4">
            Learn From Dr. Sai.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-white/65 text-center max-w-xl mx-auto mb-12 max-[470px]:mb-6 leading-relaxed">
            Short, honest videos from Dr. Sai and our team, answering common
            questions and showing you exactly what to expect before you walk in.
          </p>
        </FadeIn>

        {/* Reels grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reels.map((reel, i) => (
            <FadeIn key={reel.url} delay={i * 0.1}>
              <div className="flex flex-col gap-3">
                {/* Reel iframe */}
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-[#3A2568] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.30)]">
                  <iframe
                    src={reel.url}
                    title={reel.title}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="text-white/60 text-xs text-center leading-relaxed">
                  {reel.title}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-[470px]:mt-7 mt-14 w-full">
            <a
              href="#hero"
              className="btn-gold flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full text-white font-semibold text-sm tracking-wide"
            >
              Book Your Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a
              href="https://wa.me/916385083099?text=Hi%2C%20I%27m%20interested%20in%20hair%20restoration"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto border border-white/30 text-white rounded-full px-8 py-4 font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
