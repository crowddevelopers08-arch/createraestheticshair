import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Creator Aesthetic Clinic",
  description: "Thank you for booking your free hair restoration consultation with Dr. Sai at Creator Aesthetic Clinic.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-cream flex flex-col items-center justify-center px-4 py-16">
      {/* Card */}
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-[0_8px_40px_rgba(92,61,143,0.12)] overflow-hidden">
        {/* Purple header band */}
        <div className="bg-forest px-8 py-8 flex flex-col items-center text-center">
          <a href="/">
            <Image
              src="/CreatorAesthetic.png"
              alt="Creator Aesthetic Clinic"
              width={180}
              height={52}
              className="h-12 w-auto object-contain rounded-lg mb-5"
            />
          </a>
          {/* Animated checkmark circle */}
          <div className="w-16 h-16 rounded-full bg-white/15 border-2 border-gold flex items-center justify-center mb-4">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path
                d="M6 14L11 19L22 9"
                stroke="#D4607A"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="font-display text-2xl font-bold text-white leading-tight">
            Booking Confirmed!
          </h1>
          <p className="text-white/70 text-sm mt-1">
            You&apos;re one step closer to restoring your hair.
          </p>
        </div>

        {/* Body */}
        <div className="px-8 py-8">
          <p className="text-charcoal-mid text-sm leading-relaxed text-center mb-7">
            Dr. Sai&apos;s team will call you within{" "}
            <span className="font-semibold text-forest">24 hours</span> to
            schedule your free consultation. We look forward to helping you.
          </p>

          {/* What happens next */}
          <div className="bg-cream rounded-2xl p-5 mb-7 space-y-4">
            <p className="text-xs font-semibold text-forest uppercase tracking-wider">
              What happens next
            </p>
            {[
              { step: "1", text: "Our team reviews your hair loss stage" },
              { step: "2", text: "We call you within 24 hours to confirm your slot" },
              { step: "3", text: "Free consultation with Dr. Sai at the clinic" },
            ].map(({ step, text }) => (
              <div key={step} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-forest flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                  {step}
                </span>
                <p className="text-charcoal text-sm">{text}</p>
              </div>
            ))}
          </div>

          {/* Contact options */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+916385083099"
              className="btn-gold flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-sm"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.07 2.18 2 2 0 012.03 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
              </svg>
              Call Now
            </a>
            <a
              href="https://wa.me/916385083099?text=Hi%2C%20I%20just%20submitted%20a%20consultation%20request"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#1fba58] text-white font-semibold text-sm transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          <div className="text-center mt-6">
            <a
              href="/"
              className="text-forest text-sm font-medium hover:text-forest-light transition-colors underline underline-offset-2"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>

      <p className="text-charcoal-soft text-xs mt-6 text-center">
        Mon – Sat · 10:30 AM – 8:30 PM · Vettuvankeni, ECR Chennai
      </p>
    </main>
  );
}
