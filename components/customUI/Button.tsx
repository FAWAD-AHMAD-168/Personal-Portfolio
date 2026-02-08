"use client"
import Image from "next/image";

const variantClasses = {
    primary:"bg-gradient-to-r from-(--primary-color) to-(--accent-color) text-(--text-primary-color) hover:from-(--accent-color) hover:to-(--accent-color) transition duration-300",
    secondary:"bg-[var(--bg-button-secondary)] text-white hover:bg-gray-700 transition duration-300",
    ghost:"bg-transparent  text-(--text-primary-color) hover:bg-gray-100 transition duration-300",
};

const sizeClasses = {
    //ONLY ONE SIZE IS MADE FOR NOW !!!
    sm:"  text-[14px] font-semibold rounded-md ",
    lg:" h-[50px] w-[160px] text-[16px] font-semibold rounded-lg ",
    
};

interface ButtonProps {
  variant: "primary" | "secondary" | "ghost";
  type: "button" | "submit" | "reset";
  size: "lg"|"sm";
  onClick?: () => void;
  rightIcon?: string;
  className?: string;
  children: React.ReactNode;

}

const Button: React.FC<ButtonProps> = ({variant ,type , size, rightIcon ,onClick ,className = "", children, ...props}) => {
  return (
    <button type={type} onClick={onClick} className={`${variantClasses[variant]} ${sizeClasses[size]} ${className} `} {...props}>
      {children}
      {rightIcon && <Image src={rightIcon} alt="" width={24} height={24} className="ml-2" />}
    </button>
  )
}

export default Button

