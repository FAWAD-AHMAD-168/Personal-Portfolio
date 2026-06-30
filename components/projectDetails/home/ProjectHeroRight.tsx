"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { ProjectDetails } from "@/constants/projectsDetail";
type ProjectHeroRightProps = {
  project: ProjectDetails;
};

const ProjectHeroRight = ({ project }: ProjectHeroRightProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 ,delay:1.3}}
    className="  w-[90%] min-[850px]:w-[50%]  flex flex-col items-center justify-center  ">
      <div className="bg-(--bg-button-secondary) px-3 py-4 rounded text-(--text-primary-color) text-[14px] font-semibold mb-4">
        {project?.duration}
      </div>

      <Image
        src={project.projImg}
        alt={project.title}
        width={450}
        height={400}
      />
    </motion.div>
  );
};

export default ProjectHeroRight;
