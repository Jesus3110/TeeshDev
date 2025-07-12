import { TypeAnimation } from "react-type-animation";
import me from "../assets/me.png";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-dark scroll-mt-24"
    >
      <h2 className="text-4xl text-accent font-bold mb-6 relative inline-block after:block after:h-[3px] after:w-12 after:bg-accent after:mx-auto after:mt-2">
        Sobre mí
      </h2>

      <img
        src={me}
        alt="Foto de Jesús"
        className="w-28 h-28 rounded-full border-2 border-accent shadow-[0_0_15px_#00FF00] object-cover mb-6"
      />

      <p className="text-light max-w-2xl text-lg leading-relaxed">
        Soy <span className="text-accent font-semibold">Teesh Dev</span>,{" "}
        <TypeAnimation
          sequence={[
            "estudiante de Ingeniería en Desarrollo y Gestión de Software.",
            2000,
            "desarrollador web y móvil con experiencia en PHP, JavaScript, Flutter y Firebase.",
            2000,
            "proactivo, autodidacta y con pasión por el aprendizaje continuo.",
            2000,
            "",
            1000,
          ]}
          speed={50}
          deletionSpeed={30}
          repeat={Infinity}
          wrapper="span"
          className="inline"
        />
      </p>
    </section>
  );
}

export default About;
