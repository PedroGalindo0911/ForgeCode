import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-purple-800 text-center">Nuestros Servicios</h2>
      <div className="flex justify-around mt-8 text-center">
        <div className="max-w-xs">
          <h3 className="text-xl font-semibold text-purple-600">Desarrollo Empresarial</h3>
          <p className="text-gray-600">Software empresarial a la medida para optimizar tus procesos.</p>
        </div>
        <div className="max-w-xs">
          <h3 className="text-xl font-semibold text-purple-600">Distribución de Odoo</h3>
          <p className="text-gray-600">Implementación y desarrollo de módulos en Odoo.</p>
        </div>
        <div className="max-w-xs">
          <h3 className="text-xl font-semibold text-purple-600">Páginas Web</h3>
          <p className="text-gray-600">Desarrollo de sitios web profesionales adaptados a tus necesidades.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
