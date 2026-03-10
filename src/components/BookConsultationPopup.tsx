"use client";

import { useEffect, useState } from "react";
import LeadForm from "./LeadForm";

export default function BookConsultationPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest("[data-book-consultation='true']");
      if (!trigger) return;

      event.preventDefault();
      setOpen(true);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close consultation form"
        className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"
        onClick={() => setOpen(false)}
      />

      <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-[#F8F4FF] p-4 sm:p-5 md:p-6 shadow-[0_12px_48px_rgba(0,0,0,0.35)] max-h-[92vh] overflow-y-auto">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-bold text-[#5C3D8F]">
              Book Your Consultation
            </h3>
            <p className="text-sm text-[#4A4A4A] mt-1">
              Share your details and our team will call you shortly.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="h-9 w-9 shrink-0 rounded-full border border-[#E8E0F2] bg-white text-[#5C3D8F] hover:bg-[#F0EBF8] transition-colors"
            aria-label="Close popup"
          >
            X
          </button>
        </div>

        <LeadForm variant="treatment" treatmentName="Hair Restoration" />
      </div>
    </div>
  );
}
