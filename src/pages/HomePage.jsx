import HomeHero from "@/components/HomePage/HomeHero.jsx";
import AboutUs from "@/components/HomePage/AboutUs.jsx";
import HomeMarquee from "@/components/HomePage/HomeMarquee.jsx";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-[64px]">
      <HomeHero />
      <HomeMarquee />
      <AboutUs />
    </div>
  );
};

export default HomePage;
