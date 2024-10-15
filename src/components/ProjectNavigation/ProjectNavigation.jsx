import { useState } from "react";
import "./ProjectNavigation.css";

function ProjectNavigation({ selectedProject, setSelectedProject }) {
  const projectList = [
    "FootLockRe",
    "Chantel",
    "SANTARA",
    "MakeMeUpzz",
    "Imaginary",
  ];

  return (
    <>
      <ul className="project-sect-nav">
        {projectList.map((projectName, index) => {
          return (
            <li
              key={index}
              className={`project ${
                projectName === selectedProject ? "active" : ""
              }`}
              onClick={() => setSelectedProject(projectName)}>
              {projectName}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ProjectNavigation;
