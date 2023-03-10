import css from "./Project.module.scss";
import { useParams } from "react-router";
import { useContext } from "react";
import { IProject, ProjectsContext } from "../../../contexts/projectsContext";

import Title from "../ui/Title/Title";
import MyLink from "../ui/MyLink/MyLink";

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
          <MyLink link={project.github} style={{ height: "60px" }}>
            <img
              className={css.logo}
              src="/src/assets/github-logo.png"
              alt="github-logo"
            />
          </MyLink>

          <MyLink link={project.hosting} style={{ height: "60px" }}>
            <img
              className={css.logo}
              src="/src/assets/netlify-logo.png"
              alt="netlify-logo"
            />
          </MyLink>
        </div>
      </div>
    </div>
  );
};

interface IParams {
  id: string;
}

export default Project;
