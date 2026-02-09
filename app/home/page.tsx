import HomeLeft from "@/components/sections/home/HomeLeft";
import HomeRight from "@/components/sections/home/HomeRight";
import type { Metadata } from "next";

export const metadata:Metadata = {
  title: "Fawad Ahmad | MERN Stack Developer & Frontend Engineer",
  description:
    "Fawad Ahmad is a MERN Stack Developer specializing in HTML, CSS, Tailwind CSS, JavaScript, React, and Node.js. Pursuing Computer Science at the University of Gujrat and building modern, responsive web applications.",
  keywords: [
    "Fawad Ahmad",
    "MERN Stack Developer",
    "Frontend Developer",
    "Full Stack Web Developer",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Web Developer Portfolio",
    "University of Gujrat",
  ],
  authors: [{ name: "Fawad Ahmad" }],
  openGraph: {
    title: "Fawad Ahmad | MERN Stack Developer",
    description:
      "Portfolio of Fawad Ahmad, a MERN Stack Developer focused on building fast, modern, and scalable web applications.",
    type: "website",
  },
};

const page = () => {
  return (

<section id="home" className="absolute top-22  flex  justify-center items-center w-full "> 
    <div className=" flex  flex-col-reverse justify-center items-center     lg:flex lg:flex-row  lg:justify-center lg:items-center ">
      
      <HomeLeft />
      <HomeRight />
    </div>
    </section>
  );

};

export default page;
