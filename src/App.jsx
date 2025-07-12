import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Services from "./sections/Services";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
useEffect(() => {
  AOS.init({ duration: 1000 });

  // Esperar un poco y luego forzar scroll al top
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, 100);
}, []);


  return (
    <>
      <main className="bg-primary font-mono">
        <Navbar />
        <section id="home">
          <Hero />
        </section>
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
