"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const HomeRight = () => {
  return (
    <section className="relative w-[80%] md:w-[50%] h-95 lg:h-138    text-white flex flex-col  justify-center items-center ">
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src="/home/profile pic.svg"
          alt="profile"
          width={370}
          height={370}
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
          width={300}
          height={300}
          loading="lazy"
          className="rounded-full  sm:block md:hidden"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className=" hidden  absolute bottom-4 right-12  text-(--text-primary-color) text-[17px] w-100 h-20 rounded-sm border font-semibold border-(--text-primary-color) lg:flex justify-center items-center gap-2"
      >
        <Image
          src="/home/work.svg"
          alt="work"
          loading="lazy"
          width={30}
          height={30}
        />
        <p>Open for new opportunities</p>
      </motion.div>
    </section>
  );
};

export default HomeRight;
