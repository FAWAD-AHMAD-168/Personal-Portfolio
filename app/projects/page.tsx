import SectionHeading from "@/components/customUI/SectionHeading";
import ProjectFilter from "@/components/customUI/project/ProjectFilter";


const page = () => {
  return (
    <section
      id="projects"
      className="w-full  flex flex-col gap-10 items-center   py-20 bg-linear-to-b from-slate-900 to-slate-800
"
    >
      <h2 className="mx-auto">
        <SectionHeading>Projects</SectionHeading>
      </h2>

      <p className="w-[90%] md:w-[50%] xl:w-[40%] 2xl:w-[20%]  text-(--text-secondary-color) text-center">
        A collection of work that demonstrates my creativity, logical thinking,
        and commitment to quality development.
      </p>

      {/* Filter buttons and PROJECTS   CARDS */}

      <ProjectFilter />
    </section>
  );
};

export default page;
