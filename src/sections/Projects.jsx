function Projects() {
  const projectList = [
    {
      title: "Portafolio Teesh",
      description:
        "Mi sitio personal, completamente responsive, con animación máquina de escribir, secciones dinámicas, visual atractivo y deploy en Vercel.",
      tech: ["React", "Tailwind CSS", "AOS", "Vercel"],
      link: "https://teesh-dev.vercel.app",
      preview: "https://teesh-dev.vercel.app",
    },
    {
      title: "Tienda en línea Teesh",
      description:
        "E-commerce funcional con catálogo de productos, carrito, filtros y estilos neón fosforescentes.",
      tech: ["React", "Tailwind CSS", "Stripe", "Vercel"],
      link: "https://teesh-tienda.vercel.app",
      preview: "https://teesh-tienda.vercel.app",
    },
    {
      title: "ChatBot con interfaz web",
      description:
        "Asistente conversacional accesible desde navegador, creado para responder mensajes y mostrar habilidades de procesamiento de lenguaje.",
      tech: ["React", "CSS", "OpenAI API"],
      link: "https://teesh2.vercel.app",
      preview: "https://teesh2.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 px-6 bg-primary text-light scroll-mt-24"
    >
      <h2 className="text-4xl text-accent font-bold text-center mb-12">
        Proyectos
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="relative bg-dark rounded-xl p-6 border border-accent text-light overflow-hidden transition duration-300 shadow-[0_0_10px_2px_#00FF00] hover:shadow-[0_0_20px_4px_#00FF00]"
            data-aos="zoom-in"
          >
            <div className="relative w-full h-[200px] overflow-hidden rounded-md border border-accent shadow-[0_0_15px_#00FF00] bg-black mb-4">
              <iframe
                src={project.preview}
                title={project.title}
                loading="lazy"
                className="w-full h-full border-none"
              ></iframe>
            </div>

            <h3 className="text-2xl text-accent font-bold mb-2">
              {project.title}
            </h3>
            <p className="text-light mb-2">{project.description}</p>
            <p className="text-muted text-sm mb-4">
              Tecnologías: {project.tech.join(", ")}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:opacity-80"
            >
              Ver proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
