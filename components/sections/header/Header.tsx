"use client";
import Image from "next/image";
import Link from "next/link";

import navLinks from "@/constants/navLinks";
import Button from "@/components/customUI/Button";
import Hamburger from "@/components/customUI/Hamburger";

const Header = () => {
  return (
    
      <header className="fixed z-1000 text-(--text-primary-color) h-20 w-full px-2 flex justify-around items-center xl:gap-37.5  lg-gap-30 md:gap-15  ">
        {/* Profile Section */}

          <Link href="/" className="flex gap-2 items-center">
          <Image
            alt="profile"
            src="/header/profile.png"
            loading="lazy"
            width={120}
            height={120}
            className="
    h-12 w-12
    sm:h-13 sm:w-13
    md:h-14 md:w-14
    lg:h-15 lg:w-15
    xl:h-18 xl:w-18
    2xl:h-20 2xl:w-20
    rounded-full
    shadow-(--primary-color) 
  "
          />

          <h1 className="text-[18px] sm:text-[15px] md:text-[12px] lg:text-[18px] xl:text-[22px] 2xl:text-[24px] text-(--text-primary-color) font-semibold">
            Fawad{" "}
            <span className="ml bg-(--primary-color) bg-clip-text text-transparent">
              Ahmad
            </span>
          </h1>
          </Link>
        

        {/* Nav Menu */}

        <nav className=" hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex gap-7.5  ">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className=" md:text-[12px] lg:text-[16px] font-medium text-(--text-primary-color) list-none cursor-pointer hover:text-(--primary-color) transition-all duration-300"
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </nav>

        {/* Resume Button */}

        <div className="hidden   md:block ">
          <Button
            variant="primary"
            size="lg"
            type="button"
            className="
    h-[50px] w-[50px] text-[12px] font-semibold rounded-sm
    md:h-[50px] md:w-[110px] md:text-[13px]
    xl:h-[50px] xl:w-[160px] xl:text-[16px]
  "
          >
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Check Resume
            </Link>
          </Button>
        </div>

        <div className="block md:hidden">
          <Hamburger />
          </div>

          

        {/* Hamburger Menu */}
      </header>
    
  );
};

export default Header;
