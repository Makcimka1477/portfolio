import { createContext } from "react";

import marvel from "../assets/projects/projectMarvel.png";
import food from "../assets/projects/projectFood.png";
import weather from "../assets/projects/projectWeather.png";

export const projects: IProject[] = [
  {
    id: "weather",
    name: "Weather App",
    url: weather,
    github: "https://github.com/Makcimka1477/weather.git",
    stack: ["HTML", "SASS", "JavaScript", "ReactJS", "Redux"],
    hosting: "https://weather-m-i-portfolio.netlify.app",
    apis: ["Weather Api", "2gis MapGL Api", "DaData Api"],
  },
  {
    id: "marvel",
    name: "Marvel App",
    url: marvel,
    github: "https://github.com/Makcimka1477/marvelApi.git",
    stack: ["HTML", "SASS", "JavaScript", "ReactJS"],

    hosting: "https://marvel-portfolio.netlify.app",
    apis: ["https://developer.marvel.com/"],
  },
  {
    id: "food",
    name: "Food Landing",
    url: food,
    github: "https://github.com/Makcimka1477/foodProject.git",
    stack: ["HTML", "CSS", "JavaScript"],
    hosting: "food-portfolio.netlify.app",
    apis: [],
  },
  {
    id: "new",
    name: "new App",
    url: "new",
    github: "https://github.com/Makcimka1477/",
    stack: ["HTML", "SASS", "JavaScript", "ReactJS", "Redux"],
    hosting: "https://portfolio.netlify.app",
    apis: [],
  },
];

export interface IProject {
  id: string;
  name: string;
  url: string;
  hosting: string;
  github: string;
  stack: string[];
  apis: string[];
}

export const ProjectsContext = createContext(projects);
