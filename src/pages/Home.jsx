import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Gallery from "../sections/Gallery/Gallery";
import Events from "../sections/Events/Events";
import Testimonials from "../sections/Testimonials/Testimonials";
import Contact from "../sections/Contact/Contact";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <Events />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;