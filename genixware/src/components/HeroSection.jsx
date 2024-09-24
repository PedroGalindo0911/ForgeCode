import React, { useEffect, useState } from 'react';
import backgroundImage from '../images/background1.jpg';

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section id="hero" className="relative text-center py-64">
      {/* Fondo con blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: 'blur(3px)',
          zIndex: '-1',
        }}
      ></div>

      {/* Capa de overlay para dar contraste al texto */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      {/* Contenedor con animación de entrada */}
      <div className={`relative z-10 ${animate ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <h1 className="text-5xl font-bold text-white">Soluciones de Software a Medida</h1>
        <p className="mt-6 text-lg text-white">Impulsando la innovación y eficiencia empresarial.</p>
        <button className="mt-10 px-6 py-3 bg-purple-800 text-white rounded transition duration-300 transform hover:bg-purple-600 hover:scale-105">
          Conoce más
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
