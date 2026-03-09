import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  label?: string;
}

export default function BeforeAfterSlider({
  afterSrc,
  afterAlt = "After treatment",
  label,
}: BeforeAfterSliderProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <span className="text-xs font-semibold tracking-widest text-gold uppercase text-center">
          {label}
        </span>
      )}
      <div className="relative aspect-[16/9] md:aspect-[15/10] overflow-hidden rounded-2xl shadow-[0_4px_24px_rgba(26,58,42,0.15)]">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Fallback gradient shown when image is missing */}
        <div className="absolute inset-0 bg-linear-to-br from-forest to-forest-light opacity-0 [img+&]:opacity-100" />
      </div>
    </div>
  );
}
