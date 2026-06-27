import SectionHeading from "@/components/customUI/SectionHeading";
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
    <section className=" w-full   flex justify-center items-center flex-col  ">
      <h2 className="mx-auto">
        <SectionHeading>Tech Stack</SectionHeading>
      </h2>
      <p className="mt-8 text-md  text-(--text-secondary-color) text-center max-w-md  leading-relaxed">
        This project was built using the following technologies.
      </p>

      <div className="bg-(--bg-secondary-color) rounded-lg grid grid-cols-4  max-[450px]:grid-cols-3 gap-7 mt-15 p-4  ">
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
    </section>
  );
};

export default TechStack;
