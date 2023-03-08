import { ProjectsContext, projects } from "../projectsContext";

const ProjectsProvider = ({ children }: IProps) => {
  return (
    <ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;

interface IProps {
  children: React.ReactNode;
}
