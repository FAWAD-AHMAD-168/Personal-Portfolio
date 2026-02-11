import SectionHeading from "@/components/customUI/SectionHeading";
import AboutRight from "@/components/sections/about/AboutRIght";
import AboutLeft from "@/components/sections/about/AboutLeft";
import Services from "@/components/sections/about/Services";

import type { Metadata } from "next";

export const metadata:Metadata = {
  title: "About Me | MERN Stack Developer – Fawad Ahmad",
  description:
    "Learn more about Fawad Ahmad, a MERN Stack Developer pursuing Computer Science at the University of Gujrat, skilled in HTML, CSS, Tailwind CSS, JavaScript, React, and Node.js.",
  keywords: [
    "Fawad Ahmad",
    "MERN Stack Developer",
    "Web Developer",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Computer Science Student",
    "University of Gujrat",
    "Portfolio",
  ],
  authors: [{ name: "Fawad Ahmad" }],
  openGraph: {
    title: "About Me | Fawad Ahmad – MERN Stack Developer",
    description:
      "About Fawad Ahmad, a Computer Science undergraduate and MERN Stack Developer specializing in modern web development.",
    type: "website",
  },
};


const About = () => {
  return (
    <section
      id="about"
      className="  mx-auto   w-[90%] text-white flex flex-col  items-center gap-15
    "
    >
      <div className="flex justify-center">
        <SectionHeading>
          <h1>About Me</h1>
        </SectionHeading>
      </div>
      <div className="  flex flex-col justify-center items-center gap-10 md:flex-row md:gap-20">
       <AboutLeft />
        <AboutRight />
      </div>

      <div>
        <Services />
      </div>
    </section>
  );
};
export default About;
