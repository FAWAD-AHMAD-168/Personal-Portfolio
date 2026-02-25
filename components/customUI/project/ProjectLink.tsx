import Link from "next/link";
import { Code } from "lucide-react";

interface ProjectLinkProps {
  githubLink: string;
}

const ProjectLink = ({ githubLink }: ProjectLinkProps) => {
  return (
    <Link
      href={githubLink}
      target="_blank"
      className="
        mt-4 ml-auto mr-3
        flex items-center gap-1
        text-[13px] font-medium
        text-(--text-secondary-color)
        hover:text-(--text-primary-color)
        active:text-(--primary-color)
        transition-all duration-300
        group
      "
    >
      <span>View Code</span>

      <Code size={16} />
    </Link>
  );
};

export default ProjectLink;
