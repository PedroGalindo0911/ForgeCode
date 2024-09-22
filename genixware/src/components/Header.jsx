import React from 'react';

const Header = () => {
  return (
    <header className="bg-purple-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Gx</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#services" className="hover:text-gray-200">Servicios</a></li>
          <li><a href="#about" className="hover:text-gray-200">Nosotros</a></li>
          <li><a href="#contact" className="hover:text-gray-200">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
