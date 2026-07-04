import HomeLeft from "@/components/sections/home/HomeLeft";
import HomeRight from "@/components/sections/home/HomeRight";
import Image from "next/image";
import HomeMetaData from "@/seo/home";

export const metadata = HomeMetaData;

const page = () => {
  return (
    <section
      id="home"
      className=" mt-23 mx-auto flex flex-col justify-center items-center max-w-250 "
    >
      <div className="flex flex-col-reverse justify-center items-center  lg:gap-7  lg:flex lg:flex-row  lg:justify-center lg:items-center ">
        <HomeLeft />
        <HomeRight />
      </div>

      <div className=" mx-auto mt-5 md:mt-15  ">
        <Image
          src="/home/homeshape.svg"
          alt="shape"
          width={1320}
          height={700}
        />
      </div>
    </section>
  );
};

export default page;
