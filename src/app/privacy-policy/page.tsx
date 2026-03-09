import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Creator Aesthetic Clinic",
  description: "Privacy policy for Creator Aesthetic Clinic — how we collect, use, and protect your personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    content: [
      "When you submit a consultation request on our website, we collect your name, phone number, and area/location to contact you about your enquiry.",
      "We may also collect your hair loss stage selection to help our team prepare for your consultation.",
      "We do not collect payment information through this website.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "To contact you and schedule your free hair restoration consultation with Dr. Sai.",
      "To understand your concern better and recommend the most suitable treatment (GFC, PRP, or Exosome therapy).",
      "We do not sell, rent, or share your personal information with third parties for marketing purposes.",
    ],
  },
  {
    title: "Communication",
    content: [
      "By submitting the consultation form, you consent to being contacted by our team via phone call or WhatsApp at the number you provided.",
      "You may opt out of further communication at any time by calling us at +91 63850 83099 or sending a message on WhatsApp.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "Your personal data is stored securely and accessed only by our clinical team for the purpose of scheduling and conducting your consultation.",
      "We take reasonable steps to protect your information from unauthorised access, disclosure, or misuse.",
    ],
  },
  {
    title: "Cookies & Analytics",
    content: [
      "Our website may use standard analytics tools to understand visitor behaviour in aggregate. No personally identifiable information is collected through cookies.",
      "You can disable cookies in your browser settings without affecting your ability to use our website.",
    ],
  },
  {
    title: "Third-Party Links",
    content: [
      "Our website may contain links to Google Maps and WhatsApp. These third-party services have their own privacy policies, which we encourage you to review.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "Our services are intended for adults. We do not knowingly collect personal information from anyone under 18 years of age.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated date.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions about this privacy policy or how we handle your data, please contact us:",
    ],
    contact: true,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-forest">
        <div className="section-container py-6 flex items-center justify-between">
          <a href="/">
            <Image
              src="/CreatorAesthetic.png"
              alt="Creator Aesthetic Clinic"
              width={160}
              height={46}
              className="h-11 w-auto object-contain rounded-lg"
            />
          </a>
          <a
            href="/"
            className="text-white/70 hover:text-white text-sm transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>

      {/* Hero band */}
      <div className="bg-forest-dark">
        <div className="section-container py-10">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">
            Legal
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-sm mt-2">
            Last updated: March 2026 &nbsp;·&nbsp; Creator Aesthetic Clinic,
            Vettuvankeni, ECR Chennai
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="section-container py-14 max-w-3xl">
        <p className="text-charcoal-mid text-sm leading-relaxed mb-10">
          At Creator Aesthetic Clinic, your privacy is important to us. This
          policy explains what information we collect when you visit our
          website, how we use it, and the steps we take to keep it safe.
        </p>

        <div className="space-y-10">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="font-display text-lg font-semibold text-forest mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-forest text-white text-xs flex items-center justify-center font-bold shrink-0">
                  {idx + 1}
                </span>
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.content.map((para, i) => (
                  <li
                    key={i}
                    className="text-charcoal-mid text-sm leading-relaxed pl-4 border-l-2 border-gold/30"
                  >
                    {para}
                  </li>
                ))}
              </ul>
              {section.contact && (
                <div className="mt-4 bg-cream-dark rounded-2xl p-5 space-y-2 text-sm text-charcoal-mid">
                  <p>
                    <span className="font-semibold text-forest">Clinic:</span>{" "}
                    Creator Aesthetic Clinic
                  </p>
                  <p>
                    <span className="font-semibold text-forest">Address:</span>{" "}
                    Vettuvankeni, ECR (East Coast Road), Chennai, Tamil Nadu
                  </p>
                  <p>
                    <span className="font-semibold text-forest">Phone:</span>{" "}
                    <a
                      href="tel:+916385083099"
                      className="text-gold hover:text-gold-dark transition-colors"
                    >
                      +91 63850 83099
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-forest">Hours:</span>{" "}
                    Monday – Saturday, 10:30 AM – 8:30 PM
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-cream-dark flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-charcoal-soft text-xs">
            © {new Date().getFullYear()} Creator Aesthetic Clinic. All rights reserved.
          </p>
          <a
            href="/"
            className="btn-forest text-white text-sm font-semibold px-6 py-2.5 rounded-full"
          >
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
