import Home from "./home/page";
import About from "./about/page";
// import Projects from "./projects/page";
import Skills from "./skills/page";
import Experience from "./experience/page";
import Header from "@/components/sections/header/Header";
import Contact from "./contact/page";

const page = () => {
  return (
    <>
      <main className="flex flex-col gap-20 ">
        <Header />
        <Home />
        <About />
        <Skills />
        <Experience />

        <Contact />
      </main>
    </>
  );
};

export default page;
