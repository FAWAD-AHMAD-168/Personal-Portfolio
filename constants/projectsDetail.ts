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
  features: { icon: string; title: string; description: string }[];
  showcaseImages: { image: string; title: string; description: string }[];
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
      {
        icon: "/features/learnify/respo.svg",
        title: "Responsive Design",
        description:
          "Implemented a fully responsive layout for mobile, tablet, and desktop.",
      },
      {
        icon: "/features/learnify/grid.svg",
        title: "CSS Grid",
        description: "Implemented CSS Grid for the features section layout",
      },
      {
        icon: "/features/learnify/flex.svg",
        title: "Flexbox",
        description: "Used Flexbox for alignment and component positioning",
      },
      {
        icon: "/features/learnify/footer.svg",
        title: "Structured Footer",
        description: "Implemented a structured and responsive footer",
      },
      {
        icon: "/features/learnify/typography.svg",
        title: "Consistent Styling",
        description:
          "Maintained consistent spacing, typography, and color styling",
      },
    ],
    showcaseImages: [
      {
        image: "/project_details/learnify/hero1.jpeg",
        title: "Header and Hero Section",
        description:
          "The header and hero section provide the first impression of the platform, featuring intuitive navigation, a compelling headline, and clear call-to-action buttons that introduce the platform's purpose and encourage user engagement.",
      },
      {
        image: "/project_details/learnify/grid.jpeg",
        title: "Feature Grid",
        description:
          "This section presents the key aspects of the platform in a structured grid layout, allowing users to quickly understand the main features, benefits, and areas of focus offered by the website.",
      },
      {
        image: "/project_details/learnify/testimonials.jpeg",
        title: "Testimonials and Newsletter",
        description:
          "The testimonial and newsletter section combines social proof with user engagement by showcasing feedback from users and providing an email subscription form to receive updates and announcements.",
      },
      {

        image: "/project_details/learnify/footer1.jpeg",
        title: "Structured Footer",
        description:
          "The footer serves as the final navigation area of the website, providing quick access to important links, contact information, and additional resources while maintaining a clean and organized layout.",
      },
    ],
    livedemolink: "https://learnify-learning-app.netlify.app/",
  },
];

export default ProjectDetailsData;
