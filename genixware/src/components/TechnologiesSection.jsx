import React, { useEffect } from "react";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaJava, FaDocker, FaAngular, FaAws } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const TechnologiesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const technologies = [
    {
      icon: <FaReact size={50} color="#61DAFB" />,
      name: "React",
      description:
        "React es una librería de JavaScript utilizada para construir interfaces de usuario interactivas y rápidas.",
    },
    {
      icon: <FaNodeJs size={50} color="#68A063" />,
      name: "Node.js",
      description:
        "Node.js permite ejecutar JavaScript en el servidor, ideal para crear aplicaciones escalables y eficientes.",
    },
    {
      icon: <FaPython size={50} color="#306998" />,
      name: "Python",
      description:
        "Python es un lenguaje versátil utilizado en proyectos de automatización, análisis de datos y desarrollo web.",
    },
    {
      icon: <FaDatabase size={50} color="#F8C3C7" />,
      name: "Bases de Datos",
      description:
        "Utilizamos tanto bases de datos SQL como NoSQL para almacenar y gestionar datos de manera eficiente.",
    },
    {
      icon: <FaJava size={50} color="#5382A1" />,
      name: "Java",
      description:
        "Java es un lenguaje ampliamente utilizado para aplicaciones empresariales y desarrollo de backend.",
    },
    {
      icon: <FaDocker size={50} color="#0db7ed" />,
      name: "Docker",
      description:
        "Docker facilita la creación y administración de entornos aislados para desarrollo y producción.",
    },
    {
      icon: <FaAngular size={50} color="#DD0031" />,
      name: "Angular",
      description:
        "Angular es un framework de desarrollo web usado para crear aplicaciones robustas y dinámicas.",
    },
    {
      icon: <FaAws size={50} color="#FF9900" />,
      name: "AWS",
      description:
        "Amazon Web Services proporciona infraestructura en la nube para escalar y optimizar aplicaciones.",
    },
  ];

  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2
          className="text-4xl font-bold text-[#EB6239] mb-6"
          data-aos="fade-up"
        >
          Tecnologías Utilizadas
        </h2>
        <p
          className="text-lg text-[#73081A] mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Las siguientes tecnologías son clave en la creación de soluciones
          innovadoras para nuestros clientes.
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg border border-[#8C7A6C] shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-3"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold text-[#73081A]">
                {tech.name}
              </h3>
              <p className="text-gray-700 mt-2">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
