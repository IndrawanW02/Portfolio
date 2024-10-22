import { useState } from "react";
import "./ProjectSection.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectNavigation from "../ProjectNavigation/ProjectNavigation";
import ProjectImage from "../ProjectImage/ProjectImage";
import ProjectDescription from "../ProjectDescription/ProjectDescription";

function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState("FootLockRe");

  return (
    <>
      <section id="ProjectSection">
        <div className="project-section">
          <SectionTitle title="Projects" subtitle="The following are some of the projects I have worked on."></SectionTitle>
          <div className="project-container">
            <div className="project-nav">
              <ProjectNavigation
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}></ProjectNavigation>
            </div>
            <div className="project-information">
              <div className="project-image-container">
                <ProjectImage selectedProject={selectedProject}></ProjectImage>
              </div>
              <div className="project-desc">
                <ProjectDescription selectedProject={selectedProject}></ProjectDescription>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectSection;
