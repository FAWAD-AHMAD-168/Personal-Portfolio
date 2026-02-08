import HomeLeft from "@/components/sections/home/HomeLeft";
import HomeRight from "@/components/sections/home/HomeRight";

const page = () => {
  return (

<section className="absolute top-25  flex  justify-center items-center w-full"> 
    <div className=" flex  flex-col-reverse justify-center items-center     lg:flex lg:flex-row  lg:justify-center lg:items-center ">
      
      <HomeLeft />
      <HomeRight />
    </div>
    </section>
  );

};

export default page;
