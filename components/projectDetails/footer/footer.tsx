"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import SocialLinks from "@/constants/social_links";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.3 }}
      className="w-full"
    >
      <div
        className="w-full h-55 md:h-75  "
        style={{
          backgroundColor: "var(--bg-secondary-color)",
          clipPath: "polygon(23% 79%, 0% 100%, 100% 100%)",
        }}
      ></div>

      <div className="w-full h-70  bg-(--bg-secondary-color) flex flex-col items-center  pt-10 ">
        <div
          onClick={scrollToTop}
          className="h-20 flex flex-col items-center justify-center gap-1
             transition-all duration-300 ease-in-out
             hover:gap-2 hover:-translate-y-1
             cursor-pointer"
        >
          <Image
            src="/footer/arrow.svg"
            alt="Back to top arrow"
            width={40}
            height={40}
            className="transition-all duration-300 group-hover:brightness-125"
          />

          <p className="text-[16px] font-semibold text-(--text-secondary-color)">
            BACK TO TOP
          </p>
        </div>

        {/*  Social media icons  */}

        <div className="flex justify-center items-center gap-6 mt-4">
          {SocialLinks.map((link) => (
            <Link key={link.id} href={link.href} target="_blank">
              <Icon
                icon={link.icon}
                width={30}
                height={30}
                className=" text-(--text-secondary-color) active:scale-108  active:text-(--text-primary-color) hover:scale-108 hover:text-(--text-primary-color) cursor-pointer transition duration-300  "
              />
            </Link>
          ))}
        </div>

        {/* Copyright and date */}

        <div className="mt-4 flex gap-1 justify-center items-center">
          <Image
            src="/footer/copyright.svg"
            alt="Logo"
            width={20}
            height={20}
          />

          <p>
            <span className=" text-(--text-secondary-color) ">
              2026 Fawad Ahmad -{" "}
            </span>{" "}
            <span className="text-(--text-secondary-color)">
              All rights reserved.{" "}
            </span>
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;
