
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
    </div>
  );
};

export default page;