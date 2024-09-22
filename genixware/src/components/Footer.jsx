import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Genixware. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
