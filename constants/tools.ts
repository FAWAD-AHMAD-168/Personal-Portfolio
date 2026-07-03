interface Tool {
  id: number;
  name: string;
  icon: string;
  
}

const tools: Tool[] = [
  {
    id: 1,
    name: "Figma",
    icon: "/skills/tools/figma1.svg",
  },
  {
    id: 2,
    name: "Git",
    icon: "/skills/tools/git.svg",
  },
  {
    id: 3,
    name: "Github",
    icon: "/skills/tools/github.png",
  },
  {
    id: 4,
    name: "Postman",
    icon: "/skills/tools/postman.svg",
  }
];

export default tools;
