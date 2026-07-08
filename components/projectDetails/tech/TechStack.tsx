"use client";
import SectionHeading from "@/components/customUI/SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { ProjectDetails } from "@/constants/projectsDetail";

type TechStackProps = {
  project: ProjectDetails;
};

const TechStack = ({ project }: TechStackProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.3 }}
      className=" w-full   flex justify-center items-center flex-col mt-15  "
    >
      <h2 className="mx-auto">
        <SectionHeading>Tech Stack</SectionHeading>
      </h2>
      <p className="mt-8 text-md  text-(--text-secondary-color) text-center max-w-md  leading-relaxed">
        This project was built using the following tools and technologies.
      </p>
      <div className="hidden bg-(--bg-secondary-color) rounded-lg  lg:grid  grid-cols-4 gap-y-10  max-[450px]:grid-cols-3 gap-7 mt-15 p-4   ">
        {project.techStack.map((tech, index) => (
          <Tooltip key={index}>
            <TooltipTrigger>
              {" "}
              <Image
                key={index}
                src={tech.icon}
                alt={tech.name}
                width={tech.width || 50}
                height={tech.height || 50}
                className="object-contain"
              />
            </TooltipTrigger>
            <TooltipContent className="text-sm font-semibold bg-(--accent-color) text-white  ">
              <p>{tech.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>

      <div className=" bg-(--bg-secondary-color) rounded-lg grid grid-cols-4   max-[450px]:grid-cols-3 gap-7 mt-15 p-4 lg:hidden  ">
        {project.techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center gap-2 cursor-pointer">
            <Image
              key={index}
              src={tech.icon}
              alt={tech.name}
              width={tech.width || 50}
              height={tech.height || 50}
              className="object-contain"
            />

            <p className="text-[12px] text-center text-(--text-secondary-color) font-semibold">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default TechStack;
