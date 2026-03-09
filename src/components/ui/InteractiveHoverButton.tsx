"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * variant="primary"  - used on light lavender backgrounds
 *   idle: lavender bg (#ECE7F8), forest purple border + text
 *   hover: fills with forest purple (#5C3D8F), text turns white
 *
 * variant="hero"     - used on dark purple/forest backgrounds
 *   idle: transparent, white border + white text
 *   hover: fills with rose/gold (#D4607A), text stays white
 */

interface InteractiveHoverButtonProps {
  text?: string;
  variant?: "primary" | "hero";
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  className?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  InteractiveHoverButtonProps
>(
  (
    {
      text = "Book Your Consultation",
      variant = "primary",
      href,
      type = "button",
      disabled,
      onClick,
      className,
    },
    ref
  ) => {
    const isPrimary = variant === "primary";

    const baseClass = cn(
      // layout
      "group relative inline-flex cursor-pointer overflow-hidden rounded-full border",
      "px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-200",
      // primary: lavender bg -> purple fill
      isPrimary && "border-forest/40 bg-cream text-forest",
      // hero: transparent -> rose fill
      !isPrimary && "border-white/35 bg-transparent text-white",
      disabled && "opacity-60 pointer-events-none",
      className
    );

    const inner = (
      <>
        {/* Sliding text - moves right + fades out on hover */}
        <span className="inline-block translate-x-1 whitespace-nowrap transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {text}
        </span>

        {/* Incoming text + arrow - slides in from right on hover */}
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-0 group-hover:opacity-100">
          <span className="whitespace-nowrap">{text}</span>
          <ArrowRight size={15} />
        </div>

        {/* Background fill blob - expands from center on hover */}
        <div
          className={cn(
            "absolute left-[20%] top-[40%] h-2 w-2 scale-100 rounded-full transition-all duration-300",
            "group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[2]",
            isPrimary ? "bg-forest" : "bg-gold"
          )}
        />
      </>
    );

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={baseClass}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {inner}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        disabled={disabled}
        onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
        className={baseClass}
      >
        {inner}
      </button>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
