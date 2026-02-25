interface Project {
  imageSrc: string;
  projectType: string;
  date: string;
  projectTitle: string;
  projectDescription: string;
  techStack: string[];
  githubLink: string;
}

 const projectsData: Project[] = [
  {
    imageSrc: "/projects/learnify.svg",
    projectType: "Web",
    date: "Mar 2025",
    projectTitle: "Learnify",
    projectDescription:
      "Learnify marks the beginning of my web development journey — a responsive landing page designed with pure HTML and CSS. It showcases a clean layout, engaging sections, and a mobile-friendly design.",
    techStack: ["HTML", "CSS"],
    githubLink: "https://github.com/FAWAD-AHMAD-168/Learnify",
  },
  {
    imageSrc: "/projects/yts.svg",
    projectType: "Web",
    date: "June 2025",
    projectTitle: "YTS-YIFY Movies Clone",
    projectDescription:
      "A fully responsive movie website clone developed with HTML and Tailwind CSS. This project highlights structured layout design, component styling, and efficient use of Tailwind’s utility classes to build a modern UI.",
    techStack: ["HTML", "Tailwind"],
    githubLink: "https://github.com/FAWAD-AHMAD-168/YTS-YIFY-Movies-Clone",
  },
  {
    imageSrc: "/projects/jio.svg",
    projectType: "Web",
    date: "Aug 2025",
    projectTitle: "MERN Authentication System",
    projectDescription:
      "A modern MERN authentication system with secure login, registration, and OTP password reset flow. Focused on security, scalable architecture, and clean UI using React, Redux Toolkit, and Tailwind CSS..",
    techStack: ["ReactJS","Tailwind", "NodeJS", "ExpressJS", "MongoDB"],
    githubLink: "https://github.com/FAWAD-AHMAD-168/MERN-AUTH",
  }
];


export default projectsData;