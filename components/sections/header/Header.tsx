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
    <header className=" fixed z-1000 text-(--text-primary-color) bg-(--bg-primary-color) 
    h-23 w-full mx-auto flex  items-center justify-center      
       sm:gap-32 md:gap-16 lg:gap-26  xl-gap-30   ">
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

      

      {/* Medium screens  */}
      <div className="hidden md:block lg:hidden">
        <Button variant="primary" size="sm" type="button" onClick={() => window.open("/resume.pdf", "_blank")}>
          
            Check Resume
         
        </Button>
      </div>

      {/* Large screens  */}
      <div className="hidden lg:block xl:hidden">
        <Button variant="primary" size="md" type="button" onClick={() => window.open("/resume.pdf", "_blank")}>
          Check Resume
        </Button>
      </div>

      {/* Extra large  */}
      <div className="hidden xl:block">
        <Button variant="primary" size="lg" type="button"   onClick={() => window.open("/resume.pdf", "_blank")}>
          Check Resume
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
