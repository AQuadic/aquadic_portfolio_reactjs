import HomeHero from "@/components/HomePage/HomeHero.jsx";
import AboutUs from "@/components/HomePage/AboutUs.jsx";
import HomeMarquee from "@/components/HomePage/HomeMarquee.jsx";
import Testimonials from "@/components/HomePage/Testimonials";
import ContactUs from "@/components/HomePage/ContactUs";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-[64px] sm:gap-[128px]">
      <HomeHero />
      <HomeMarquee />
      <AboutUs />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default HomePage;
