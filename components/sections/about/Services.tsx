"use client";
import { motion } from "framer-motion";

import services from "@/constants/services";
import ServiceCard from "@/components/customUI/services/ServiceCard";

const Services = () => {
  return (
    <section className="  flex flex-col gap-15 justify-center items-center">
      <div className="flex justify-center items-center">
        <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true ,amount: 0.2}}
     
        className="text-2xl font-semibold text-(--text-primary-color) mx-auto ">
          What I Can Do For You ?
        </motion.h2>
      </div>
      <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true ,amount: 0.3}}
      className="grid grid-cols-1  lg:grid-cols-2 gap-20">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            logo={service.logo}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
