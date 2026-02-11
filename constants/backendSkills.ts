interface Skill {
  id: number;
  name: string;
  icon: string;
}

const backendSkills: Skill[] = [
  {
    id: 1,
    name: "Nodejs",
    icon: "/skills/backend/nodejs.svg",
  },
  {
    id: 2,
    name: "Express",
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
