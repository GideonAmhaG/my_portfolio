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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Game Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
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
    title: "Game Developer",
    company_name: "Efuye Gela Technology Events and Consultancy PLC",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jun 2024 - Current",
    points: [
      "Currently developing Weze, a visual story game designed to educate players about workplace dynamics and challenges..",
    ],
  },
  {
    title: "Front-End Engineer and Game Developer",
    company_name: "Phaedrus Studios",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Current",
    points: [
      "Developed and maintained web applications (including this portfolio website) using React.js and other related technologies.",
      "Founded and led geotechapps (CEO), a web application suite empowering geotechnical engineers to automate foundation design processes. This user-friendly platform simplifies complex calculations with just a few clicks, saving engineers valuable time and resources.",
      "Developed and deployed Puppy Hero, an award-winning JavaScript 2D endless runner game playable on any web browser. This engaging game showcases programming skills and creativity in game design.",
    ],
  },
  {
    title: "Lecturer",
    company_name: "Addis Ababa University",
    icon: tesla,
    iconBg: "#383E56",
    date: "Sep 2017 - Current",
    points: [
      "Authored the research paper - Finite Element Based Investigation of Belled Piers in Expansive Soils, published in the prestigious Computational Engineering and Physical Modeling journal. This research contributed valuable insights into the behavior of belled piers, which can improve foundation design practices, potentially saving construction companies millions of dollars in material and labor costs.",
      "Contributed to the Ethiopian Road Authority (ERA) landslide research project, a critical initiative aimed at saving millions of dollars in potential damages by mitigating landslide risks along Ethiopia's transportation corridors. Played a key role in analyzing soil data and geotechnical conditions to assess landslide risk. This work helped identify potential hazards and inform mitigation strategies, ultimately contributing to safer and more resilient infrastructure.",
      "Guided and mentored eleven teams of BSc students in completing their theses focused on automation in Civil Engineering. These projects, including foundation design software, aimed to significantly reduce workload within the field.",
      "Contributed to the success of the annual Ethiopian Association of Civil Engineers Conference by advising a student team whose thesis research on foundation design software was presented at the event.",
      "Delivered engaging lectures to classes of up to 100 students.",
      "Played a vital role in coordinating courses for up to 700 students, ensuring smooth operation with a team of up to 7 instructors.",
      "Supported faculty development by collaborating with instructors on lesson plan creation, monitoring progress against the plans, and facilitating fair and consistent student assessments.",
    ],
  },
  {
    title: "Assistant Lecturer",
    company_name: "Addis Ababa University",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jul 2013 - Sep 2017",
    points: [
      "Prepared postgraduate entrance exam materials for the Ethiopian Road Authority and Ministry of Education. This work equipped students with the knowledge and skills necessary to succeed in their applications for advanced engineering studies.",
      "Educated and managed classes of up to 80 students, fostering a positive learning environment while developing and implementing effective assessment mechanisms such as assignments and exams.",
      "Provided ongoing mentorship and guidance to students involved in internship programs and other engineering projects, supporting their professional development and ensuring successful project outcomes.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
