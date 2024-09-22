import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import ClientsSection from './components/ClientsSection'; // Nueva sección
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <ClientsSection />  {/* Agregamos la nueva sección de clientes */}
      <AboutUs />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
