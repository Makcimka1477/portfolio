import css from "./Projects.module.scss";

import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ProjectsContext } from "../../../contexts/projectsContext";

import Title from "../ui/Title";

const Projects = () => {
  const { pathname } = useLocation();

  const projects = useContext(ProjectsContext);

  const projectItems = projects.map(({ id, name, url, stack }) => (
    <NavLink to={`${pathname}/${id}`} key={id} className={css.projectsLink}>
      <li className={css.projectsItem}>
        <img className={css.projectsImg} src={url} alt="project" />
        <div className={css.projectInfo}>
          <Title
            styles={{ fontSize: "1.4rem", color: "var(--main)" }}
            title={name}
            tagName={"h4"}
          />
          <p className={css.projectsStack}>{stack.join(" ")}</p>
        </div>
      </li>
    </NavLink>
  ));

  return (
    <div className={css.projects}>
      <Title styles={{ fontSize: "2rem" }} title="Projects" tagName="h2" />
      <div className={css.wrapper}>
        <ul className={css.projectsList}>{projectItems}</ul>
        <footer className={css.moreProjects}>
          <p className={css.moreProjectText}>GitHub page You can find here</p>
          <div className={css.projectsLinks}>
            <a
              className={css.link}
              href="https://github.com/Makcimka1477"
              target="_blank"
              title="link"
            >
              <img
                className={css.logo}
                src="/src/assets/github-logo.png"
                alt="github-logo"
              />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Projects;
