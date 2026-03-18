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
  title: "Best Skin and Hair Clinic",
  description:
    "Non-surgical hair restoration in Chennai. GFC Hair Therapy, Platelet Growth Therapy & Exosome treatments — personally supervised by Dr. Sai at Creator Aesthetic Clinic, Vettuvankeni ECR.",
  keywords:
    "hair restoration Chennai, GFC therapy Chennai, PRP hair treatment ECR, non-surgical hair loss Chennai, hair clinic ECR, exosome hair therapy",
  openGraph: {
    title: "Best Skin and Hair Clinic",
    description:
      "Doctor-supervised GFC, PRP & Exosome hair therapy. No surgery. No downtime. ECR Chennai.",
    siteName: "Creator Aesthetic Clinic",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: [
      { url: "https://ik.imagekit.io/meafuhrp0/public/CreatorAesthetic.png?updatedAt=1773322232935", sizes: "any", type: "image/webp" },
      { url: "https://ik.imagekit.io/meafuhrp0/public/CreatorAesthetic.png?updatedAt=1773322232935", sizes: "16x16", type: "image/webp" },
      { url: "https://ik.imagekit.io/meafuhrp0/public/CreatorAesthetic.png?updatedAt=1773322232935", sizes: "32x32", type: "image/webp" },
    ],
    apple: [{ url: "https://ik.imagekit.io/meafuhrp0/public/CreatorAesthetic.png?updatedAt=1773322232935", sizes: "180x180", type: "image/webp" }],
    other: [
      { rel: "icon", url: "https://ik.imagekit.io/meafuhrp0/public/CreatorAesthetic.png?updatedAt=1773322232935", sizes: "192x192", type: "image/webp" },
      { rel: "icon", url: "https://ik.imagekit.io/meafuhrp0/public/CreatorAesthetic.png?updatedAt=1773322232935", sizes: "512x512", type: "image/webp" },
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
          src="https://www.googletagmanager.com/gtag/js?id=AW-17918087349"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17918087349');
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-17918087349/Dg44CNybqIocELWhgeBC',
                'value': 1.0,
                'currency': 'INR',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
        <Script
          src="//www.instagram.com/embed.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
