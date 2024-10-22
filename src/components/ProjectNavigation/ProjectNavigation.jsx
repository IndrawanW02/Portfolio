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

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="dropdown">
        <div className={isOpen? "select open" : "select"} onClick={handleClick}>
          <span className="selected">{selectedProject}</span>
          <div className={isOpen ? "caret rotate" : "caret"}></div>
        </div>
        <ul className={isOpen? "project-sect-nav open" : "project-sect-nav"}>
          {projectList.map((projectName, index) => {
            return (
              <li
                key={index}
                className={`project ${
                  projectName === selectedProject ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedProject(projectName);
                  setIsOpen(!isOpen);
                }}
              >
                {projectName}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default ProjectNavigation;
