"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const BackButton = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  return (
    <button
      type="button"
      onClick={() => router.push("/#projects")}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="cursor-pointer active:scale-95 transition-transform duration-500"
    >
      <AnimatePresence mode="wait">
        {show ? (
          <motion.div
            key="expanded"
            initial={{ width: 50, opacity: 0.6 }}
            animate={{ width: 190, opacity: 1 }}
            exit={{ width: 50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex h-12.5 overflow-hidden rounded-full bg-(--text-primary-color) items-center justify-center gap-2 px-4"
          >
            <Image
              width={25}
              height={25}
              src="/project_details/arrow-back.svg"
              alt="back-arrow"
              loading="eager"
            />

            <p className="font-medium whitespace-nowrap">Back To Projects</p>
          </motion.div>
        ) : (
          <motion.div
            key="circle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-12.5 h-12.5 rounded-full flex items-center justify-center bg-(--text-primary-color)"
          >
            <Image
              width={25}
              height={25}
              src="/project_details/arrow-back.svg"
              alt="back-arrow"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default BackButton;
