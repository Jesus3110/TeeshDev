import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = (
    <>
      <a href="#home" onClick={closeMenu} className="hover:text-accent duration-200">
        Inicio
      </a>
      <a href="#about" onClick={closeMenu} className="hover:text-accent duration-200">
        Sobre mí
      </a>
      <a href="#projects" onClick={closeMenu} className="hover:text-accent duration-200">
        Proyectos
      </a>
      <a href="#contact" onClick={closeMenu} className="hover:text-accent duration-200">
        Contacto
      </a>
    </>
  );

  return (
    <nav className="bg-primary text-light fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-accent font-bold text-2xl tracking-wide">TD</h1>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6 text-muted">
          {navLinks}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-accent focus:outline-none"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-4 text-muted bg-primary">
          {navLinks}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
