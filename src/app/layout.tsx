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
    url: "https://yourdomain.com",
    images: [
      {
        url: "https://ik.imagekit.io/meafuhrp0/public/CreatorAesthetic.png?updatedAt=1773322232935",
        width: 512,
        height: 512,
        alt: "Creator Aesthetic Clinic Logo",
      },
    ],
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
        <link rel="canonical" href="https://yourdomain.com" />
      </head>
      <body className="antialiased">
        {children}
        
        {/* Google Tag Manager - Load first */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MGCMVTVH');
            `,
          }}
        />
        
        {/* Google Analytics & Ads Combined */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17918087349"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Google Analytics
            gtag('config', 'G-NGFP213CEB');
            
            // Google Ads
            gtag('config', 'AW-17918087349');
            
            // Google Ads Conversion Tracking Function
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

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1310876430929511');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1310876430929511&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Microsoft Clarity */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vvkhs1fqb5");
          `}
        </Script>
        
        {/* Instagram Embed (loads only when needed) */}
        <Script
          src="//www.instagram.com/embed.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}