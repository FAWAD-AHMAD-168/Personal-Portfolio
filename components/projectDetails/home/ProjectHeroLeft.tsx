import Link from "next/link";
import Button from "@/components/customUI/Button";
import type {ProjectDetails} from "@/constants/projectsDetail";
type ProjectHeroLeftProps = {
  project: ProjectDetails;
};

const ProjectHeroLeft = ({ project }: ProjectHeroLeftProps) => {
  return (
    <div className="w-full min-[850px]:w-[50%] flex flex-col  gap-6    ">
      <h2 className="text-(--text-primary-color) text-4xl font-bold ">
        {project?.title}
      </h2>
      <p className="block lg:hidden text-(--text-secondary-color) text-[16px] w-[90%] ">
        {project?.descriptionForSmallerScreens}
      </p>

      <p className="hidden lg:block text-(--text-secondary-color) text-[16px] w-[90%] ">
        {project?.description}
      </p>
      <div className=" hidden md:flex  gap-4 mt-6 ">
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
      </div>

      {/* Smaller Buttons for the responsive design   */}

      <div className="flex  gap-4 mt-6 md:hidden  ">
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
      </div>
    </div>
  );
};

export default ProjectHeroLeft;
