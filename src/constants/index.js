import { paraseek, du, tech } from "../assets/images";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  village,
  weather,
  catalyst,
  restaurant,
  video,
  converso,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "MCA (Master of Computer Applications)",
    company_name: "MANIT Bhopal",
    icon: tech,
    iconBg: "#0ac6fa",
    date: "2024 - Present",
    points: [
      "Pursuing Master's degree in Computer Applications.",
      "Focusing on advanced computer science concepts and software development.",
      "Enhancing knowledge in system design, algorithms, and modern technologies.",
      "Participating in research and development activities.",
    ],
  },
  
  {
    title: "BSc Physical Science with Computer Science",
    company_name: "Delhi University",
    icon: du,
    iconBg: "#fff200",
    date: "2021 - 2024",
    points: [
      "Completed Bachelor's degree in Physical Science with specialization in Computer Science.",
      "Studied core computer science subjects including programming, data structures, and algorithms.",
      "Gained strong foundation in physics and mathematics alongside computer science.",
      "Participated in various technical workshops and coding competitions.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Sachinrodies",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/sachin-jha-b25a71174/",
  },
];

export const projects = [
  {
    iconUrl: converso,
    theme: "btn-back-teal",
    name: "Converso",
    description:
      "A modern SaaS application built with Next.js, TypeScript, and Clerk authentication. Features include user authentication, dashboard, and modern UI design with responsive layout and real-time functionality.",
    link: "https://saas-app-plum.vercel.app",
  },
  {
    iconUrl: video,
    theme: "btn-back-purple",
    name: "Clipart Short Video Generator",
    description:
      "An AI-powered video generation platform that creates engaging short videos from text prompts. Features include real-time video generation, customizable templates, and seamless dashboard for managing video projects.",
    link: "https://clipart-short-video-gen-ov2n.vercel.app/dashboard",
  },
  {
    iconUrl: catalyst,
    theme: "btn-back-blue",
    name: "Project Catalyst Club",
    description:
      "A modern web application built with React, TypeScript, and Vite, featuring a clean and responsive design powered by Tailwind CSS. Includes Supabase integration, markdown support, and real-time features.",
    link: "https://github.com/Sachinrodies/Project-catalyst-club",
  },
  {
    iconUrl: restaurant,
    theme: "btn-back-green",
    name: "Tastio",
    description:
      "A modern food ordering and delivery platform that connects food lovers with their favorite restaurants. Built with React, TypeScript, and Vite, featuring a seamless user experience for discovering and ordering food.",
    link: "https://github.com/Sachinrodies/Tastio-",
  },
  {
    iconUrl: village,
    theme: "btn-back-red",
    name: "Village Complaint Resolution System",
    description:
      "A comprehensive system designed to help villagers submit and track their complaints efficiently. Built with modern web technologies to ensure easy access and management of community issues.",
    link: "https://github.com/Sachinrodies/Village-Complaint-Resolution-system",
  },
  {
    iconUrl: weather,
    theme: "btn-back-yellow",
    name: "Real-time Weather App",
    description:
      "A real-time weather application that provides accurate weather information and forecasts. Features include current conditions, hourly forecasts, and location-based weather updates.",
    link: "https://github.com/Sachinrodies/Real-time-weather",
  },
];

export const blogs = [
  {
    name: "The Rise of Autonomous Dev Agents: The Future of Software Development",
    description:
      "Exploring how autonomous development agents are revolutionizing software development, from automated code generation to intelligent problem-solving. Discover how these AI-powered tools are reshaping the future of programming and what it means for developers.",
    link: "https://medium.com/@sahilrodies000/the-rise-of-autonomous-dev-agents-the-future-of-software-development-89bc2f7893fb",
  }
]