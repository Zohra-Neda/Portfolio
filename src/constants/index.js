import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  rails,
  ruby,
  git,
  figma,
  github,
  darkcode,
  self_employed,
  womanity,
  budgetApp,
  spaceTravelersHub,
  metricsWebApp,
  driveShare,
  FurniShop,
  house,
  threejs,
  CosmasWaswa,
  MohammedAlFuhidy,
  MarcoDíaz
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
    title: "React JS Developer",
    icon: reactjs,
  },
  {
    title: "Redux Developer",
    icon: redux,
  },
  {
    title: "Ruby on Rails Developer",
    icon: ruby,
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
    name: "Rails",
    icon: rails,
  },
  {
    name: "Ruby",
    icon: ruby,
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
    name: "github",
    icon: github,
  },
];

const experiences = [
  {
    title: "React Developer",
    company_name: "DarkCode",
    icon: darkcode,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - March 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Self-Employed",
    icon: self_employed,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Spending 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux.",
      "Developing skills in remote pair-programming using GitHub, industry-standard gitflow, and daily standups to communicate and collaborate with international remote developers.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Coding and Web Development Assistant Trainer",
    company_name: "Womanity",
    icon: womanity,
    iconBg: "#E6DEDD",
    date: "Apr 2018 - Dec 2020",
    points: [
      "Girls Can Code: Equipped 150 girls in Afghanistan with the essential skills required to pursue careers in technology, resulting in a 60% increase in their technological proficiency.",
      "Empowered and led 150 Afghan girls in integrating and utilizing new technologies in their daily lives, leading to a 60% improvement in their overall tech engagement.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Zohra is a highly motivated and results-oriented individual.",
    name: "Mohammed AlFuhidy",
    designation: "Software Developer",
    company: "fastn",
    image: MohammedAlFuhidy,
  },
  {
    testimonial:
      "Great at handling difficult projects and tasks, Zohra.",
    name: "Cosmas Wasswa",
    designation: "Full Stack Software Developer",
    company: "Self-Employed",
    image: CosmasWaswa,
  },
  {
    testimonial:
      "She consistently crafts web applications that excel in functionality.",
    name: "Marco Díaz",
    designation: "Full Stack Web Developer",
    company: "Self-Employed",
    image: MarcoDíaz,
  },
];

const projects = [
  {
    name: "Real Estate",
    description:
      "The Real Estate website will showcase apartments, properties, their prices, and locations across different countries. Users will be able to filter apartments based on countries, prices, and property types.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
    ],
    image: house,
    source_code_link: "https://github.com/Zohra-Neda/Real-Estate-API",
  },
  {
    name: "FurniShop",
    description:
      "FurniShop is a front-end web application designed to showcase various furniture items through a captivating slideshow. It features client feedback about the products, providing valuable insights for potential customers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: FurniShop,
    source_code_link: "https://github.com/Zohra-Neda/FurniShop",
  },
  {
    name: "DriveShare",
    description:
      "DriveShare is a full-stack web application designed to streamline the process of managing car rentals. Users can easily add new cars to their inventory, reserve vehicles for future use, and seamlessly delete listings.",
    tags: [
      {
        name: "rails",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "white-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: driveShare,
    source_code_link: "https://github.com/Zohra-Neda/DriveShare-API",
  },
  {
    name: "Budget App",
    description:
      "The Ruby on Rails Budget App is centered around the creation of a mobile web application designed for budget management. In this application, users can efficiently oversee their financial transactions by categorizing them.",
    tags: [
      {
        name: "rails",
        color: "blue-text-gradient",
      },
      {
        name: "rspec",
        color: "white-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
    ],
    image: budgetApp,
    source_code_link: "https://github.com/Zohra-Neda/Budget-App",
    live: "https://mobile-app-zn.onrender.com/",
  },
  {
    name: "Metrics-Web-App",
    description:
      "The app uses Redux to manage state and includes several reusable components, such as a search bar and a filter component. The app also includes a responsive design that works well on both desktop and mobile devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "white-text-gradient",
      },
      {
        name: "css3",
        color: "blue-text-gradient",
      },
    ],
    image: metricsWebApp,
    source_code_link: "https://github.com/Zohra-Neda/Metrics-Web-App",
  },
  {
    name: "Space-Travelers-Hub",
    description:
      "The Space Traveler Hub is an app built with React and Redux. On the main page, it displays rockets along with their detailed explanations. The mission page allows users to view available missions. Users are also allowed to reserve missions or join meetings.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "white-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: spaceTravelersHub,
    source_code_link: "https://github.com/Zohra-Neda/Space-Travelers-Hub",
  },
];

export { services, technologies, experiences, testimonials, projects };
