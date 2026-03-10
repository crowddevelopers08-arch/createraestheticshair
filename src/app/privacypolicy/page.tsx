
import Footerred from "@/components/skincomponent/endfooter";
import PrivacyPolicy from "@/components/skincomponent/pravicy";
import Navbars from "@/components/skincomponent/tknavbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbars />
      <PrivacyPolicy />
      <Footerred />
    </div>
  );
};

export default page;
