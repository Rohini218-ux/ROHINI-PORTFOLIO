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
  {
    index: 1,
    title: "Movie Hunt",
    href: "/projects",
    tags: ["React js", "Vite", "Tailwindcss", "API", "Vercel"],
    image: {
      LIGHT: "/images/projects/moviehunt-light.png",
      DARK: "/images/projects/moviehunt-dark.png",
    },
  },
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
      "Regarding my project, I worked on a MERN stack-based Academic Resource Hub. It is similar to a classroom platform but includes additional features tailored for freshers...",
    sourceCodeHref: "https://github.com/Rohini218-ux/Academic-Resource-Hub",
    liveWebsiteHref: "",
  },

  {
    name: "Movie Hunt",
    favicon: "/images/projects/logos/movie.ico",
    imageUrl: [
      "/images/projects/moviehunt-1.png",
      "/images/projects/moviehunt-2.png",
      "/images/projects/moviehunt-3.png",
       "/images/projects/moviehunt-4.png",
    ],
    description:
      "Film Verse is a movie exploration platform for discovering movies developed a React-based movie discovery app that allows users to explore various categories of movies Utilized TMDB API for comprehensive movie details such as ratings, reviews, budget, and release date ",
    sourceCodeHref: "https://github.com/Rohini218-ux/Movie_Hunt",
    liveWebsiteHref: "https://movie-hunt.vercel.app",
  },
];
