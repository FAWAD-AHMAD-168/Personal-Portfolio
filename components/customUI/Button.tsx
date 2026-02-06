"use client"
import Image from "next/image";

const variantClasses = {
    primary:"bg-gradient-to-r from-(--primary-color) to-(--accent-color) text-(--text-primary-color) hover:from-(--primary-color) hover:to-(--primary-color) transition duration-300",
    secondary:"bg-[var(--bg-button-secondary)] text-white hover:bg-gray-700 transition duration-300",
};

const sizeClasses = {
    //ONLY ONE SIZE IS MADE FOR NOW !!!
    lg:"w-[188px] h-[58px] px-[50px]  text-[20px] font-semibold rounded-sm",
    
};

const Button = ({variant ,type , size, rightIcon ,className = "", children, ...props}) => {
  return (
    <button type={type} className={`${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...props}>
      {children}
      {rightIcon && <Image src={rightIcon} alt="" width={24} height={24} className="ml-2" />}
    </button>
  )
}

export default Button

