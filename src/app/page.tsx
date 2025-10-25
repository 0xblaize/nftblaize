import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import "@fontsource/preahvihear"; // Defaults to weight 400

export default function HomePage() {
  return (
    <main className=" text-white">
      {/* Hero Section */}
      <section id="hero" className="flex items-center justify-center">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <About />
      </section>


      {/* Experience Section */}
      <section id="experience" className="py-20">
        <Experience />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 ">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <Projects />
      </section>


      

     

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <Contact />
      </section>
    </main>
  );
}
