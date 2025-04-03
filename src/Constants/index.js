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
      name: "Docker",
      icon: docker,
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
      title: "Software Engineer Intern",
      company_name: "Lockheed Martin",
      icon: web,
      iconBg: "#383E56",
      date: "August 2023 - April 2024",
      points: [
        "Worked on a Large Language Model team ",
        "Developed a low-SWaP private chatbot for efficient and accurate information retrieval from private company data ",
        "Trained and optimized the model using PyTorch and TensorFlow to later Implement it into a NVIDIA Jetson  ",
        "Utilized Mern technologies to develop chat box UI to easily prompt the model, as well as login/sign up functionality  ",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "BNY",
      icon: web,
      iconBg: "#E6DEDD",
      date: "June 2024 - August 2024",
      points: [
        "Worked on the Entereprise Compliance Engineering team ",
        "Collaborated with an AGILE SCRUM team to train a transaction monitoring AI using Python Capable of identifying false positive money laundering alerts with 97% accuracy increasing efficiency of investigation process and reducing risk to the bank ",
        "Utilized Pentaho PDI tool to create a data management system Migrated tables from Oracle SQL DB to Snowflake Virtual DB  Allowing the company to process data pulled from high volume data sources 27% faster ",
        "Collaborated with AGILE SCRUM team to develop a SAM Synthetic Test Data Tool Created a template with synthetic account data Allowing quick and easy manipulation of data for SAM rule testing ",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Kingdom Hoops",
      icon: web,
      iconBg: "#383E56",
      date: "August 2024 - December 2024",
      points: [
        "Was a startup compnay where I worked on the cloud team. ",
        "Collaborated with an AGILE SCRUM team to develop and deploy a mobile app used to optimize the training of basketball players  ",
        "IUtilized Docker to containerize and deploy test application onto google cloud ",
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
      name: "Med GPT",
      description:
        "For this project, I took google Gemma 2B Natural Langauge Model and fine tuned it on medical data sets, creating a medical specialized chat",
      tags: [
        {
          name: "Python",
          color: "pink-text-gradient",
        },
        {
          name: "Pytorch",
          color: "pink-text-gradient",
        },
        {
          name: "AI/ML",
          color: "pink-text-gradient",
        },
    
      ],
      image: carrent,
      source_code_link: "www.google.com",
    },
    {
      name: "Salsa Studio Website",
      description:
        "For this project, I created a website for a local salsa studio using React.js and Tailwind CSS. The website includes information about the studio, teams, classes, and instructors.",
      tags: [
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "React.js",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
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