import HeroSection from "../component/HeroSection";
import StatsSection from "../component/StatsSection";
import AboutSection from "../component/AboutSection";
import ResponsibilitiesSection from "@/component/ResponsibilitiesSection";
import WhyChooseUsSection from "@/component/WhyChooseUsSection";
import SpecialNeedsSection from "@/component/SpecialNeedsSection";
import BookingSection from "@/component/BookingSection";
import TestimonialsSection from "@/component/TestimonialsSection";
import BabyCareFooter from "@/component/footer";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ResponsibilitiesSection />
      <TestimonialsSection />
      <SpecialNeedsSection />
      <BookingSection />
      <WhyChooseUsSection />
      <BabyCareFooter />

    </main>
  );
}
