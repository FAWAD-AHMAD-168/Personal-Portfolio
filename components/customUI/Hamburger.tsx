"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Button from "@/components/customUI/Button";
import navLinks from "@/constants/navLinks";

const Hamburger = () => {
  const [menuopen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="sm"
        type="button"
        className="h-[50px] w-[50px] rounded-sm"
        onClick={() => setMenuOpen(!menuopen)}
      >
        <Image
          src={
            menuopen
              ? "/header/cancel.svg"
              : "/header/hamburger.svg"
          }
          alt="Menu"
          width={24}
          height={24}
        />
      </Button>


      {/* Menu Overlay */}
      {menuopen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="
            fixed inset-0
            bg-gray-600/500
            backdrop-blur-sm
            top-25
            flex flex-col items-center justify-center
            gap-6
            z-50
          "
        >
            {/* Menu Links */}

            {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.name}
                </Link>
            ))}

          <Button
            variant="primary"
            size="lg"
            onClick={() => setMenuOpen(false)}
          >
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">Check Resume</Link>
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default Hamburger;
