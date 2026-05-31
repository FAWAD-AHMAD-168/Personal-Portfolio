import ProjectDetails from "@/constants/projectsDetail";

interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  descriptionForSmallerScreens: string;
  githubRepoLink: string;
  livedemolink?: string;
  projImg: string;
  duration: string;
  techStack: { icon: string; name: string; width?: number; height?: number }[];
  features: string[];
}

const getProjectBySlug = (slug: string): Project | undefined => {
  return ProjectDetails.find((proj) => proj.slug === slug);
};

export default getProjectBySlug;
