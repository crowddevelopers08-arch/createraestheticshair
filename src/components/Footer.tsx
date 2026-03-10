import Image from "next/image";

export default function Footer() {
  return (
    <footer id="location" className="bg-forest-dark text-white">
      {/* Main footer content */}
      <div className="section-container py-10 md:py-12 lg:py-12 max-[470px]:py-6">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Info */}
          <div>
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/CreatorAesthetic.png"
                alt="Creator Aesthetic Clinic"
                width={180}
                height={52}
                className="h-12 w-auto object-contain rounded-lg"
              />
            </div>

            {/* Tagline */}
            <p className="text-white/65 text-sm leading-relaxed mb-8 max-w-sm">
              Chennai&apos;s premier hair restoration clinic - where every
              treatment is personally supervised by Dr. Sai.
            </p>

            {/* Heading */}
            <h3 className="font-display font-semibold text-gold-light text-lg mb-4">
              Visit Creator Aesthetic Clinic
            </h3>

            {/* Address */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 text-sm text-white/75">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D4607A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="mt-0.5 shrink-0"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  Vettuvankeni, ECR (East Coast Road)
                  <br />
                  Chennai, Tamil Nadu
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm text-white/75">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D4607A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.07 2.18 2 2 0 012.03 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                </svg>
                <a
                  href="tel:+916385083099"
                  className="hover:text-gold transition-colors"
                >
                  +91 63850 83099
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm text-white/75">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D4607A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="shrink-0"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Monday - Saturday · 10:30 AM - 8:30 PM</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+916385083099"
                className="btn-gold lg:hidden flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold text-sm"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.07 2.18 2 2 0 012.03 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                </svg>
                Call Now
              </a>
              <a
                href="https://wa.me/916385083099?text=Hi%2C%20I%27m%20interested%20in%20a%20hair%20restoration%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1fba58] text-white rounded-full px-5 py-2.5 font-semibold text-sm transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Now
              </a>
              <a
                href="#hero"
                data-book-consultation="true"
                className="border border-white/25 text-white rounded-full px-5 py-2.5 font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Book Consultation
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div>
            <h4 className="font-display font-semibold text-white/80 text-sm uppercase tracking-wider mb-4">
              Find Us on Maps
            </h4>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.30)]">
             <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15544.582416490915!2d80.17634595000001!3d13.089957149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a525de3464fc557%3A0x64e427365c435be4!2sCreator%20Aesthetic%20Clinic%2C%20First%20Floor%2C%206a%2C%20East%20Coast%20Rd%2C%20Rajendra%20Garden%2C%20Bismillah%20Nagar%2C%20Pandian%20Nagar%2C%20Vettuvankeni%2C%20Chennai%2C%20Tamil%20Nadu%20600115!3m2!1d12.9371855!2d80.2527234!5e0!3m2!1sen!2sin!4v1773046479856!5m2!1sen!2sin"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Creator Aesthetic Clinic Location"
              />
            </div>
            <p className="text-white/40 text-xs mt-3">
              *Your details are kept confidential. T &amp; C apply.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
            <p>
              (c) {new Date().getFullYear()} Creator Aesthetic Clinic. All rights
              reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a href="/privacy-policy" className="hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <span> · </span>
              <a href="#" className="hover:text-gold transition-colors">
                Terms of Service
              </a>
              <span> · </span>
              <a href="#" className="hover:text-gold transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
