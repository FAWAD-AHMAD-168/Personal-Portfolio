"use client"
import Image from "next/image";
import {motion} from 'framer-motion'
const HomeRight = () => {
  return (
    <section className="relative w-[80%] md:w-[50%] h-85 lg:h-135 mt-20   text-white flex flex-col  justify-center items-center ">
      <motion.div 
      initial={{y:100,scale:0.8,opacity:0}}
      animate={{y:0,scale:1,opacity:1}}
      transition={{duration:0.7}}
      >
        <Image
          src="/home/profile pic.svg"
          alt="profile"
          width={400}
          height={400}
          loading="lazy"
          className="rounded-full"
        />
      </motion.div>

      <div className=" hidden  absolute top-117  right-30 text-(--text-primary-color) text-[20px] w-100 h-20 rounded-sm border font-semibold border-(--text-primary-color) xl:flex justify-center items-center gap-2">
        <Image
          src="/home/work.svg"
          alt="work"
          loading="lazy"
          width={30}
          height={30}
        />
        <p>Open for new opportunities</p>
      </div>
    </section>
  );
};

export default HomeRight;
