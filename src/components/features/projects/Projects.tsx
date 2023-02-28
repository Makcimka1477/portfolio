import Title from "../ui/Title";
import css from "./Projects.module.scss";

const Projects = () => {
  const projectUrls: IProjects[] = [
    {
      id: "weather",
      name: "Weather App",
      url: "/src/assets/projects/projectWeather.png",
      link: "https://glistening-sprinkles-709332.netlify.app",
    },
    {
      id: "marvel",
      name: "Marvel App",
      url: "/src/assets/projects/projectMarvel.png",
      link: "https://github.com/Makcimka1477/marvelApi",
    },
    {
      id: "food",
      name: "Food Landing",
      url: "/src/assets/projects/projectFood.png",
      link: "https://github.com/Makcimka1477/foodProject",
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
}

export default Projects;
