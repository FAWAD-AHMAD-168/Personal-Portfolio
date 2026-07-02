"use client";
import { motion } from "framer-motion";
// bg-linear-to-r from-(--primary-color) via-(--secondary-color) to-(--accent-color)
const AboutRight = () => {
  return (
    <section className=" w-80 sm:w-100 flex flex-col  gap-5 mx-auto  ">
      <div>
        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className=" text-2xl sm:text-3xl font-semibold  text-(--text-primary-color) text-center sm:text-left"
        >
          {" "}
          Have An Awesome Idea?
          {/* Turning Ideas Into Digital Experiences */}
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className=" text-2xl sm:text-3xl  font-semibold text-(--primary-color) text-center sm:text-left "
        >
          I Can Bring It To Life!
        </motion.h2>
      </div>

      <div className=" text-[16px] text-(--text-secondary-color) ">
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Hi, I’m Fawad Ahmad, a full-stack developer who enjoys building clean
          and functional web applications. I like transforming ideas into
          working products using thoughtful and creative solutions. I’m always
          curious to learn new technologies and improve my development workflow.
          I’ve worked on both solo projects and team-based environments
          involving daily stand-ups, version control, and project management.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutRight;
