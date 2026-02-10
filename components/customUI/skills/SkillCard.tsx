import Image from "next/image";

interface SkillCardProps {
  title: string;

  skills: {
    id: number;
    name: string;
    icon: string;
    width?: number;
    height?: number;
  }[];
}

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <div className="w-full border border-blue-400 md:w-[60%] lg:w-[80%]  h-full flex flex-col items-center  bg-(--bg-skillsCard-color) gap-5 p-5 rounded-lg">
      <h3 className="text-2xl mt-5 font-semibold text-(--text-primary-color)">
        {title}
      </h3>

      <div className="w-[90%] grid grid-cols-3 justify-center items-center gap-5">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col items-center gap-2 mb-2">
            <Image
              src={skill.icon}
              alt={skill.name}
              width={skill.width || 50}
              height={skill.height || 50}
              className="object-contain"
            />
            <span className="text-[12px] text-(--text-secondary-color) font-semibold uppercase">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
