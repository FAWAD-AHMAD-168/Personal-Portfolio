interface Experience {
    companyLogo: string;
    companyName: string;
    position: string;
    duration: string;
    description: string;
    skills: string[];
}

const experiences: Experience[] = [

    {   
    companyLogo: '/experience/Labverse.svg',
    companyName: 'Labverse',
    position: 'Frontend Developer',
    duration: 'June 2025 - August 2025',
    description: 'Completed a three-month Frontend Developer internship at Labverse, where I translated UI/UX wireframes into responsive,cross-browser code using ReactJS, JavaScript, HTML5, and CSS3. Contributed to the Ecom SAAS project by optimizing user experience, resolving integration challenges, and collaborating with the team using Git for version control and code review.',
    skills: ['ReactJS',"NextJS" ,'HTML', 'JavaScript', 'Typescript', 'CSS', "TailwindCSS"]
    }

]

export default experiences;