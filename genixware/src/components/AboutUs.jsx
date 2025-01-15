import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  const values = [
    {
      title: "Innovación",
      description:
        "Usamos tecnologías modernas para entregar soluciones únicas y escalables.",
      aosEffect: "fade-right",
    },
    {
      title: "Compromiso",
      description:
        "Estamos dedicados a cumplir con los objetivos de nuestros clientes en cada etapa del proyecto.",
      aosEffect: "fade-up",
    },
    {
      title: "Calidad",
      description:
        "Forjamos software con altos estándares para garantizar resultados excepcionales.",
      aosEffect: "fade-left",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-[#EB6239] mb-6">Sobre Nosotros</h2>
        <p className="text-lg text-[#73081A] mb-12">
          En ForgeCode, transformamos tus ideas en soluciones de software a medida. Nuestro equipo apasionado se dedica a construir herramientas que potencian la innovación y la eficiencia empresarial.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg border border-[#8C7A6C] shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-3"
              data-aos={value.aosEffect}
              data-aos-delay={index * 100} // Añadir retraso progresivo
            >
              <h3 className="text-xl font-semibold text-[#73081A] mb-2">
                {value.title}
              </h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
