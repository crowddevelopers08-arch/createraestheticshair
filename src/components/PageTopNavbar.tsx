import Image from "next/image";

export default function PageTopNavbar() {
  return (
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
          href="tel:+916385083099"
          className="btn-gold text-white text-sm font-semibold px-5 py-2.5 rounded-full"
        >
          Call +91 63850 83099
        </a>
      </div>
    </div>
  );
}
