import css from "./Projects.module.scss";

import marvel from "../../../assets/projects/projectMarvel.png";
import food from "../../../assets/projects/projectFood.png";
import weather from "../../../assets/projects/projectWeather.png";

import Title from "../ui/Title";

const Projects = () => {
  const projectUrls: IProjects[] = [
    {
      id: "weather",
      name: "Weather App",
      url: weather,
      github: "https://github.com/Makcimka1477/weatherApi",
      link: "https://weather-potfolio.netlify.app",
    },
    {
      id: "marvel",
      name: "Marvel App",
      url: marvel,
      link: "https://marvel-portfolio.netlify.app",
      github: "https://github.com/Makcimka1477/marvelApi",
    },
    {
      id: "food",
      name: "Food Landing",
      url: food,
      github: "https://github.com/Makcimka1477/foodProject",
      link: "",
    },
  ];

  const projectItems = projectUrls.map(({ id, name, url, link }) => (
    <a key={id} className={css.projectsLink} target="_blank" href={link}>
      <li className={css.projectsItem}>
        <img className={css.projectsImg} src={url} alt="project" />
        <p className={css.projectsText}>{name}</p>
      </li>
    </a>
  ));

  return (
    <div className={css.projects}>
      <Title fontSize="2rem" title="Projects" tagName="h2" />
      <div className={css.wrapper}>
        <ul className={css.projectsList}>{projectItems}</ul>
        <footer className={css.moreProjects}>
          My repository you can find{" "}
          <a
            className={css.githubLink}
            href="https://github.com/Makcimka1477"
            target="_blank"
          >
            here
          </a>
        </footer>
      </div>
    </div>
  );
};

interface IProjects {
  id: string;
  name: string;
  url: string;
  link: string;
  github: string;
}

export default Projects;
