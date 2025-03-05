import HomeHero from "@/components/HomePage/HomeHero.jsx";
import AboutUs from "@/components/HomePage/AboutUs.jsx";
import Testimonials from "@/components/HomePage/Testimonials";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-6">
      <HomeHero />
      <AboutUs />
      <Testimonials />
    </div>
  );
};

export default HomePage;
