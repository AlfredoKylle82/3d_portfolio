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
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "C# Developer",
    icon: backend,
  },
  {
    title: "JavaScript Developer",
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
    title: "Airport Management	",
    company_name: "Personal Project",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2023",
    points: [
      "Designed, implemented, and managed a database containing data on aircraft, airlines, airports, countries, and their associated routes Utilized Spring Boot JPA to manage relational data in the java application, and managed API endpoints using Postman for seamless data insertion ensuring the reliability and functionality of the system. ",
      "Efficiently version-controlled using GitLab Repository, ensuring smooth collaboration and project management. ",
      "Technologies used: Spring Boot Web, Spring Boot JPA, SQL, ERD design, Postman, Java SE 20, Gitlab",
    ],
    
  },
  {
    title: "Sponsorships and Marketing",
    company_name: "AURORA",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "September 2018 - January 2019",
    points: [
      "Built and maintained strong relationships with local businesses and organizations to secure sponsorships for our event. Successfully increased sponsorship funds by 10% (10,000 PHP) in the early phase.",
      "Implemented a strategic ticket sales plan, leveraging social media, email marketing, and direct outreach to promote events and drive ticket sales. Consistently achieved and often exceeded our ticket sales goals by 15%.",
    ],
  },
  {
   title: "Tutor",
    company_name: "Abest Centre of Tutorial Excellence",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2018 - December 2020",
    points: [
      "Demonstrated ability to break down complex topics into easily understandable parts, including topics in HTML, CSS, and Java.",
      "An enthusiastic educator with the asd ability to inspire students, fostering a love of learning and instilling confidence in their academic abilities.",
      "Excellent communication and relationship-building skills honed over years of successful tutoring.",
    ],
  },
  {
    title: "Tuition Installment Plan Scheduler",
    company_name: "Personal Project",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "November 2018",
    points: [
      "Developed an application to manage tuition installment plans.",
      "The application captures student information offers purchase options for uniforms and books and provides flexible payment plans. The system efficiently calculates and displays payment details, demonstrating an understanding of financial planning and problem-solving.",
      "Technologies used: C#.",
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
    name: "Two-player Network Game",
    description:
      "Designed and implemented a multiplayer network game. The program implemented the concepts and foundations of graphical user interface (GUI), inheritance, inner classes, animation using threads and timers, networking to send and receive game data.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Swing",
        color: "green-text-gradient",
      },
      {
        name: "Animation",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AlfredoKylle82/Two-player-Game-Design-Project.git",
  },
  {
    name: "eSports Player Management",
    description:
      "Designed and developed an interactive and user-friendly PHP Web application to streamline the management of eSports player profiles. The application leverages MySQL database support to efficiently store and retrieve player data, allowing for seamless addition, deletion, and updating of player details.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/AlfredoKylle82/eSports-Profile-Management-.git",
  },
  {
    name: "Brick Break",
    description:
      "The task required an understanding of Java swing and awt, polymorphism and interfaces. Without using an actual image file (.PNG, .JPG, etc.), all shapes as well as the positions were programmatically drawn and calculated inside the program.",
    tags: [
      {
        name: "GUI",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AlfredoKylle82/Brick-Game-.git",
  },
];

export { services, technologies, experiences, testimonials, projects };