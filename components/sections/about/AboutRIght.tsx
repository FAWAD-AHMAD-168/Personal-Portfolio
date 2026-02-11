"use client";
import { motion } from "framer-motion";

const AboutRight = () => {
  return (
    <section className=" w-70 sm:w-100 flex flex-col  gap-10 ">
      <div>
        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold bg-linear-to-r from-(--primary-color) via-(--secondary-color) to-(--accent-color)
         text-transparent bg-clip-text"
        >
          {" "}
          Need A Creative Product?
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true ,amount: 0.2 }}
          className="text-3xl  font-semibold bg-linear-to-r from-(--primary-color) via-(--secondary-color) to-(--accent-color)
         text-transparent bg-clip-text"
        >
          I Can Help You!
        </motion.h2>
      </div>

      <div className="text-(--text-secondary-color) md:text-justify">
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true,amount: 0.2 }}
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
