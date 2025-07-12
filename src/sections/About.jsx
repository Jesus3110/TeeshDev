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
        src="/src/assets/me.png"
        alt="Foto de Jesús"
        className="w-28 h-28 rounded-full border-2 border-accent shadow-[0_0_15px_#00FF00] object-cover mb-6"
      />

      <p className="text-light max-w-2xl text-lg leading-relaxed">
        Soy <span className="text-accent font-semibold">José de Jesús Galván Ayala</span>, estudiante de Ingeniería en
        Desarrollo y Gestión de Software. Tengo experiencia en desarrollo web y móvil utilizando tecnologías como PHP,
        JavaScript, Flutter y Firebase. Me considero autodidacta, proactivo y con pasión por el aprendizaje continuo.
      </p>
    </section>
  );
}

export default About;
