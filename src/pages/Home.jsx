import Navbar from "../components/Navbar";
import HeroSection from "../sections/HeroSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar/> 
        <HeroSection/>
    </div>
  );
};

export default HomePage;