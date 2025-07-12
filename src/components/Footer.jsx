import Git from "../assets/git.png"
import fiverr from "../assets/fiverr.png";


function Footer() {
  return (
    <footer className="bg-primary text-light py-8 border-t border-muted text-center">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-4">
        {/* Logo o imagen */}
        {/* <img src={logo} alt="Logo TD" className="w-12 h-12 rounded-full border border-accent shadow-[0_0_15px_#00FF00]" /> */}

        {/* Texto */}
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} <span className="text-accent font-semibold">TD</span>. Todos los derechos reservados.
        </p>

        {/* Redes sociales */}
        <div className="flex space-x-6 mt-2 text-accent text-xl items-center justify-center">
  {/* <a
    href="https://github.com/Jesus3110"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition"
  >
    <img
      src={Git}
      alt="Git"
      className="w-6 h-6 rounded-md shadow-[0_0_10px_#00FF00]"
    />
  </a> */}

  <a
    href="https://www.fiverr.com/teeshga"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition"
  >
    <img
      src={fiverr}
      alt="Fiverr"
      className="w-6 h-6 rounded-md shadow-[0_0_10px_#00FF00]"
    />
  </a>
</div>

      </div>
    </footer>
  );
}

export default Footer;
