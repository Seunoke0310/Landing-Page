import Navbar from "../components/Navbar";
import HeroSection from "../sections/HeroSection";
import Workflow from "../components/Workflow";
import Pricing from "../components/Pricing";
import LogoCloud from "../components/Logocloud";
import MildSection from "../components/MildSection";
import Feature from "../components/Feature";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar/> 
        <HeroSection/>
        <Workflow/>
        <Feature/>
        <Pricing />
        <LogoCloud/>
        <MildSection/>
        <Footer/>

    </div>
  );
};

export default HomePage;