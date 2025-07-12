function Services() {
  const services = [
    {
      title: "Desarrollo Web",
      description:
        "Creación de sitios modernos, rápidos y responsivos usando React, Tailwind y tecnologías actuales.",
    },
    {
      title: "Aplicaciones Móviles",
      description:
        "Desarrollo de apps móviles multiplataforma con Flutter, Firebase y Dart.",
    },
    {
      title: "Automatización y APIs",
      description:
        "Integración de APIs y automatización de procesos personalizados para negocios.",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 px-6 bg-primary text-light scroll-mt-24"
    >
      <h2 className="text-4xl text-accent font-bold text-center mb-12">
        Servicios
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-dark rounded-xl p-6 border border-accent text-light transition duration-300 shadow-[0_0_10px_2px_#00FF00] hover:shadow-[0_0_20px_4px_#00FF00]"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl text-accent font-bold mb-2">
              {service.title}
            </h3>
            <p className="text-light text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
