"use client";
import Coder from "@/public/lottie/coder.json";
import LottieAnimation from "@/components/lottiefiles/LottieAnimation";
import {motion} from "framer-motion";
const AboutLeft = () => {
  return (
    
      <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      
      className="h-80 w-80 rounded-sm overflow-hidden "
      >
      <LottieAnimation
        animationData={Coder}
        loop={true}
        autoplay={true}
        className="w-full h-full bg-(--primary-color)"
      />
       </motion.div>
    
  );
};

export default AboutLeft;
