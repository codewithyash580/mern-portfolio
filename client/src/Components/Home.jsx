import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Contact />
      <Footer />
    </>
  );
};

export default Home;