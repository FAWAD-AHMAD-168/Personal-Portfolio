"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { motion } from "framer-motion";

import SectionHeading from "@/components/customUI/SectionHeading";
import type { ProjectDetails } from "@/constants/projectsDetail";
interface ShowcaseProps {
  project: ProjectDetails;
}

const Showcase = ({ project }: ShowcaseProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <motion.section 
    initial={{ opacity: 0, }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 1.6 }}

    
    className="flex flex-col items-center gap-6 mt-20">
      <SectionHeading>Visual Showcase</SectionHeading>

      <p className="w-[90%] text-center text-(--text-secondary-color) lg:w-[60%] mt-10 mb-5">
        A visual walkthrough of the features, workflows, and experiences built
        throughout the project.
      </p>

      {/*  Carousel */}

      <main className="flex flex-col gap-5 w-full   items-center">
        <Carousel
          setApi={setApi}
          className="  w-full  max-w-2xl "
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {project.showcaseImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="group relative cursor-pointer"
              >
                <Image
                  src={image.image}
                  alt={image.description}
                  width={1200}
                  height={700}
                  className="  w-full rounded-lg aspect-auto group-hover:opacity-15 transition-all duration-500 ease-in-out"
                />
                <div className="absolute inset-0 z-100 flex  group-hover:opacity-100 group-hover:gap-0 flex-col justify-center items-center opacity-0 gap-5  transition-all duration-700 ease-in-out">
                  <h4 className="text-center text-[24px] font-bold text-(--text-primary-color) mb-2">
                    {image.title}
                  </h4>
                  <p className=" w-[80%] text-center  text-[14px] text-(--text-primary-color)  ">
                    {image.description}
                  </p>
                </div>
                <p className="md:hidden text-center text-[12px] font-semibold text-(--text-primary-color) mt-0.5">
                  {image.title}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex bg-(--text-primary-color) border-none  hover:bg-(--text-primary-color) active:bg-white active:scale-95  " />
          <CarouselNext className="hidden md:flex bg-(--text-primary-color) border-none hover:bg-(--text-primary-color) active:bg-white active:scale-95   " />
        </Carousel>
        <p className="  text-[16px] text-(--text-secondary-color) mt-5 sm:mt-3">
          {current} of {count}
        </p>
      </main>
    </motion.section>
  );
};

export default Showcase;
