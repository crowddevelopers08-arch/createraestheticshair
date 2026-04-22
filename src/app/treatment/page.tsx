import type { Metadata } from "next";
import Script from "next/script";
import TreatNavbar from "@/components/treatmentcomponent/TreatNavbar";
import TreatHeroSection from "@/components/treatmentcomponent/TreatHeroSection";
import TreatFooter from "@/components/treatmentcomponent/TreatFooter";
import MobileBar from "@/components/MobileBar";

export const metadata: Metadata = {
  title: "Hair Treatment | Creator Aesthetic Clinic - ECR Chennai",
  description:
    "Book your hair restoration consultation with Dr. Sai at Creator Aesthetic Clinic, ECR Chennai. GFC, Platelet Growth Therapy & Exosome Hair Therapy — doctor-supervised every session.",
};

export default function TreatmentPage() {
  return (
    <main className="overflow-x-hidden pb-10 lg:pb-0">
      <TreatNavbar />
      <TreatHeroSection />
      <TreatFooter />
      <MobileBar />
    </main>
  );
}
