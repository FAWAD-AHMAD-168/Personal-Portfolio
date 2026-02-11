import React from "react";
import SectionHeading from "@/components/customUI/SectionHeading";
import ExperienceCard from "@/components/customUI/experience/ExperienceCard";
import experiences from "@/constants/experience";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Fawad Ahmad - MERN Stack Developer",
  description:
    "Explore the professional experience of Fawad Ahmad as a Frontend and Full Stack Developer, including internships and real-world projects built with React, Next.js, Node.js, and the MERN stack.",
  keywords: [
    "Fawad Ahmad",
    "MERN Stack Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Portfolio Experience",
  ],
  authors: [{ name: "Fawad Ahmad" }],
  openGraph: {
    title: "Experience | Fawad Ahmad",
    description:
      "Professional experience of Fawad Ahmad - MERN Stack Developer.",
    type: "website",
  },
};

const page = () => {
  return (
    <section  id="experience" className="w-full h-screen flex flex-col mx-auto  items-center gap-10 mt-20">
      <h2 className="mx-auto">
        <SectionHeading>Experience </SectionHeading>
      </h2>

      <p className="w-[90%] md:w-[50%] text-(--text-secondary-color) text-center">
        My work experience includes developing software and contributing to
        various projects across different companies.
      </p>
      <div className="flex flex-col items-center  w-[70%] h-screen mx-auto  gap-15  ">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            companyLogo={experience.companyLogo}
            companyName={experience.companyName}
            position={experience.position}
            duration={experience.duration}
            description={experience.description}
            skills={experience.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
