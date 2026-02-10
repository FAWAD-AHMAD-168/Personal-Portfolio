"use client"
import Button from "@/components/customUI/Button";
import Link from "next/link";
import {motion} from 'framer-motion'
 
const HomeLeft = () => {
  return (
    <section className="  w-[85%]  lg:w-[50%]   h-95 lg:h-130  flex flex-col justify-center    gap-6 ">
      <motion.div
      initial={{x:-30,opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{duration:0.5}}
       className=" w-full flex flex-col gap-2  text-(--text-primary-color) text-4xl font-semibold">
        <h1>HI THERE,I AM A</h1>
        <h1 className="bg-linear-to-r from-(--primary-color) via-(--secondary-color) to-(--accent-color) text-transparent bg-clip-text">
          FULL STACK DEVELOPER
        </h1>
      </motion.div>
       
      <motion.p
      initial={{x:-30,opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{duration:0.5,delay:0.2}}
       className="text-[16px] text-(--text-secondary-color) w-[86%]">
        Building modern, responsive, and user-focused web applications.
      </motion.p>
          {/* Github and LinkedIn Buttons */}
      <motion.div 
      initial={{x:-30,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:0.5,delay:0.4}}
      className="flex gap-4 mt-4">
        <Button
          type="button"
          variant="primary"
          size="lg"
          rightIcon="/home/github.svg"
          onClick={()=>{window.open("https://github.com/FAWAD-AHMAD-168", "_blank")}}
        >
          <Link href="https://github.com/FAWAD-AHMAD-168">Github</Link>
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="lg"
          rightIcon="/home/linkedin.svg"
          onClick={()=>{window.open("https://www.linkedin.com/in/fawad-ahmad-b9a286319", "_blank")}}
        >
          <Link href="https://www.linkedin.com/in/fawad-ahmad-b9a286319">
            Linkedin
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default HomeLeft;
