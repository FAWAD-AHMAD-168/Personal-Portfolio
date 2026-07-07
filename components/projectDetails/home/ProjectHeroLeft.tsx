"use client";
import Link from "next/link";
import Button from "@/components/customUI/Button";
import { motion } from "framer-motion";
import type { ProjectDetails } from "@/constants/projectsDetail";
type ProjectHeroLeftProps = {
  project: ProjectDetails;
};

const ProjectHeroLeft = ({ project }: ProjectHeroLeftProps) => {
  return (
    <div className="w-full min-[850px]:w-[50%] flex flex-col  gap-6   ">
      <motion.h2
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="text-(--text-primary-color) text-2xl  sm:text-4xl font-bold  text-center min-[850px]:text-left "
      >
        {project?.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="block lg:hidden text-(--text-secondary-color) text-[13px] md:text-[16px] w-[90%] text-center min-[850px]:text-left "
      >
        {project?.descriptionForSmallerScreens}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="hidden lg:block text-(--text-secondary-color) text-[16px] w-[90%] "
      >
        {project?.description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className=" hidden md:flex  gap-4 mt-6 justify-center min-[850px]:justify-start "
      >
        <Link href={project?.githubRepoLink || "#"} target="_blank">
          <Button
            type="button"
            variant="primary"
            size="lg"
            rightIcon="/services/dev.svg"
            className="cursor-pointer"
          >
            View Code
          </Button>
        </Link>

        {project?.livedemolink && (
          <Link href={project?.livedemolink} target="_blank">
            <Button
              type="button"
              variant="secondary"
              size="lg"
              rightIcon="/projects/link.svg"
              className="cursor-pointer"
            >
              Live Demo
            </Button>
          </Link>
        )}
      </motion.div>

      {/* Smaller Buttons for the responsive design   */}

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="flex  gap-4 mt-6 md:hidden justify-center min-[850px]:justify-start "
      >
        <Link href={project?.githubRepoLink || "#"} target="_blank">
          <Button
            type="button"
            variant="primary"
            size="md"
            rightIcon="/services/dev.svg"
            className="cursor-pointer"
          >
            View Code
          </Button>
        </Link>

        {project?.livedemolink && (
          <Link href={project?.livedemolink} target="_blank">
            <Button
              type="button"
              variant="secondary"
              size="md"
              rightIcon="/projects/link.svg"
              className="cursor-pointer"
            >
              Live Demo
            </Button>
          </Link>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectHeroLeft;
