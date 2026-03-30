import Footerred from "@/components/skincomponent/endfooter";
import ThankYouPage from "@/components/skincomponent/thankpage";
import Navbars from "@/components/skincomponent/tknavbar";
import Script from "next/script";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbars />
      <ThankYouPage />
      <Footerred />

      {/* Event snippet for Submit lead form - Skin LP conversion page */}
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-17918087349/InJCCPuT940cELWhgeBC',
            'value': 1.0,
            'currency': 'INR'
          });
        `}
      </Script>
    </div>
  );
};

export default page;