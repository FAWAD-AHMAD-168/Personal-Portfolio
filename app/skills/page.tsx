import SectionHeading from "@/components/customUI/SectionHeading";
import SkillCard from "@/components/customUI/skills/SkillCard";
import FrontendSkills from "@/constants/frontendSkills";
import BackendSkills from "@/constants/backendSkills";
import Tools from "@/constants/tools";

const page = () => {
  return (

    
    <section id="skills" className="mx-auto w-full lg:w-[90%] 2xl:w-[60%] ">
      
      {/* Skills Heading and Description */}
      <div className="flex flex-col items-center gap-13">
        <SectionHeading> Skills </SectionHeading>

        <p className="w-[90%] md:w-[40%] text-center text-(--text-secondary-color)">
          These are the technologies and tools I work with to turn ideas into
          reliable and efficient web applications.
        </p>
      </div>

      {/* GRID FOR ALL SKILLS */}

      <div className=" w-[90%] h-full mx-auto  mt-10 grid grid-cols-1 justify-items-center items-center gap-10   lg:grid-cols-2    ">
        {/* MAINSKILLS CARDS */}
        <SkillCard title="Frontend" skills={FrontendSkills} />
        <SkillCard title="Backend" skills={BackendSkills} />
        <SkillCard title="Tools" skills={Tools} />
      </div>
   
   
   
    </section>
  );
};

export default page;
