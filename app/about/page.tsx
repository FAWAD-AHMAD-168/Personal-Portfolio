import SectionHeading from "@/components/customUI/SectionHeading";
import AboutRight from "@/components/sections/about/AboutRight";
import AboutLeft from "@/components/sections/about/AboutLeft";
import Services from "@/components/sections/about/Services";
import AboutMetaData from "@/seo/about";

export const metadata = AboutMetaData;

const About = () => {
  return (
    <section
      id="about"
      className="max-w-250 mx-auto w-full text-white flex flex-col  items-center gap-15 "
    >
      <div className="flex justify-center">
        <SectionHeading>
          <h1>About Me</h1>
        </SectionHeading>
      </div>
      <div className="  flex flex-col justify-center items-center gap-10 md:flex-row md:gap-20">
        <AboutLeft />
        <AboutRight />
      </div>

      <div>
        <Services />
      </div>
    </section>
  );
};
export default About;
