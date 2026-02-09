"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const AboutLeft = () => {
  return (
    <motion.section
      initial={{ opacity: 0 , x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5}}
      viewport={{ once: true ,amount: 0.3 }}
      className="flex justify-center items-center"
    >
      <Image
        src="/about/about.svg"
        alt="About Me"
        width={300}
        height={400}
        className="rounded-lg  object-cover "
      />
    </motion.section>
  );
};

export default AboutLeft;
