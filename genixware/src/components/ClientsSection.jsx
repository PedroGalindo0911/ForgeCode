import React from 'react';


const ClientsSection = () => {
  return (
    <section id="clients" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-purple-800">Nuestros Clientes</h2>
      <p className="mt-4 text-gray-600">Hemos trabajado con empresas líderes en sus industrias.</p>
      
      <div className="flex justify-center mt-8 space-x-6">
        <img src="logo1.png" alt="Logo Cliente 1" className="w-32 h-32" />
        <img src="logo2.png" alt="Logo Cliente 2" className="w-32 h-32" />
        <img src="logo3.png" alt="Logo Cliente 3" className="w-32 h-32" />
      </div>
    </section>
  );
};

export default ClientsSection;
