
import notFoundAnimation from "@/public/lottie/notfound.json";
import LottieAnimation from "@/components/lottiefiles/LottieAnimation";
import Button from "@/components/customUI/Button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center gap-6 px-6 text-center bg-(--header-bg-color)">
      
      {/* Animation */}
      <div className="w-46 h-46  mt-10">
        <LottieAnimation
          animationData={notFoundAnimation}
          loop
          autoplay
          className="w-full h-full"
        />
      </div>

      {/* 404 Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-(--text-primary-color)">
        404
      </h1>

      {/* Message */}
      <p className="text-[16px] md:text-lg text-(--text-secondary-color) max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved.

      </p>

      
      <Link href="/">
        <Button variant="primary" size="md" type="button">
          Go Back Home
        </Button>
      </Link>

    </div>
  );
};

export default NotFound;
