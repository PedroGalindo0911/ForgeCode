const ServicesSection = () => {
    const services = [
      { title: "Manejo de Clientes", description: "Información de contactos, historial de ventas y facturación." },
      { title: "Ventas", description: "Creación de presupuestos, envíos, ventas por paquetes y conexión con tienda en línea." },
      { title: "Inventarios", description: "Manejo de varios almacenes, reglas de reabastecimiento, órdenes de compra." },
      { title: "CRM", description: "Unificación de atención al cliente, seguimiento ágil para ventas." },
      { title: "Contabilidad", description: "Facturación electrónica, adaptable al giro de negocio." },
      { title: "Comunicación", description: "Integración con WhatsApp, Facebook Messenger e Instagram." },
    ];
  
    return (
        <section id="services" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-800">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
              {services.map((service, index) => (
                <div key={index} className="p-6 border rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
                  <h3 className="text-xl font-semibold text-purple-800">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
    );
  };
  
  export default ServicesSection;
  