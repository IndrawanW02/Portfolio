import "./ProjectDescription.css";

import RevealText from "../RevealAnimation/RevealText";

function ProjectDescription({ selectedProject }) {
  const projectDesc = {
    FootLockRe: [
      "FootLockRe is an individual project that was given in Human and Computer Interaction course. This was my very first project assignment especially in software development. In this project, i was given the task to make a website called “FootLockRe”, a fictional shoes company, by using HTML, CSS, and Javascript. The project requires me to make the website responsive throughout different media queries and must have a client-side validation within the registration page.",
    ],
    Chantel: [
      "Chantel is a group project that was given in Human and Computer Interaction course. We were given the task to make any type of website that requires to be responsive throughout different media queries. Our team chose to make a static gallery website for fashion product called CHANTEL (rip-off) The development of the website was built by using HTML, CSS, and Javascript through visual studio code. Our team works together on making the website with the help of live code editing extension from VS Code, which allows us to code realtime on the file.",
    ],
    SANTARA: [
      "SANTARA is the product from a final group project that was given in Software Engineering course. The project assignment outline was to develop a software (mobile or web) based on a sustainable Development Goals (SDG) for the theme. Our group decided to focus on “Decent Work and Economic Growth” SDG by developing a dedicated web-app for the local shoes market called SANTARA. We chose to develop the software by utilizing Visual Studio with ASP.NET as the framework. During the development, my main task was to develop the backend, but I was also heavily involved in designing and developing the frontend.",
    ],
    MakeMeUpzz: [
      "MakeMeUpzz is a group project that was given in Pattern Software Design course. The project assignment outline was to develop a web-app which focus on the back-end process. The fictional MakeMeUpzz company is a cosmetic company, we were tasked to make the product management system, a system that should be able to do CRUD operations, using Visual Studio with ASP.NET framework. From this project, I was also able to develop a basic understanding of session and cookies in website.",
    ],
    Imaginary: [
      "Imaginary is a web-app that should be able to provide images related to the search query that has been input with the help of a third-party API, this project is an independent project that I'm trying to work on to learn about the basic understanding of how APIs work and are used.",
    ],
  };

  const usedTools = {
    FootLockRe: ["Figma", "HTML", "CSS", "Javascript"],
    Chantel: ["Figma", "HTML", "CSS", "Javascript"],
    SANTARA: ["Figma", "ASP.NET", "C#", "Javascript", "CSS", "SQL"],
    MakeMeUpzz: ["ASP.NET", "C#", "SQL"],
    Imaginary: ["React.js", "Express.js"],
  };

  const githubProject = {
    FootLockRe: ["https://github.com/IndrawanW02/FootLockRE"],
    Chantel: ["https://github.com/IndrawanW02/CHANTEL"],
    SANTARA: ["https://github.com/IndrawanW02/SANTARA-Marketplace"],
    MakeMeUpzz: ["https://github.com/IndrawanW02/MakeMeUpzz_Group1"],
    Imaginary: ["https://github.com/IndrawanW02/Imaginary"],
  };

  return (
    <>
      <div className="productdesc-border-mask-1">
        <div className="productdesc-border-mask-2">
          <RevealText delay={0.25}>
            <div className="title-content">
              <h2 className="title">{selectedProject}</h2>
              <a
                href={githubProject[selectedProject]}
                target="_blank"
                className="github-redirect"
              >
                <img
                  src="assets/icons/github.svg"
                  className="github-logo"
                ></img>
              </a>
            </div>
            <div className="tools-set">
              {usedTools[selectedProject].map((tools, index) => {
                return (
                  <div key={index} className="tools-card">
                    {tools}
                  </div>
                );
              })}
            </div>

            <p className="desc">{projectDesc[selectedProject]}</p>
          </RevealText>
        </div>
      </div>
    </>
  );
}

export default ProjectDescription;
