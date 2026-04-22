"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#results", label: "Results" },
  { href: "#treatments", label: "Treatments" },
  { href: "#doctor", label: "Dr. Sai" },
  { href: "#testimonials", label: "Patients" },
  { href: "#faq", label: "FAQ" },
];

export default function TreatNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(92,61,143,0.10)]"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <Image
              src="https://ik.imagekit.io/meafuhrp0/public/CreatorAesthetic.png?updatedAt=1773322232935"
              alt="Creator Aesthetic Clinic"
              width={160}
              height={46}
              className="h-10 sm:h-11 w-auto object-contain rounded-lg"
              priority
            />
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-5 lg:gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-[#4A4A4A] transition-colors hover:text-[#D4607A]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+916385083099"
              className="flex items-center gap-2 text-sm font-semibold text-[#5C3D8F] hover:text-[#D4607A] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.07 2.18 2 2 0 012.03 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
              </svg>
              +91 63850 83099
            </a>
            <a
              href="#hero"
              className="btn-gold flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold"
            >
              Book Consultation
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block h-0.5 w-6 transition-all duration-300 bg-[#5C3D8F] ${
                    menuOpen && i === 0 ? "rotate-45 translate-y-2" : ""
                  } ${menuOpen && i === 1 ? "opacity-0" : ""} ${
                    menuOpen && i === 2 ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              ))}
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-t border-[#E8E0F2] transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <div className="section-container pt-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#5C3D8F] font-medium py-2 border-b border-[#E8E0F2] last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+916385083099"
            className="mt-2 btn-gold text-white py-3 rounded-xl text-center font-semibold text-sm"
          >
            Call +91 63850 83099
          </a>
        </div>
      </div>
    </header>
  );
}
