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
      stack: "html sass javascript reactjs redux",
      // link: "https://weather-potfolio.netlify.app",
      link: "",
    },
    {
      id: "marvel",
      name: "Marvel App",
      url: marvel,
      github: "https://github.com/Makcimka1477/marvelApi",
      stack: "html sass javascript reactjs",
      // link: "https://marvel-portfolio.netlify.app",
      link: "",
    },
    {
      id: "food",
      name: "Food Landing",
      url: food,
      github: "https://github.com/Makcimka1477/foodProject",
      stack: "html css javascript",
      link: "",
    },
    {
      id: "new",
      name: "new App",
      url: "new",
      github: "https://github.com/Makcimka1477/",
      stack: "html sass javascript reactjs redux",
      // link: "https://-portfolio.netlify.app",
      link: "",
    },
  ];

  const projectItems = projectUrls.map(({ id, name, url, link, stack }) => (
    <a key={id} className={css.projectsLink} target="_blank" href={link}>
      <li className={css.projectsItem}>
        <img className={css.projectsImg} src={url} alt="project" />
        <div className={css.projectInfo}>
          <Title
            styles={{ fontSize: "1.4rem", color: "var(--main)" }}
            title={name}
            tagName={"h4"}
          />
          <p className={css.projectsStack}>{stack}</p>
        </div>
      </li>
    </a>
  ));

  return (
    <div className={css.projects}>
      <Title styles={{ fontSize: "2rem" }} title="Projects" tagName="h2" />
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
  stack: string;
}

export default Projects;
