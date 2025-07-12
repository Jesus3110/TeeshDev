function Projects() {
  const projectList = [
    {
      title: "Web de servicios y productos",
      description: "Sitio de venta que integra frontend, backend y control de servicios.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      link: "#", // puedes poner tu repositorio o demo aquí
    },
    {
      title: "App móvil para pecera",
      description: "Aplicación Flutter para automatizar el cuidado de una pecera.",
      tech: ["Flutter", "Dart", "Firebase"],
      link: "#",
    },
    {
      title: "Intranet empresarial",
      description: "Sistema interno para automatizar procesos y reproducir videos con API.",
      tech: ["JavaScript", "PHP", "APIs"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-primary text-light">
      <h2 className="text-4xl text-accent font-bold text-center mb-12">Proyectos</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projectList.map((project, index) => (
          <div key={index} className="bg-dark rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-accent font-bold mb-2">{project.title}</h3>
            <p className="text-light mb-2">{project.description}</p>
            <p className="text-muted text-sm mb-4">Tecnologías: {project.tech.join(", ")}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent underline hover:opacity-80">
              Ver proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
