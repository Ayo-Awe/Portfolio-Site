import { useState } from "react";
import ProjectTray from "./ProjectTray";
import ProjectCard from "./ProjectCard";

export interface Project {
  id: number;
  githubUrl: string;
  publicUrl?: string;
  title: string;
  description: string;
  tools: string[];
  image: string;
}

interface Props {
  projects: Project[];
}

const ProjectDisplay = ({ projects }: Props) => {
  const [image, setImage] = useState();
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  function selectProject(project: Project) {
    setSelectedProject(project);
  }

  return (
    <div className="grid md:grid-cols-6 gap-8">
      <img
        src={selectedProject?.image}
        alt="image"
        className="col-span-4 rounded-lg"
      />
      <div className="col-span-2">
        {/* <ProjectTray>
          {projects.map((project) => (
            <ProjectCard
              {...project}
              onClick={() => setSelectedProject(project)}
              selectedProject={selectedProject}
            />
          ))}
        </ProjectTray> */}
      </div>
    </div>
  );
};

export default ProjectDisplay;
