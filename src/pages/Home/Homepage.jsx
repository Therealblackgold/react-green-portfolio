import About from "../../components/about/About";
import Banner from "../../components/banner/Banner";
import Contact from "../../components/contact/Contact";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills";

const Homepage = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Homepage;
