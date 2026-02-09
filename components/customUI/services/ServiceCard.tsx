import Image from "next/image"; 
interface ServiceCardProps {
    logo: string;
    title: string;
    description: string;

}
const ServiceCard = ({ logo, title, description }: ServiceCardProps) => {
  return (
    <section className="w-80 sm:w-90 h-55 bg-(--bg-primary-color)  border border-(--primary-color) rounded-sm  flex  flex-col justify-center items-center gap-4 ">
        <div className="flex gap-2">
            <Image src={logo} alt={title} width={23} height={23} />
            <h3 className="text-2xl font-semibold">{title} </h3>

        </div>
        <div className="flex justify-center items-center">
            <p className="w-[72%] text-(--text-secondary-color)">{description}</p>  
        </div>


    </section>
  )
}

export default ServiceCard