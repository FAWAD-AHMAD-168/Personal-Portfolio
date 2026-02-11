
import notFoundAnimation from "@/public/lottie/notfound.json";
import LottieAnimation from "@/components/lottiefiles/LottieAnimation";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center gap-6 px-6 text-center bg-(--header-bg-color)">
      
      {/* Animation */}
      <div className="w-56 h-56 md:w-72 md:h-72 mt-26">
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

    </div>
  );
};

export default NotFound;
