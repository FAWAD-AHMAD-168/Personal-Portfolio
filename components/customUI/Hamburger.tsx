"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Button from "@/components/customUI/Button";
import navLinks from "@/constants/navLinks";

const Hamburger = () => {
  const [menuopen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="sm"
        type="button"
        className="h-12.5 w-12.5 rounded-sm"
        onClick={() => setMenuOpen(!menuopen)}
      >
        <Image
          src={menuopen ? "/header/cancel.svg" : "/header/hamburger.svg"}
          alt="Menu"
          width={24}
          height={24}
        />
      </Button>

      {/* Menu Overlay */}
      {menuopen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4 }}
          className="fixed
            top-20
            left-0
            p-20
            w-screen
            h-screen
            bg-slate-900/90
            backdrop-blur-xl
            flex
            flex-col
            items-center
            gap-6
            z-1000"
        >
          {/* Menu Links */}
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col gap-6 text-[20px]   text-center"
          >
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                className="  active:scale-90 "
                variants={itemVariants}
              >
                <button
                  type="button"
                  onClick={() => {
                    scrollToSection(link.href);
                    setMenuOpen(false);
                  }}
                  className="text-(--text-primary-color) hover:text-(--primary-color)  transition-all duration-300 font-medium"
                >
                  {link.name}
                </button>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.85,
              ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
            }}
          >
            <Button
              type="button"
              variant="primary"
              size="lg"
              onClick={() => setMenuOpen(false)}
            >
              <Link
                href="/documents/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Resume
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Hamburger;
