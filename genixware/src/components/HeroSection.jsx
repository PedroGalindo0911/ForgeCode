import React, { useEffect, useState } from "react";
import backgroundImage from "../images/background1.jpg";

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  // Función para hacer scroll a la sección de #services
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative text-center py-64 flex items-center justify-center"
    >
      {/* Fondo con blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "blur(2px)",
          zIndex: "-1",
        }}
      ></div>

      {/* Capa de overlay para contraste */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Contenido con animación */}
      <div
        className={`relative z-10 transform transition duration-1000 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl font-bold text-white tracking-wide">
          Forja Ideas en Realidad
        </h1>
        <p className="mt-6 text-lg text-gray-200 font-light">
          Transformamos tus ideas en software innovador y eficiente.
        </p>
        <button
          onClick={scrollToServices}
          className="mt-10 px-8 py-3 bg-[#73081A] text-white rounded-lg shadow-lg transition duration-300 transform hover:bg-[#EB6239] hover:scale-105"
        >
          Conoce más
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
