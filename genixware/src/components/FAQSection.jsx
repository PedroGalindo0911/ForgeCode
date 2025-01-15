import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Inicializar AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const faqs = [
    {
      question: "¿Cuánto tiempo tarda un proyecto típico?",
      answer:
        "El tiempo de desarrollo depende de la complejidad del proyecto. Sin embargo, un proyecto típico puede tomar entre 4 a 8 semanas.",
    },
    {
      question: "¿Qué tecnologías utiliza ForgeCode?",
      answer:
        "Utilizamos tecnologías modernas como React, Node.js, Python, y bases de datos SQL/NoSQL, siempre elegidas según las necesidades del proyecto.",
    },
    {
      question: "¿Cómo se realiza el proceso de pago?",
      answer:
        "El proceso de pago se realiza a través de una transferencia bancaria o plataformas de pago seguras. El 50% se paga por adelantado y el resto al finalizar el proyecto.",
    },
    {
      question: "¿Puedo solicitar modificaciones después de finalizar el proyecto?",
      answer:
        "Sí, ofrecemos servicios de soporte y mantenimiento para realizar ajustes y mejoras después de finalizar el proyecto. Esto puede incluir costos adicionales dependiendo del alcance.",
    },
    {
      question: "¿ForgeCode ofrece garantía en sus proyectos?",
      answer:
        "Sí, todos nuestros proyectos incluyen una garantía limitada para solucionar cualquier problema técnico que pueda surgir dentro de un periodo específico después de la entrega.",
    },
    {
      question: "¿Puedo monitorear el progreso del desarrollo de mi proyecto?",
      answer:
        "Por supuesto. Ofrecemos actualizaciones regulares del estado del proyecto y acceso a un entorno de desarrollo para que puedas revisar el progreso en tiempo real.",
    },
    {
      question: "¿ForgeCode ofrece consultorías antes de comenzar un proyecto?",
      answer:
        "Sí, ofrecemos sesiones de consultoría inicial para entender tus necesidades y diseñar una solución personalizada para tu negocio.",
    },
    {
      question: "¿Qué pasa si quiero añadir funcionalidades adicionales durante el desarrollo?",
      answer:
        "Las funcionalidades adicionales pueden ser integradas dependiendo de la etapa del desarrollo en la que nos encontremos. Te informaremos del impacto en el tiempo y costo del proyecto.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2
          className="text-4xl font-bold text-[#EB6239] mb-6"
          data-aos="fade-up"
        >
          Preguntas Frecuentes
        </h2>
        <div className="space-y-4" data-aos="fade-up">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#8C7A6C]">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left py-4 px-6 bg-white text-[#73081A] font-semibold text-lg"
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <div
                  className="px-6 py-4 text-gray-700 bg-[#F5F5F5]"
                  data-aos="fade-in"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
