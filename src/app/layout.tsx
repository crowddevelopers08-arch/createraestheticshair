import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hair Restoration Chennai | GFC, PRP & Exosome Therapy | Creator Aesthetic Clinic ECR",
  description:
    "Non-surgical hair restoration in Chennai. GFC Hair Therapy, Platelet Growth Therapy & Exosome treatments — personally supervised by Dr. Sai at Creator Aesthetic Clinic, Vettuvankeni ECR.",
  keywords:
    "hair restoration Chennai, GFC therapy Chennai, PRP hair treatment ECR, non-surgical hair loss Chennai, hair clinic ECR, exosome hair therapy",
  openGraph: {
    title: "Creator Aesthetic Clinic — Hair Restoration ECR Chennai",
    description:
      "Doctor-supervised GFC, PRP & Exosome hair therapy. No surgery. No downtime. ECR Chennai.",
    siteName: "Creator Aesthetic Clinic",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/CreatorAesthetic.png", sizes: "any", type: "image/webp" },
      { url: "/CreatorAesthetic.png", sizes: "16x16", type: "image/webp" },
      { url: "/CreatorAesthetic.png", sizes: "32x32", type: "image/webp" },
    ],
    apple: [{ url: "/CreatorAesthetic.png", sizes: "180x180", type: "image/webp" }],
    other: [
      { rel: "icon", url: "/CreatorAesthetic.png", sizes: "192x192", type: "image/webp" },
      { rel: "icon", url: "/CreatorAesthetic.png", sizes: "512x512", type: "image/webp" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body className="antialiased">
        {children}
        <Script
          src="//www.instagram.com/embed.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
