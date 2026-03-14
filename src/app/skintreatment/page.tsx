
// import NewHairConsultationCardExact from "@/component/contactform";

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


export default function Home() {
  return (
    <div>
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
      <Script id="ms-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "vvltrf4a78");
        `}
      </Script>
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
          fbq('init', '1478172490519418');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img height="1" width="1" style={{display:"none"}}
          src="https://www.facebook.com/tr?id=1478172490519418&ev=PageView&noscript=1"
        />
      </noscript>
    </div>
  );
}
