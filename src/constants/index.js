import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    personalportfolio,
    virtualworld,
    selfdrivingcar,
    mastermind,
    imageprocessing,
    threejs,
    fincasa,
    letsgo,
    personalpicture,
    valentinesday,
    invoicemaster,
    aidetection,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
    {
        id: "profile",
        title: "My Profile",
    },
    {
        id: "projects",
        title: "Projects",
    }
];

const services = [
    {
        title: "Student Developer",
        icon: web,
    },
    {
        title: "Python Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "IT Support and Management",
        company_name: "Let's Go Tourism Dubai",
        icon: letsgo,
        iconBg: "#383E56",
        date: "April 2023 - May 2024",
        points: [
            "Developed a comprehensive CRM and accounting hub utilizing Notion, Python, and CODA to streamline business processes and enhance operational efficiency.",
            "Developed a booking management system using Python to streamline workflow and improve efficiency for handling incoming bookings.",
            "Designed and implemented an automated Excel workbook using VBA to reduce labor-intensive tasks, including invoice generation.",
            "Managed customer databases in MySQL and utilized tools like PowerBI for data visualization of the data and customer leads.",
        ],
    },
    {
        title: "AI and Automation Intern",
        company_name: "Fincasa Group of Companies",
        icon: fincasa,
        iconBg: "#E6DEDD",
        date: "May 2024 - July 2024",
        points: [
            "Assisted in the development and maintenance of IT infrastructure within the company.",
            "Automated daily workflow tasks using tools like Power Automate and Zapier to enhance operational efficiency.",
            "Built and deployed a fully functional E-Commerce website using Wix Studio for a sub-company.",
            "Developed multiple websites for various companies using Wix Studio, Wordpress, Spline, and HTML/CSS.",
            "Designed an organizational workflow chart to establish clear hierarchy and streamline operations within the company."
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Personal Portfolio",
        description:
            "My personal portfolio website built using React, Tailwind CSS, and Framer Motion. It showcases my projects, skills, and experiences, along with an insight into my learning experiences being my first website built using React.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "vite",
                color: "orange-text-gradient",
            },
            {
                name: "framer-motion",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: personalportfolio,
        source_code_link: "https://github.com/adityashibu/personalportfolio",
    },
    {
        name: "Virtual World Editor",
        description:
            "Building a Virtual World editor in JavaScript using nothing more than HTML CSS and JS. This project is a part of my learning journey to understand AI, as I will be using this editor to create a virtual world for my AI self driving cars to interact with.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "js",
                color: "pink-text-gradient",
            },
        ],
        image: virtualworld,
        source_code_link: "https://github.com/adityashibu/Virtual_world",
    },
    {
        name: "2D Self Driving Car",
        description:
            "Built a 2D self driving car using Vanilla Javascript in my pursuit to understand Neural Networks and AI. The car uses a neural network to learn how to drive around the track without crashing using 5 front sensors to detect the track and other cars.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "js",
                color: "pink-text-gradient",
            },
        ],
        image: selfdrivingcar,
        source_code_link: "https://github.com/adityashibu/neural_networks_javascript",
    },
    {
        name: "Mastermind Game",
        description:
            "This was my university project where we had to recreate the MasterMind arcade game using C and Assembly Language, This was a group project and is a RPi based game. It was a great learning experience as it was my first time working with Low Level Languages.",
        tags: [
            {
                name: "c",
                color: "blue-text-gradient",
            },
            {
                name: "assembly",
                color: "green-text-gradient",
            },
            {
                name: "inline assembly",
                color: "pink-text-gradient",
            },
        ],
        image: mastermind,
        source_code_link: "https://github.com/adityashibu/masterMind_Final",
    },
    {
        name: "Image Processing",
        description:
            "This was another one of my university project which was to create a program in C that could process given Images and apply filters to them, such as noise, blur etc. This helped strengthen my skills using C and understanding how images are processed.",
        tags: [
            {
                name: "c",
                color: "blue-text-gradient",
            },
        ],
        image: imageprocessing,
        source_code_link: "https://github.com/adityashibu/ImageProcessing",
    },
    {
        name: "Invoice Master",
        description:
            "An automated invoicing program made using Python and Tkinter, I came up with this project to help automate the invoicing process for my father's business, heavily relied on GPT to help me tackle the fundamentals of manipulating excel files.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "tkinter",
                color: "green-text-gradient",
            },
        ],
        image: invoicemaster,
        source_code_link: "https://github.com/adityashibu/invoiceMaster",
    },
    {
        name: "AI Content Detection",
        description:
            "My first step into the world of AI where I set out to learn about LLM's and how they work, I tried to create a program that could detect the amount of AI generated text in a given text file, although I still haven't completed this project.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "jupyternotebook",
                color: "green-text-gradient",
            },
            {
                name: "tensorflow",
                color: "orange-text-gradient",
            },
        ],
        image: aidetection,
        source_code_link: "https://github.com/adityashibu/AIDetector",
    },
    {
        name: "Valentines Day Website",
        description:
            "A simple website I made for Valentines day for one of my friends, it was a fun project to work on and I learned a lot about CSS, mainly about CSS keyframes and animations using CSS. This was also my first time deploying a website to a domain.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
        ],
        image: valentinesday,
        source_code_link: "https://github.com/adityashibu/VDay2024",
    },
];

export { services, technologies, experiences, testimonials, projects, personalpicture };