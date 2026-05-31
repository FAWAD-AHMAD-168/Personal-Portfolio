import Image from "next/image";
import type { ProjectDetails } from "@/constants/projectsDetail";
type ProjectHeroRightProps = {
  project: ProjectDetails;
};

const ProjectHeroRight = ({ project }: ProjectHeroRightProps) => {
  return (
    <div className="  w-[90%] min-[850px]:w-[50%]  flex flex-col items-center justify-center  ">
      <div className="bg-(--bg-button-secondary) px-3 py-4 rounded text-(--text-primary-color) text-[14px] font-semibold mb-4">
        {project?.duration}
      </div>

      <Image
        src={project.projImg}
        alt={project.title}
        width={450}
        height={400}
      />
    </div>
  );
};

export default ProjectHeroRight;
