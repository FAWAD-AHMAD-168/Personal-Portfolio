"use client";

import SectionHeading from "@/components/customUI/SectionHeading";
import type { ProjectDetails } from "@/constants/projectsDetail";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

interface FeaturesProps {
  project: ProjectDetails;
}

const Features = ({ project }: FeaturesProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.3 }}
      className="w-full flex flex-col justify-center items-center mt-17 gap-10"
    >
      <SectionHeading>Feature Highlights</SectionHeading>

      <p className="text-center text-(--text-secondary-color) text-[16px] w-[90%] md:w-[65%] lg:w-[60%]">
        This project includes the following features and functionalities that
        bring the application to life.
      </p>

      <div className="w-fit grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-9 mt-10">
        {project.features.map((feature, index) => (
          <Card
            key={index}
            className="group w-38 sm:w-52 md:w-65 lg:w-72 xl:w-79 lg:h-48.5 bg-(--bg-secondary-color) border border-(--primary-color) gap-3 py-4 px-2 md:px-4 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(156,163,175,0.25)] transition-all duration-300 ease-in-out cursor-pointer"
          >
            <div className="w-9.25 h-9.25 sm:w-10.5 sm:h-10.5 md:w-11.25 md:h-11.25 mx-auto flex justify-center items-center rounded-full bg-(--primary-color)">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={55}
                height={55}
                className="p-2 group-hover:scale-107 transition-all duration-300 ease-in-out"
              />
            </div>

            <CardTitle className="text-center text-(--text-primary-color) text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px]">
              {feature.title}
            </CardTitle>

            <CardDescription className="text-center text-(--text-secondary-color) font-medium text-[12px] sm:text-[14px] lg:text-[14px]">
              {feature.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </motion.section>
  );
};

export default Features;
