import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Specialties from "@/components/Specialties";
import DoctorDirectory from "@/components/DoctorDirectory";
import FacilitiesGallery from "@/components/FacilitiesGallery";
import AppointmentForm from "@/components/AppointmentForm";
import PatientServices from "@/components/PatientServices";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <Specialties />
      <DoctorDirectory />
      <FacilitiesGallery />
      <AppointmentForm />
      <PatientServices />
      <Footer />
      <FloatingCTA />
    </main>
  );
};

export default Index;
