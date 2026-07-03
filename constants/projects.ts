interface Project {
  id: number;
  imageSrc: string;
  projectType: string;
  date: string;
  projectTitle: string;
  slug: string;
  projectDescription: string;
  techStack: string[];
  githubLink: string;
}
const projectsData: Project[] = [
  {
    id: 1,
    imageSrc: "/projects/yts.svg",
    projectType: "Web",
    date: "Aug 2025",
    projectTitle: "MERN Auth System",
    slug: "mern-auth-system",
    projectDescription:
      "A modern MERN authentication system with secure login, registration, and OTP password reset flow. Focused on security, scalable architecture, and clean UI using React, Redux Toolkit, and Tailwind CSS.",
    techStack: ["ReactJS", "Tailwind", "NodeJS", "ExpressJS", "MongoDB"],
    githubLink: "https://github.com/FAWAD-AHMAD-168/MERN-AUTH",
  },
  {
    id: 2,
    imageSrc: "/projects/yts1.svg",
    projectType: "Web",
    date: "June 2025",
    projectTitle: "YTS-YIFY Movies Clone",
    slug: "yts-yify-movies-clone",
    projectDescription:
      "A fully responsive movie website clone developed with HTML and Tailwind CSS. This project highlights structured layout design, component styling, and efficient use of Tailwind’s utility classes to build a modern UI.",
    techStack: ["HTML", "Tailwind"],
    githubLink: "https://github.com/FAWAD-AHMAD-168/YTS-YIFY-Movies-Clone",
  },
  {
    id: 3,
    imageSrc: "/projects/learnify.svg",
    projectType: "Web",
    date: "Mar 2025",
    projectTitle: "Learnify",
    slug: "learnify",
    projectDescription:
      "Learnify marks the beginning of my web development journey — a responsive landing page designed with pure HTML and CSS. It showcases a clean layout, engaging sections, and a mobile-friendly design.",
    techStack: ["HTML", "CSS"],
    githubLink: "https://github.com/FAWAD-AHMAD-168/Learnify",
  },
  
  
];



export default projectsData;