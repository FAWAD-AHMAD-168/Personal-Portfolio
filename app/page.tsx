import Home from "./home/page";
import About from "./about/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Experience from "./experience/page";
import Header from "@/components/sections/header/Header";
import Contact from "./contact/page";
import Footer from "@/components/sections/footer/Footer";

const page = () => {
  return (
    <>
      <main className="flex flex-col gap-20 ">
        <Header />
        <Home />
        <About />
        <Skills />

        {/* Experience and projects together for  better visuals */}

        <section className="flex flex-col gap-20 bg-linear-to-b from-slate-900 to-slate-800">
          <Experience />
          <Projects />
          <div
            className="w-full h-55 md:h-75 -mt-40 -mb-0.5 "
            style={{
              backgroundColor: "var(--bg-primary-color)",
              clipPath: "polygon(77% 79%, 100% 100%, 0% 100%)",
            }}
          ></div>
        </section>

        <div>
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default page;
