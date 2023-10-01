import {
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
  python,
  aws,
  mtaIntroductionToProgramming,
  jsAlgorithmsAndDataStructures,
  sfCommerceDeveloper,
  sfJavascriptDeveloper,
  softwareFundamentalsMicrosoft,
  freelancer,
  dept,
  explorista,
  crlLandingPage,
  animeKitsu,
  rickMorty,
  workBoard,
  interactiveRC,
  crowdfund,
  opinia,
  githubLogo,
  linkedinLogo,
  salesforceLogo,
  python1Certificate,
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
    name: "Python",
    icon: python,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Jest",
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
      "Developed and maintained web applications using React.js and other related technologies (Node, MySQL, AWS)",
      "Implemented new features such as interactive forms with real-time validation, responsive navigation menu, data filtering and sorting",
      "Refactored code for reusability and maintainability",
      "Enhanced the UI using using libraries or custom CSS to achieve a pixel perfect and responsive web design across all devices",
      "Fixed small bugs"
    ],
  },
  {
    title: "SFCC Developer",
    company_name: "Dept",
    icon: dept,
    iconBg: "#383E56",
    date: "Jul 2022 - August 2023",
    points: [
      "Took part in the development and deployment of multiple brands for our client to the US and EU market through the establishment of distinct cartridge setups, managed localization, and implemented market-specific features",
      "Integrated Page Designer pages at strategic locations editable via the Business Manager, configured jobs, content slots, creating/extending controllers, decorators, ISML, crafted a tailored site configuration with toggleable functionalities",
      "Participated in the development with PWA Kit for the SFCC Composable Storefront with React and Typescript, integrated with Contentful"
    ],
  },
];


const projects = [
  {
    name: "Explorista",
    level: 'junior',
    description:
      "Explorista is an unique platform that brings fun and interactive experiences - you can learn new things, try out creative workshops, and even explore different cultures without the need to leave your home.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
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
  {
    name: "Anime Kitsu",
    level: 'entry',
    description:
      "Website to search for anime and manga experiences, get recommendations and check what friends are watching or reading.",
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
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: animeKitsu,
    source_code_link: "https://github.com/Alekususenpai/anime-kitsu",
    deployment_link: "https://anime-kitsu.netlify.app",
  },
  {
    name: "Rick and Morty",
    level: 'junior',
    description:
      "Website dedicated to the animated serie Rick and Morty. For further info on characters, episodes and locations, check the website.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-router",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "rest apis",
        color: "text-cyan-300",
      },
    ],
    image: rickMorty,
    source_code_link: "https://github.com/Alekususenpai/Rick-n-Morty",
    deployment_link: "https://alekususenpai.github.io/Rick-n-Morty",
  },
  {
    name: "Work Board",
    level: 'entry',
    description:
      "WorkBoard's goal is to provide you with some basic tools to increase your productivity. Consists of a calendar, pomodoro timer and to-do list.",
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
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: workBoard,
    source_code_link: "https://github.com/Alekususenpai/work-board",
    deployment_link: "https://alekususenpai.github.io/work-board/",
  },
  {
    name: "Interactive Rating Component",
    level: 'entry',
    description:
      "Interactive rating component challenge from Frontend Mentor which involves handling user interaction and updating the DOM.",
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
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: interactiveRC,
    source_code_link: "https://github.com/Alekususenpai/interactive-rating-component",
    deployment_link: "https://alekususenpai.github.io/interactive-rating-component/",
  },
  {
    name: "Crowdfunding Product Page",
    level: 'entry',
    description:
      "Interactive rating component challenge from Frontend Mentor which involves handling user interaction and updating the DOM.",
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
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: crowdfund,
    source_code_link: "https://github.com/Alekususenpai/crowdfunding-product-page",
    deployment_link: "https://alekususenpai.github.io/crowdfunding-product-page/",
  },
  {
    name: "CRL Landing Page",
    level: 'entry',
    description:
      "CRL landing page following the “Mobile First” principle and Responsive Web Design made with Flexbox.",
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
    image: crlLandingPage,
    source_code_link: "https://github.com/Alekususenpai/crl-landing-page",
    deployment_link: "https://alekususenpai.github.io/crl-landing-page/",
  },
  {
    name: "Opinia",
    level: 'junior',
    description:
      "Opinia is a product feedback app designed to streamline the feedback process for both users and product developers. Users can create, read, update, and delete feedbacks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react context",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: opinia,
    source_code_link: "https://github.com/Alekususenpai/opinia",
    deployment_link: "https://opinia.netlify.app",
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
  {
    name: "Python Essentials 1 by Cisco Networking Academy",
    image: python1Certificate,
    link: 'https://www.credly.com/badges/ac335a81-8b11-4c44-a6d9-a0cc352e4147/public_url',
  },
];

const socialMedia = [
  {
    name: 'LinkedIn',
    icon: linkedinLogo,
    link: 'https://www.linkedin.com/in/alekusu/'
  },
  {
    name: 'Salesforce',
    icon: salesforceLogo,
    link: 'https://www.salesforce.com/trailblazer/jaleksandra/'
  },
  {
    name: 'GitHub',
    icon: githubLogo,
    link: 'https://github.com/Alekususenpai/'
  },
]

export { technologies, experiences, projects, certifications, socialMedia };
