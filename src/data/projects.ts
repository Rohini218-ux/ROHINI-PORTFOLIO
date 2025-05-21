import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Academic Resource Hub",
    href: "/projects",
    tags: ["React js", "Tailwindcss", "Node js", "Vercel", "MongoDB"],
    image: {
      LIGHT: "/images/projects/1.png",
      DARK: "/images/projects/2.png",
    },
  },
  // {
  //   index: 1,
  //   title: "Many Games",
  //   href: "/projects",
  //   tags: [
  //     "Reactjs",
  //     "Tailwindcss",
  //     "Scss",
  //     "Vite",
  //     "React-router-dom",
  //     "Redux",
  //     "Vercel",
  //   ],
  //   image: {
  //     LIGHT: "/images/projects/manyGamesLight.webp",
  //     DARK: "/images/projects/manyGamesDark.webp",
  //   },
  // },
  // {
  //   index: 2,
  //   title: "Kanban",
  //   href: "/projects",
  //   tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND"],
  //   image: {
  //     LIGHT: "/images/projects/kanbanLight.webp",
  //     DARK: "/images/projects/kanbanDark.webp",
  //   },
  // },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Academic Resource Hub (Mern Stack)",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/1.png",
      "/images/projects/2.png",
      "/images/projects/3.png",
      "/images/projects/4.png",
      "/images/projects/5.png",
    ],
    description:
      "Regarding my project, I worked on a MERN stack-based Academic Resource Hub. It is similar to a classroom platform but includes additional features tailored for freshers. The web application is designed to improve student access to academic resources at Kongu Engineering College. It ensures a secure, institution-specific login system, where only current students can access the platform using their kongu.edu email for authentication. The technologies used front end React.js and backend Node.js, Express.js, MongoDB.",
    sourceCodeHref: "https://github.com/Rohini218-ux/Academic-Resource-Hub",
    liveWebsiteHref: "",
  },
];
