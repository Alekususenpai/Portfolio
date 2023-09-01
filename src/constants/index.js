import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  chakraui,
  expressjs,
  jest,
  nextjs,
  salesforce,
  mtaIntroductionToProgramming,
  jsAlgorithmsAndDataStructures,
  sfCommerceDeveloper,
  sfJavascriptDeveloper,
  softwareFundamentalsMicrosoft,
  freelancer,
  dept,
  explorista
} from "../assets";

export const info = {
  shortDescription: "I develop with Salesforce and React",
  overview: " I'm a junior developer with experience in JavaScript, React, and Salesforce. My goal is to create efficient, scalable, and user-friendly solutions that solve real-world problems.",
  cta: "Let's work together to bring your ideas to life!",
  projects: "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."
}

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
    name: "Salesforce",
    icon: salesforce,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Chakra UI",
    icon: chakraui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Unit Testing",
    icon: jest,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Freelance",
    icon: freelancer,
    iconBg: "#383E56",
    date: "Dec 2021 - May 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing new features such as interactive forms with real-time validation, responsive navigation menu, data filtering and sorting",
      "Refactoring code for reusability and maintainability",
      "Enhancing the UI using using libraries or custom CSS to achieve a pixel perfect and responsive web design across all devices",
      "Fixing small bugs"
    ],
  },
  {
    title: "SFCC Developer",
    company_name: "Dept",
    icon: dept,
    iconBg: "#383E56",
    date: "Jul 2022 - August 2023",
    points: [
      "Building and deploying multiple brands for our client to the US/EU market through the establishment of distinct cartridge setups, managing localization, and implementing market-specific features",
      "Integrating Page Designer pages at strategic locations editable via the BM, configuring jobs, content slots, creating/extending controllers, decorators, ISML, crafting a tailored site configuration with toggleable functionalities",
      "Developing with PWA Kit for SFCC Composable Storefront with React and Typescript, later integrated with Contentful"
    ],
  },
];


const projects = [
  {
    name: "Explorista",
    description:
      "Explorista is an unique platform that brings fun and interactive experiences - you can learn new things, try out creative workshops, and even explore different cultures without the need to leave your home.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: explorista,
    source_code_link: "https://github.com/Alekususenpai/explorista",
    deployment_link: "https://explorista.netlify.app",
  },
];

const certifications = [
  {
    name: "Salesforce Certified JavaScript Developer I",
    image: sfJavascriptDeveloper,
    link: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=7ueJRQhB6OmCSP72O+YahYg6KrhJ6+7BpdPfbcl8bT9EHK05fqWYKwcLrDk5HRvF',
  },
  {
    name: "Salesforce Certified B2C Commerce Developer",
    image: sfCommerceDeveloper,
    link: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=7ueJRQhB6OmCSP72O+YahYg6KrhJ6+7BpdPfbcl8bT9EHK05fqWYKwcLrDk5HRvF',
  },
  {
    name: "Career Essentials in Software Development by Microsoft and LinkedIn",
    image: softwareFundamentalsMicrosoft,
    link: 'https://www.linkedin.com/learning/certificates/af0018bc0feac1a10f5254c5733e246ac846511075abc7a68027fb0cf6e48596',
  },
  {
    name: "MTA: Introduction to Programming Using HTML and CSS",
    image: mtaIntroductionToProgramming,
    link: 'https://www.credly.com/badges/08fc41bb-2712-451b-9eb7-44426350a6c5/public_url',
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    image: jsAlgorithmsAndDataStructures,
    link: 'https://www.freecodecamp.org/certification/Alekusu/javascript-algorithms-and-data-structures',
  },
];

export { technologies, experiences, projects, certifications };
