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

export default function Home() {
  return (
    <main className="overflow-x-hidden pb-10 lg:pb-0">
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
    </main>
  );
}
