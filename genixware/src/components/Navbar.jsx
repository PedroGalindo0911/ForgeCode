const Navbar = () => {
  return (
    <nav className="bg-purple-800 text-white p-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Genixware</h1>
      <ul className="flex space-x-6">
        <li><a href="#hero" className="transition duration-300 hover:text-gray-300">Inicio</a></li>
        <li><a href="#services" className="transition duration-300 hover:text-gray-300">Servicios</a></li>
        <li><a href="#contact" className="transition duration-300 hover:text-gray-300">Contacto</a></li>
      </ul>
    </nav>
  );
};
export default Navbar;