import HomeHero from "@/components/HomePage/HomeHero.jsx";
import AboutUs from "@/components/HomePage/AboutUs.jsx";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-6">
      <HomeHero />
      <AboutUs />
    </div>
  );
};

export default HomePage;
