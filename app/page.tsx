// import Home from "./home/page";
// import About from "./about/page";
import Projects from "./projects/page";
// import Skills from "./skills/page";
// import Experience from "./experience/page";
// import Header from "@/components/sections/header/Header";
// import Contact from "./contact/page";
// import Footer from "@/components/sections/footer/Footer";

const page = () => {
  return (
    <>
      <main className="flex flex-col gap-20 ">
        {/* <Header />
        <Home />
        <About />
        <Skills />
        <Experience /> */}
        <Projects />

        {/* <div>
          <Contact />
          <Footer />
        </div> */}
      </main>
    </>
  );
};

export default page;
