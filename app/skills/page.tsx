import SectionHeading from "@/components/customUI/SectionHeading";
import SkillCard from "@/components/customUI/skills/SkillCard";
import FrontendSkills from "@/constants/frontendSkills";
import BackendSkills from "@/constants/backendSkills";
import Tools from "@/constants/tools";

const page = () => {
  return (
    <section
      id="skills"
      className=" max-w-262.5 mx-auto w-full  flex flex-col items-center gap-13 "
    >
      {/* Skills Heading and Description */}
      <SectionHeading> Skills </SectionHeading>

      <p className="w-[90%] md:w-[60%] text-center text-(--text-secondary-color)">
        These are the technologies and tools I work with to turn ideas into
        reliable and efficient web applications.
      </p>

      {/* GRID FOR ALL SKILLS */}

      <div className=" w-fit    mx-auto grid grid-cols-1 justify-center items-center gap-20   lg:grid-cols-2    ">
        {/* MAINSKILLS CARDS */}
        <SkillCard title="Frontend" skills={FrontendSkills} />
        <SkillCard title="Backend" skills={BackendSkills} />
        <SkillCard title="Tools" skills={Tools} />
      </div>
    </section>
  );
};

export default page;
