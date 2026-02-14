"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="w-full">
      <div
        className="w-full h-55 md:h-75 -mt-20 "
        style={{
          backgroundColor: "var(--bg-secondary-color)",
          clipPath: "polygon(23% 79%, 0% 100%, 100% 100%)",
          // clipPath: "polygon(20% 65%, 0 100%, 100% 100%)",

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
          <Link
            href="https://www.facebook.com/profile.php?id=100066072281042&ref=NONE_ig_profile_ac"
            target="_blank"
          >
            <Image
              src="/footer/facebook.svg"
              alt="Facebook"
              width={30}
              height={30}
              className="cursor-pointer transition duration-300 hover:brightness-0 hover:invert"
            />
          </Link>

          <Link href="https://www.instagram.com/fawadahmad168/" target="_blank">
            <Image
              src="/footer/insta.svg"
              alt="Instagram"
              width={25}
              height={25}
              className="cursor-pointer transition duration-600  hover:brightness-0 hover:invert"
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/fawad-ahmad-b9a286319"
            target="_blank"
          >
            <Image
              src="/footer/linkedin.svg"
              alt="LinkedIn"
              width={30}
              height={30}
              className="cursor-pointer transition duration-300 hover:brightness-0 hover:invert"
            />
          </Link>

          <Link href="https://github.com/FAWAD-AHMAD-168" target="_blank">
            <Image
              src="/footer/github.svg"
              alt="GitHub"
              width={30}
              height={30}
              className="cursor-pointer transition duration-300 hover:brightness-0 hover:invert"
            />
          </Link>
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
            <span className="font-semibold text-(--text-secondary-color) ">
              2026 FAWAD AHMAD -{" "}
            </span>{" "}
            <span className="text-(--text-secondary-color)">
              All rights reserved.{" "}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
