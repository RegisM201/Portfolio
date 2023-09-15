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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    java,
    python,
    c,
    cPlusPlus,
    cSharp,
    numpy,
    pytorch,
    
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
      title: "Undergraduate",
      icon: web,
    },
    {
      title: "Software Engineer",
      icon: backend,
    },
    {
      title: "Computer Science",
      icon: creator,
    },
  ];
  
  const technologies = [
    
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: cPlusPlus,
    },
    {
      name: "C",
      icon: c,
    },
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
    /*{
      name: "TypeScript",
      icon: typescript,
    },*/
    {
      name: "React JS",
      icon: reactjs,
    },
    /*{
      name: "Tailwind CSS",
      icon: tailwind,
    },*/
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
      name: "Numpy",
      icon: numpy,
    },
    {
      name: "Pytorch",
      icon: pytorch,
    },
    {
      name: "C#",
      icon: cSharp,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "ATM Simulator",
      description:
        "This project supports account creation, login, and transactions like deposits, withdrawals, and balance checks.",
      tags: [
        {
          name: "Java",
          color: "pink-text-gradient",
        },
        
      ],
      image: carrent,
      source_code_link: "https://github.com/RegisM201/ATM_Simulator.git",
    },
    {
      name: "Music App",
      description:
        "This project is a user-friendly command-line tool that empowers users to effortlessly create, organize, and interact with playlists and songs.",
      tags: [
        {
          name: "Java",
          color: "pink-text-gradient",
        },
        
      ],
      image: jobit,
      source_code_link: "https://github.com/RegisM201/Music_App.git",
    },
    {
      name: "Contact Manager",
      description:
        "The application allowed users to log in or sign up for an account to manage their contact information, Using the LAMP stack (Linux, Apache, MySQL, PHP).",
      tags: [
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "SQL",
          color: "pink-text-gradient",
        },
        {
          name: "PHP",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/RegisM201/Contact-Manager-.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };