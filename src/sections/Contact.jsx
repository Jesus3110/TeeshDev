function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-dark text-light scroll-mt-24">

      <h2 className="text-4xl text-accent font-bold text-center mb-12">Contacto</h2>
      <form
        className="max-w-xl mx-auto space-y-6"
        action="https://formspree.io/f/mvgrengr" // cambia esto si usas EmailJS o backend propio
        method="POST"
      >
        <div>
          <label className="block text-light mb-2" htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 bg-primary text-light border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-light mb-2" htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 bg-primary text-light border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-light mb-2" htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full px-4 py-2 bg-primary text-light border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-accent text-primary font-bold py-2 px-6 rounded hover:opacity-90 transition duration-300"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}

export default Contact;
