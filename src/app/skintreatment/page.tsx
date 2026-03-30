import Script from "next/script";
import BeforeAfterSection from "@/components/skincomponent/beforeafter";
import CTASection from "@/components/skincomponent/cta";
import DoctorSection from "@/components/skincomponent/doctor";
import Footerred from "@/components/skincomponent/endfooter";
import SkinFAQSection from "@/components/skincomponent/faq";
import VisitSection from "@/components/skincomponent/footer";
import SkinHeroSection from "@/components/skincomponent/herosection";
import MobileActionBar from "@/components/skincomponent/mobile-bar";
import Navbar from "@/components/skincomponent/navbar";
import ScrollToTop from "@/components/skincomponent/scrolltotop";
import TestimonialsSection from "@/components/skincomponent/testominal";
import SkinTreatments from "@/components/skincomponent/treatments";
import VideoSection from "@/components/skincomponent/videos";

export default function SkinTreatmentPage() {
  return (
    <div>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5WTBTLVH"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      <Navbar />
      <SkinHeroSection />
      <BeforeAfterSection />
      <SkinTreatments />
      <DoctorSection />
      <VideoSection />
      <TestimonialsSection />
      <SkinFAQSection />
      <CTASection />
      <VisitSection />
      <Footerred />
      <MobileActionBar />
      <ScrollToTop />

      {/* Google Tag Manager */}
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5WTBTLVH');`}
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
          })(window, document, "clarity", "script", "vvltrf4a78");
        `}
      </Script>
    </div>
  );
}