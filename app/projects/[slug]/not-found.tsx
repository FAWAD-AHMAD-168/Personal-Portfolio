import notFoundAnimation from "@/public/lottie/notfound.json";
import LottieAnimation from "@/components/lottiefiles/LottieAnimation";
import Button from "@/components/customUI/Button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center gap-6 px-6 text-center bg-(--header-bg-color)">
      {/* Animation */}
      <div className="w-46 h-46 mt-10">
        <LottieAnimation
          animationData={notFoundAnimation}
          loop
          autoplay
          className="w-full h-full"
        />
      </div>

      <span className="text-sm font-semibold uppercase tracking-[0.25em] text-(--primary-color)">
        Project Not Found
      </span>

      <h1 className="text-4xl md:text-6xl font-bold text-(--text-primary-color)">
        Oops! This Project Doesn&apos;t Exist
      </h1>

      <p className="max-w-lg text-[16px] md:text-lg text-(--text-secondary-color)">
        The project you&apos;re looking for may have been removed, renamed, or
        the link you followed is incorrect. Explore other projects or head back
        to the portfolio.
      </p>

      {/* Actions */}

      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        <Link href="/#projects">
          <Button variant="primary" size="md" type="button">
            Explore Projects
          </Button>
        </Link>

        <Link href="/">
          <Button variant="secondary" size="md" type="button">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
