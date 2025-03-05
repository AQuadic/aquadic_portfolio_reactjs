import HomeHero from "@/components/HomePage/HomeHero.jsx";
import AboutUs from "@/components/HomePage/AboutUs.jsx";
import Testimonials from "@/components/HomePage/Testimonials";
import ContactUs from "@/components/HomePage/ContactUs";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <AboutUs />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default HomePage;
