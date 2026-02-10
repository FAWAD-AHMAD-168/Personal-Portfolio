"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const HomeRight = () => {
  return (
    <section className="relative w-[80%] md:w-[50%] h-95 lg:h-138    text-white flex flex-col  justify-center items-center ">
      <motion.div
        initial={{ scale: 0.8, x: 40, opacity: 0 }}
        animate={{ scale: 1, x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src="/home/profile pic.svg"
          alt="profile"
          width={400}
          height={400}
          loading="lazy"
          className="rounded-full hidden sm:hidden md:block"
        />
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, x: 40, opacity: 0 }}
        animate={{ scale: 1, x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src="/home/profile pic.svg"
          alt="profile"
          width={320}
          height={320}
          loading="lazy"
          className="rounded-full  sm:block md:hidden"
        />
      </motion.div>

      <div className=" hidden  absolute bottom-0 right-12  text-(--text-primary-color) text-[17px] w-100 h-20 rounded-sm border font-semibold border-(--text-primary-color) lg:flex justify-center items-center gap-2">
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
