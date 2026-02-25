"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import Projects from "@/constants/projects";
import ProjectCard from "@/components/customUI/project/ProjectCard";

import { AnimatePresence, motion } from "framer-motion";

const filters = ["All", "Web", "Andriod", "AI"];

const ProjectFilters = () => {
  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All"
      ? Projects
      : Projects.filter((project) => project.projectType === active);

  return (
    <>
      <ButtonGroup className="bg-(--bg-projectsCard-color) border border-(--text-secondary-color)  rounded-lg">
        {filters.map((filter) => (
          <Button
            key={filter}
            onClick={() => setActive(filter)}
            className={`
            text-[12px] md:text-[14px] font-semibold px-6 py-7 border-r border-(--text-secondary-color) hover:bg-(--bg-projectType-color) transition-all duration-300
            ${
              active === filter
                ? "bg-(--primary-color) text-(--text-primary-color) hover:bg-(--primary-color) "
                : "bg-transparent text-(--text-secondary-color) "
            }
          `}
          >
            {filter}
          </Button>
        ))}
      </ButtonGroup>

      {/* Project Cards */}

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.3 }}
          className="w-full sm:w-[85%] mt-12 lg:w-[80%] xl:max-w-275 grid grid-cols-1 gap-10 place-items-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
        > 
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              imageSrc={project.imageSrc}
              projectType={project.projectType}
              date={project.date}
              githubLink={project.githubLink}
              projectTitle={project.projectTitle}
              projectDescription={project.projectDescription}
              techStack={project.techStack}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ProjectFilters;
