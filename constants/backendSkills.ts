interface Skill {
  id: number;
  name: string;
  icon: string;
}

const backendSkills: Skill[] = [
  {
    id: 1,
    name: "Node.js",
    icon: "/skills/backend/nodejs.svg",
  },
  {
    id: 2,
    name: "Express.js",
    icon: "/skills/backend/expressjs.svg",
  },
  {
    id: 3,
    name: "MongoDB",
    icon: "/skills/backend/mongodb.svg",
  },
  {
    id: 4,
    name: "MYSQL",
    icon: "/skills/backend/mysql.svg",
  },
];

export default backendSkills;
