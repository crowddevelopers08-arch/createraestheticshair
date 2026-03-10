
// import NewHairConsultationCardExact from "@/component/contactform";

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
    </div>
  );
}
