"use client";
import { CircleArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <div className="group ">
      <button
        type="button"
        onClick={() => router.back()}
        className="flex text-(--text-secondary-color) text-[14px] font-semibold  group-hover:text-(--text-primary-color) transition-all duration-400     cursor-pointer"
      >
        <CircleArrowLeft
          size={20}
          className="inline-block  text-(--text-secondary-color) mr-3 group-hover:mr-1 group-hover:text-(--text-primary-color) transition-all duration-400  "
        />{" "}
        <p>Back to Projects</p>
      </button>
    </div>
  );
};

export default BackButton;
