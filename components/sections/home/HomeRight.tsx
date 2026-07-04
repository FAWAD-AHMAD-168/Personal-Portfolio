"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const HomeRight = () => {
  return (
    <section className="relative   w-[90%]  md:w-[50%]  lg:h-130     text-white flex flex-col    items-center  ">
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="mt-10 hidden  lg:block"
      >
        <Image
          src="/home/profile pic.svg"
          alt="profile"
          width={370}
          height={370}
          className="rounded-full "
        />
      </motion.div>

      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="mt-4 hidden  md:block lg:hidden "
      >
        <Image
          src="/home/profile pic.svg"
          alt="profile"
          width={250}
          height={250}
          className="rounded-full"
        />
      </motion.div>

      {/* Smaller Image for smaller screens */}

      <motion.div
        initial={{  x: 40, opacity: 0 }}
        animate={{  x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-4 block md:hidden "
      >
        <Image
          src="/home/profile pic.svg"
          alt="profile"
          width={200}
          height={200}
          className="rounded-full  "
        />
      </motion.div>

      {/* Open for new opportunities card */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className=" hidden  absolute bottom-10 right-23 text-(--text-primary-color) text-[16px] w-100 h-20  bg-(--bg-projectsCard-color) rounded-sm border font-semibold border-(--text-secondary-color) lg:flex justify-center items-center gap-2"
      >
        <Image src="/home/work.svg" alt="work" width={30} height={30} />
        <p>Open for new opportunities</p>
      </motion.div>
    </section>
  );
};

export default HomeRight;
