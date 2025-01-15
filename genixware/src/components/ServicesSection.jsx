import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesSection = () => {
  const services = [
    {
      title: "Desarrollo de Aplicaciones Web",
      description:
        "Creamos aplicaciones web personalizadas y escalables para resolver problemas específicos de tu negocio.",
    },
    {
      title: "E-commerce y Tiendas Online",
      description:
        "Diseñamos y desarrollamos tiendas en línea con integraciones de carrito de compras y pasarelas de pago.",
    },
    {
      title: "Sistemas Empresariales",
      description:
        "Implementamos soluciones ERP y CRM para optimizar la gestión de tu empresa.",
    },
    {
      title: "Integraciones API",
      description:
        "Conectamos tu software con APIs de terceros para maximizar la funcionalidad y automatización.",
    },
    {
      title: "Mantenimiento y Soporte Técnico",
      description:
        "Brindamos soporte continuo y actualizaciones para garantizar que tu software funcione sin interrupciones.",
    },
    {
      title: "Optimización y Seguridad Web",
      description:
        "Mejoramos el rendimiento, la velocidad y la seguridad de tu sitio web o aplicación.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="services" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-[#EB6239] mb-6">
          Nuestros Servicios
        </h2>
        <p className="text-lg text-[#73081A] mb-12">
          Ofrecemos soluciones personalizadas para cubrir las necesidades únicas
          de tu negocio.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg border border-[#8C7A6C] shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-3"
              data-aos="fade-up" // Animación de entrada
              data-aos-delay={index * 100} // Añadimos un retraso progresivo a cada tarjeta
            >
              <h3 className="text-xl font-semibold text-[#73081A] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
