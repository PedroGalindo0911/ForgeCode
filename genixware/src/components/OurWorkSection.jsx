import React, { useEffect } from "react";
import webImage from "../images/luxury.png";
import AOS from "aos";
import "aos/dist/aos.css";

const OurWorkSection = () => {
  const projects = [
    {
      name: "Luxury and Gloss",
      description:
        "Desarrollamos una página web moderna y funcional para una empresa dedicada a la limpieza y detallado de autos e interiores del hogar.",
      image: webImage, // Cambia esta ruta a la imagen que tengas del proyecto.
      link: "https://luxury-and-gloss.vercel.app",
    },
    // Puedes agregar más proyectos aquí en el futuro
  ];
   useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);

  return (
    <section id="our-work" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-[#EB6239] mb-6">
          Nuestro Trabajo
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Aquí tienes un vistazo de los proyectos que hemos desarrollado, diseñados a la medida de las necesidades de nuestros clientes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#73081A] mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-[#73081A] text-white rounded-lg shadow-md hover:bg-[#EB6239] transition duration-300"
                >
                  Ver Proyecto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
