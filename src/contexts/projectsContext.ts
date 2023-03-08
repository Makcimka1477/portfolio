import { createContext } from "react";

import marvel from "../assets/projects/projectMarvel.png";
import food from "../assets/projects/projectFood.png";
import weather from "../assets/projects/projectWeather.png";

export const projects: IProjects[] = [
  {
    id: "weather",
    name: "Weather App",
    url: weather,
    github: "https://github.com/Makcimka1477/weatherApi",
    stack: "HTML SASS JavaScript ReactJS Redux",
    link: "https://weather-potfolio.netlify.app",
    // link: "",
  },
  {
    id: "marvel",
    name: "Marvel App",
    url: marvel,
    github: "https://github.com/Makcimka1477/marvelApi",
    stack: "HTML SASS JavaScript ReactJS",
    link: "https://marvel-portfolio.netlify.app",
    // link: "",
  },
  {
    id: "food",
    name: "Food Landing",
    url: food,
    github: "https://github.com/Makcimka1477/foodProject",
    stack: "HTML CSS SASS JavaScript",
    link: "",
  },
  {
    id: "new",
    name: "new App",
    url: "new",
    github: "https://github.com/Makcimka1477/",
    stack: "HTML SASS JavaScript ReactJS Redux",
    link: "https://portfolio.netlify.app",
    // link: "",
  },
];

export interface IProject {
  id: string;
  name: string;
  url: string;
  link: string;
  github: string;
  stack: string;
}

export const ProjectsContext = createContext(projects);
