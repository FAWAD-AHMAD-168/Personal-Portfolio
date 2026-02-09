"use client";
import Image from "next/image";
import Link from "next/link";

import navLinks from "@/constants/navLinks";
import Button from "@/components/customUI/Button";
import Hamburger from "@/components/customUI/Hamburger";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <header className="fixed top-0 z-1000 text-(--text-primary-color) h-23 w-full   flex justify-center items-center gap-20 sm:gap-22 md:gap-20 lg:gap-26  xl-gap-30   ">
      {/* Profile Section */}

      <div>
        <Link href="/" className="flex gap-2 items-center">
          <Image
            alt="profile"
            src="/header/profile.png"
            loading="lazy"
            width={120}
            height={120}
            className="
    h-10 w-10
    sm:h-13 sm:w-13
    md:h-14 md:w-14
    lg:h-16 lg:w-16
    
    
   
    
    rounded-full
    shadow-(--primary-color) 
  "
          />

          <h1 className="block sm:block md:hidden lg:block xl:block   text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[24px] text-(--text-primary-color) font-semibold">
            Fawad{" "}
            <span className=" bg-(--primary-color) bg-clip-text text-transparent">
              Ahmad
            </span>
          </h1>

          <h1 className="hidden sm:hidden md:block lg:hidden xl:hidden ">
            <span className="font-semibold bg-(--primary-color) bg-clip-text text-transparent">
              Fawad.
            </span>
          </h1>
        </Link>
      </div>

      {/* Nav Menu */}

      <nav className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <li
            key={link.name}
            className="list-none cursor-pointer font-medium text-(--text-primary-color) hover:text-(--primary-color) transition-all duration-300"
            onClick={() => scrollToSection(link.href)}
          >
            {link.name}
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
    md:h-[45px] md:w-[120px] md:text-[12px]
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
