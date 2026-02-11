"use client";

import Lottie from "lottie-react";

interface LottieAnimationProps {
  animationData: object;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

const LottieAnimation = ({
  animationData,
  loop,
  autoplay,
  className,
}: LottieAnimationProps) => {
  return (
    <Lottie
      animationData={animationData}
      loop={loop ?? true}
      autoplay={autoplay ?? true}
      className={className}
    />
  );
};

export default LottieAnimation;
