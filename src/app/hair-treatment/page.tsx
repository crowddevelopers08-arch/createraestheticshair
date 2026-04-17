import Script from "next/script";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import DoctorSection from "@/components/DoctorSection";
import VideoSection from "@/components/VideoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import BookConsultationPopup from "@/components/BookConsultationPopup";

export default function HairTreatmentPage() {
  return (
    <main className="overflow-x-hidden pb-10 lg:pb-0">
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MGCMVTVH"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* Meta Pixel Code (noscript) */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=910769388461399&ev=PageView&noscript=1"
        />
      </noscript>

      <Navbar />
      <HeroSection />
      <BeforeAfterSection />
      <TreatmentsSection />
      <DoctorSection />
      <VideoSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <MobileBar />
      <BookConsultationPopup />

      {/* Google Tag Manager */}
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MGCMVTVH');`}
      </Script>

      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17918087349"
        strategy="afterInteractive"
      />
      <Script id="gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17918087349');
        `}
      </Script>

      {/* Microsoft Clarity */}
      <Script id="clarity" strategy="lazyOnload">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "vvkhs1fqb5");
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
          fbq('init', '910769388461399');
          fbq('track', 'PageView');
        `}
      </Script>
    </main>
  );
}