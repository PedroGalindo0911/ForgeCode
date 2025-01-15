const Navbar = () => {
  return (
    <nav className="bg-[#73081A] text-white p-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo y título */}
      <h1 className="text-2xl font-bold tracking-tight">
        ForgeCode
      </h1>

      {/* Menú */}
      <ul className="flex space-x-6">
        <li>
          <a
            href="#hero"
            className="transition duration-300 hover:text-[#EB6239]"
          >
            Inicio
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="transition duration-300 hover:text-[#EB6239]"
          >
            Servicios
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="transition duration-300 hover:text-[#EB6239]"
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
