import { TypeAnimation } from "react-type-animation";
import hero from "../assets/hero-bg.png";


function Hero() {
  return (
    <section
  id="home"
  className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center relative"
  style={{ backgroundImage: `url(${hero})` }}
>
  <div className="absolute inset-0 bg-primary opacity-80"></div>
  <div className="relative z-10">
    <h1 className="text-6xl font-bold text-accent tracking-widest mb-4">TD</h1>
    <TypeAnimation
      sequence={[
        "Soy un desarrollador enfocado en crear experiencias digitales únicas, rápidas y accesibles.",
        3000,
        "",
        1000,
      ]}
      speed={50}
      deletionSpeed={30}
      repeat={Infinity}
      wrapper="p"
      className="text-light text-xl max-w-xl"
    />
  </div>
</section>

  );
}

export default Hero;
