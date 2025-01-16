import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutUs from './components/AboutUs';
import FAQSection from './components/FAQSection';
import TechnologiesSection from './components/TechnologiesSection';
import OurWorkSection from './components/OurWorkSection';
import StorytellingSection from './components/StoryTellingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs/>
      <ServicesSection />
      <OurWorkSection/>
      <StorytellingSection/>
      <TechnologiesSection/>
      <FAQSection/>
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
