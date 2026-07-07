import Image from "next/image";
interface ServiceCardProps {
  logo: string;
  title: string;
  description: string;
}
const ServiceCard = ({ logo, title, description }: ServiceCardProps) => {
  return (
    <section className="  w-70 h-40  sm:w-75 sm:h-45   md:w-90 md:h-55 bg-(--bg-skillsCard-color)     flex  flex-col justify-center  gap-4 rounded-lg border border-(--primary-color) hover:scale-102 transition-transform duration-300 ease-in-out cursor-pointer">
      <div className=" hidden md:flex gap-2 mx-auto">
        <Image src={logo} alt={title} width={23} height={23} />
        <h3 className="  text-2xl font-semibold">{title} </h3>
      </div>

      <div className="hidden md:hidden sm:flex gap-2 mx-auto ">
        <Image src={logo} alt={title} width={20} height={20} />
        <h3 className="  text-xl font-semibold">{title} </h3>
      </div>

      <div className="sm:hidden flex gap-2 mx-auto ">
        <Image src={logo} alt={title} width={20} height={20} />
        <h3 className="  text-md font-semibold">{title} </h3>
      </div>

      <p className="w-[72%]  text-[12px]  sm:text-sm  lg:text-[16px]    text-(--text-secondary-color) mx-auto ">
        {description}
      </p>
    </section>
  );
};

export default ServiceCard;
