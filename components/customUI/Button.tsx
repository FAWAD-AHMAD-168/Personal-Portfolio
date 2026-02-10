"use client";
import Image from "next/image";

const variantClasses = {
  primary:
    " flex justify-center items-center gap-2 bg-gradient-to-r from-(--primary-color) to-(--accent-color) text-(--text-primary-color) hover:from-(--accent-color) hover:to-(--accent-color) transition duration-300",
  secondary:
    "bg-[var(--bg-button-secondary)] text-white hover:bg-gray-700 transition duration-300 flex justify-center items-center gap-2",
  ghost:
    "bg-transparent  text-(--text-primary-color) hover:bg-gray-100 transition duration-300 flex justify-center items-center gap-2",
};

const sizeClasses = {
  sm: "px-2 py-3 w-[130px] text-[13px] font-semibold rounded",
  md: "px-2 py-4 w-[155px] text-[14px] font-semibold rounded-md",
  lg: " px-2 py-4 w-[180px] text-[16px] font-semibold rounded-md ",
};

interface ButtonProps {
  variant: "primary" | "secondary" | "ghost";
  type: "button" | "submit" | "reset";
  size: "lg" | "md" | "sm";
  onClick?: () => void;
  rightIcon?: string;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  type,
  size,
  rightIcon,
  onClick,
  className = "",
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variantClasses[variant]} ${sizeClasses[size]} ${className} `}
      {...props}
    >
      {children}
      {rightIcon && (
        <Image src={rightIcon} alt="" width={24} height={24} className="ml-2" />
      )}
    </button>
  );
};

export default Button;
