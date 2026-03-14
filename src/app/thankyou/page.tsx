
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
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`gtag('event', 'conversion', {'send_to': 'AW-17918087349/xbMQCNOzpogcELWhgeBC'});`}
      </Script>
    </div>
  );
};

export default page;