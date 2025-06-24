import Navbar from "../components/Navbar";
import HeroSection from "../sections/HeroSection";
import Pricing from "../components/Pricing";
import Workflow from "../components/Workflow";
import LogoCloud from "../components/Logocloud";
import MildSection from "../components/MildSection";
import Footer from "../components/Footer";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar/> 
        <section id="home"><HeroSection/></section>
        <section id="services"><Services/></section>
        <section id="workflow"><Workflow /></section>
        <section id="pricing"><Pricing/></section>
        <LogoCloud/>
        <MildSection/>
        <Footer/>

    </div>
  );
};

export default HomePage;