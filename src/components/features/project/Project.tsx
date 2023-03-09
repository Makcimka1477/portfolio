import css from "./Project.module.scss";
import { useParams } from "react-router";
import { useContext } from "react";
import { IProject, ProjectsContext } from "../../../contexts/projectsContext";

import Title from "../ui/Title";

const Project = () => {
  const params: IParams = useParams();

  const projects = useContext(ProjectsContext);

  const project: IProject | any = projects.find((el) => el.id === params.id);

  return (
    <div className={css.project}>
      <div className={css.wrapper}>
        <Title
          styles={{
            fontSize: "1.8rem",
            color: "var(--secondary)",
            textAlign: "center",
          }}
          title={project.name}
          tagName={"h2"}
        />

        <figure className={css.projectInfo}>
          <a
            className={css.projectLink}
            href={project.link}
            target="_blank"
            title="link"
          >
            <img className={css.projectImg} src={project.url} alt="project" />
          </a>
          <figcaption className={css.projectStack}>
            {project.stack.join(" ")}
          </figcaption>
        </figure>

        <div className={css.projectLinks}>
          <a className={css.link} href={project.github}>
            <img
              className={css.logo}
              src="/src/assets/github-logo.png"
              alt="github-logo"
            />
          </a>
          <a
            className={css.link}
            href={project.link}
            target="_blank"
            title="link"
          >
            <img
              className={css.logo}
              src="/src/assets/netlify-logo.png"
              alt="netlify-logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

interface IParams {
  id: string;
}

export default Project;
