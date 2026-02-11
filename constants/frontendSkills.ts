interface Skill {
  id: number;
  name: string;
  icon: string;
}

const frontendSkills: Skill[] = [
  {
    id: 1,
    name: "HTML",
    icon: "/skills/frontend/html.svg",
  },
  {
    id: 2,
    name: "CSS",
    icon: "/skills/frontend/css.svg",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: "/skills/frontend/javascript.svg",
  },
  {
    id: 4,
    name: "React",
    icon: "/skills/frontend/react.svg",
  },
  {
    id: 5,
    name: "Next",
    icon: "/skills/frontend/nextjs.svg",
  },
  {
    id: 6,
    name: "Tailwind CSS",
    icon: "/skills/frontend/tailwindcss.svg",
  },
  {
    id: 7,
    name: "TypeScript",
    icon: "/skills/frontend/typescript.svg",
  },
];

export default frontendSkills;
