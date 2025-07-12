import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <main className="bg-primary font-mono">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
