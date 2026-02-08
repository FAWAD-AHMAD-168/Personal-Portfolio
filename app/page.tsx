import Header from "@/components/sections/header/Header";

import Home from "./home/page";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Skills from "./skills/page";
import Experience from "./experience/page";

const page = () => {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default page;
