import css from "./Project.module.scss";
import { useParams } from "react-router";
import { useContext } from "react";
import { IProject, ProjectsContext } from "../../../contexts/projectsContext";

import Title from "../ui/Title";

const Project = () => {
  const params: IParams = useParams();

  // OVERFLOW HIDDEN
  console.log(params);
  const projects = useContext(ProjectsContext);

  const project: IProject = projects.find((el) => el.id === params.id);

  return (
    <div className={css.project}>
      <div className={css.wrapper}>
        <Title
          styles={{
            fontSize: "1.8rem",
            color: "var(--secondary)",
          }}
          title={project.name}
          tagName={"h2"}
        />
        <figure className={css.projectInfo}>
          <a className={css.projectLink} href={project.link} target="_blank">
            <img className={css.projectImg} src={project.url} alt="project" />
          </a>
          <figcaption className={css.projectStack}>{project.stack}</figcaption>
        </figure>

        <a className={css.githubLinkBtn}> GitHub repo</a>
      </div>
    </div>
  );
};

interface IParams {
  id: string;
}

export default Project;
