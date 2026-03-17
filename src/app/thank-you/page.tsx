import type { Metadata } from "next";
import PageTopNavbar from "@/components/PageTopNavbar";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Thank You | Creator Aesthetic Clinic",
  description:
    "Thank you for booking your hair restoration consultation with Dr. Sai at Creator Aesthetic Clinic.",
};

export default function ThankYouPage() {
  return (
    <>
    <main className="min-h-screen bg-cream">
      <PageTopNavbar />

      <div className="px-4 py-16 max-[470px]:py-6 flex flex-col items-center justify-center">
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-[0_8px_40px_rgba(92,61,143,0.12)] overflow-hidden">
          <div className="bg-forest px-8 py-8 flex flex-col items-center text-center">
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

          <div className="px-8 py-8">
            <p className="text-charcoal-mid text-sm leading-relaxed text-center mb-7">
              Dr. Sai&apos;s team will call you within{" "}
              <span className="font-semibold text-forest">24 hours</span> to
              schedule your consultation. We look forward to helping you.
            </p>

            <div className="bg-cream rounded-2xl p-5 mb-7 space-y-4">
              <p className="text-xs font-semibold text-forest uppercase tracking-wider">
                What happens next
              </p>
              {[
                { step: "1", text: "Our team reviews your hair loss stage" },
                {
                  step: "2",
                  text: "We call you within 24 hours to confirm your slot",
                },
                { step: "3", text: "Consultation with Dr. Sai at the clinic" },
              ].map(({ step, text }) => (
                <div key={step} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-forest flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                    {step}
                  </span>
                  <p className="text-charcoal text-sm">{text}</p>
                </div>
              ))}
            </div>

            <a
              href="tel:+916385083099"
              className="btn-gold w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-sm"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.07 2.18 2 2 0 012.03 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
              </svg>
              Call +91 63850 83099
            </a>
          </div>
        </div>

        <p className="text-charcoal-soft text-xs mt-6 text-center">
          Mon - Sat | 10:30 AM - 8:30 PM | Vettuvankeni, ECR Chennai
        </p>
      </div>
    </main>
    </>
  );
}
