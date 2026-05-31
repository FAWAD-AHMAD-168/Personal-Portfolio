export interface ProjectDetails {
  id: number;
  title: string;
  slug: string;
  description: string;
  descriptionForSmallerScreens: string;
  projImg: string;
  githubRepoLink: string;
  livedemolink?: string;
  duration: string;
  techStack: { icon: string; name: string; width?: number; height?: number }[];
  features: string[];
  //   desktopScreenshots: string[];
  //   tabletScreenshots: string[];
  //   mobileScreenshots: string[];
}

const ProjectDetailsData: ProjectDetails[] = [
  {
    id: 1,
    title: "Learnify",
    slug: "learnify",
    description:
      "This project marks the beginning of my web development journey—a fully responsive landing page built with HTML and CSS. It demonstrates my foundational skills in creating clean, structured layouts, implementing CSS Grid and Flexbox, and designing mobile-first, responsive interfaces. The page features a hero section with animations, a feature grid, testimonials, and a footer, showcasing attention to detail and a strong understanding of frontend design principles.",
    descriptionForSmallerScreens:
      "This project marks the start of my web development journey—a responsive landing page built with HTML and CSS. It showcases clean layouts, CSS Grid, Flexbox, and mobile-first design. The page includes a hero section, feature grid, testimonials, and footer, reflecting strong frontend fundamentals. ",
    projImg: "/projects/learnify.svg",
    githubRepoLink: "https://github.com/FAWAD-AHMAD-168/Learnify",
    techStack: [
      { icon: "/skills/frontend/html.svg", name: "HTML" },
      { icon: "/skills/frontend/css.svg", name: "CSS" },
      
      
    ],
    duration: "Feb 2025 - Mar 2025",
    features: [
      "Implemented a fully responsive layout for mobile, tablet, and desktop.",
      "Implemented CSS Grid for the features section layout",
      "Used Flexbox for alignment and component positioning",
      "Implemented a structured and responsive footer",
      "Maintained consistent spacing, typography, and color styling",
    ],
    livedemolink: "https://learnify-learning-app.netlify.app/",
  },
];

export default ProjectDetailsData;
