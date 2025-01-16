import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import luxuryAndGlossImage from "../images/luxury.png";

const StorytellingSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="storytelling" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-4xl font-bold text-[#73081A] text-center mb-6"
          data-aos="fade-up"
        >
          Cómo Ayudamos a Luxury and Gloss
        </h2>
        <p
          className="text-lg text-gray-700 text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Cada cliente es único, y nos aseguramos de que nuestras soluciones se
          adapten a sus necesidades. Aquí está la historia de cómo transformamos
          las operaciones de <span className="font-semibold">Luxury and Gloss</span>.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Imagen */}
          <div data-aos="fade-right">
            <img
              src={luxuryAndGlossImage}
              alt="Luxury and Gloss Preview"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Historia */}
          <div data-aos="fade-left">
            <h3 className="text-2xl font-semibold text-[#EB6239] mb-4">
              El Reto
            </h3>
            <p className="text-gray-700 mb-6">
              <span className="font-semibold">Luxury and Gloss</span> necesitaba
              una manera de destacar en un mercado competitivo y llegar a más
              clientes. Su objetivo era tener una presencia profesional en línea
              que reflejara la calidad de sus servicios de limpieza y detallado
              de autos.
            </p>

            <h3 className="text-2xl font-semibold text-[#EB6239] mb-4">
              Nuestra Solución
            </h3>
            <p className="text-gray-700 mb-6">
              Diseñamos y desarrollamos una página web moderna y funcional que
              incluyó una galería de servicios, una sección para agendar citas,
              y un diseño responsivo para dispositivos móviles. También
              implementamos elementos visuales que reflejan su profesionalismo.
            </p>

            <h3 className="text-2xl font-semibold text-[#EB6239] mb-4">
              El Resultado
            </h3>
            <p className="text-gray-700">
              Desde el lanzamiento de su página web, <span className="font-semibold">Luxury and Gloss</span> ha visto un
              incremento del 30% en solicitudes de servicio y ha recibido
              excelentes comentarios de sus clientes por su presencia digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorytellingSection;
