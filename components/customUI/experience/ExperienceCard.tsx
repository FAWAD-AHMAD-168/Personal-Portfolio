import Image from "next/image";

interface ExperienceCardProps {
  companyLogo: string;
  companyName: string;
  position: string;
  duration: string;
  description: string;
  skills: string[];
}
const ExperienceCard = ({
  companyLogo,
  companyName,
  position,
  duration,
  description,
  skills,
}: ExperienceCardProps) => {
  return (
    // main card container
    <section className="flex gap-2">
      {/* a simple design before the content */}
      <div className="w-6.25 flex flex-col justify-center items-center gap-6">
        <div className=" h-20 w-0.5 bg-(--primary-color) rounded-sm"></div>

        <div>
          <Image
            src="/experience/circle.svg"
            alt="circle"
            width={10}
            height={10}
          />
        </div>

        <div className=" h-20 w-0.5 bg-(--primary-color) rounded-sm"></div>
      </div>

      {/* experience card  container */}

      <div className="w-75 h-110  md:w-150 md:h-70 flex flex-col gap-10 border  border-(--primary-color) rounded-xl ">
        {/* company logo and name container */}

        <div className="flex flex-col ">
          <div className="flex gap-2 p-4 md:ml-3 md:p-6 ">
            <Image
              src={companyLogo}
              alt="company logo"
              width={130}
              height={60}
            />

            <div className=" w-50  ">
              <h3 className="text-[16px] text-(--text-secondary-color) font-bold">
                {position}
              </h3>
              <p className="text-[14px] text-(--text-secondary-color) font-semibold">
                {companyName}
              </p>
              <p className="text-[12px] text-(--text-secondary-color)">
                {duration}
              </p>
            </div>
          </div>

          {/* Experience Description */}

          <p className="text-(--text-secondary-color) text-[13px] px-4  md:px-8  ">
            {description}
          </p>

          <div className="  flex gap-4  justify-center items-center    mt-3">
            <h5 className="text-[13px] font-bold text-(--text-primary-color)">
              Skills:{" "}
            </h5>

            <ul className=" grid grid-cols-2 space-x-10  md:space-x-6.5  md:flex  text-[11px] text-(--text-secondary-color) font-semibold list-disc ">
              {skills?.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceCard;
