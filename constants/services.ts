interface Service {
    id: number;
    logo: string;
    title: string;
    description: string;
}


const services: Service[] = [
    {
        id: 1,
        logo: "/services/design.svg",
        title: "Design",
        description: "I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job."
    },
    {
        id: 2,
        logo: "/services/dev.svg",
        title: "Development",
        description: "I can develop the website as per your requirements or create it from scratch with ongoing consultation."
    },

    {
        id:3,
        logo: "/services/maintenance.svg",
        title: "Maintenance",
        description: "Designing intuitive interfaces and engaging user experiences for digital products."       
    }

]


export default services;