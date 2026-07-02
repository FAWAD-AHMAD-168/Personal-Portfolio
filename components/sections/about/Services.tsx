"use client";
import {  motion } from "framer-motion";

import services from "@/constants/services";
import ServiceCard from "@/components/customUI/services/ServiceCard";

const Services = () => {
  const Services_section_variants = {
    initial: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };
  const Services_card_variants = {
    initial: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 , transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number , number, number, number] } },
  };

  return (
    <section className="  flex flex-col gap-15 justify-center items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5  }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-2xl font-semibold text-(--text-primary-color) mx-auto "
      >
        What I Can Do For You ?
      </motion.h2>

      <motion.div
        variants={Services_section_variants}
        initial="initial"
        whileInView="visible"
        transition={{ duration: 1.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className= "max-w-262  grid max-[600px]:grid-cols-1 grid-cols-2  sm:grid-cols-2 gap-8  md:gap-12 lg:gap-20"
      >
        {services.map((service) => (
          <motion.div key={service.id} variants={Services_card_variants}>
            <ServiceCard
              title={service.title}
              description={service.description}
              logo={service.logo}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
