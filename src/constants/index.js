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
    wbs,
    meta,
    starbucks,
    tesla,
    shopify,
    altimoto,
    alanflix,
    threejs,
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
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
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
    
  ];
  
  const experiences = [
    {
      title: "Full stack Developer Student",
      company_name: "WBS Coding School Bootcamp ",
      icon: wbs,
      iconBg: "#383E56",
      date: "11th May 2023 - 11th September 2023",
      points: [
        "Building interactive and responsive user interfaces using HTML, CSS, and JavaScript. This includes designing layouts, handling user input, manipulating the DOM, and integrating various front-end frameworks and libraries like React or Vue.js.",
        "Experience in server-side programming using JavaScript, including frameworks like Node.js and Express.js. Building RESTful APIs, handle data storage and retrieval using databases (e.g., MongoDB, MySQL), and implement authentication and authorization systems.",
        "Designing and creating database schemas, write SQL queries, and perform CRUD (Create, Read, Update, Delete) operations.",
        "Deploying web applications to different hosting platforms (e.g., OnRender, Netlify) and configure them for production. Managing environments, setting up domain names, and optimizing application performance.",
        "Teamwork and collaboration. Working in a team environment, using project management tools (e.g., Trello) and collaborating with others using version control and communication tools (e.g., GitHub).",
        "Problem-Solving and Debugging",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "While Alan is still building his portfolio, he has shown great potential and a willingness to go the extra mile. He takes the initiative to research and learn new technologies to enhance his skill set, which is commendable.",
      name: "Sara Schulz",
      designation: "Instructor",
      company: "WBS",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Alan has a strong work ethic and a great attention to detail. He takes the time to understand the project requirements and provides solutions that align with our goals. He shows an eagerness to contribute and actively seeks feedback to improve his skills.",
      name: "Krystian Kowalski",
      designation: "Business Owner",
      company: "Polska Trucks",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    
  ];
  
  const projects = [
    {
      name: "Car Sell and Buy",
      description:
        "Alti-Moto website is an online platform designed to facilitate the buying and selling of vehicles. It provides a centralized marketplace where individuals or dealerships can list their cars for sale, and potential buyers can browse and search for vehicles based on their preferences.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: altimoto,
      source_code_link: "https://github.com/alankze/AlTi-Autos",
    },
    {
      name: "Netflix Clone",
      description:
        "AlanFlix site is a website designed to emulate the features and functionalities of the popular streaming platform, Netflix. It aims to provide a similar user experience and offer a wide range of movies, TV shows, and other video content for users to stream online.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
      ],
      image: alanflix,
      source_code_link: "https://github.com/alankze/AlanFlix",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };