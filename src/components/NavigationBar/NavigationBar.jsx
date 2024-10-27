import "./NavigationBar.css";

import RevealText from "../RevealAnimation/RevealText";

function NavigationBar() {
  return (
    <RevealText delay={0.25}>
      <nav>
        <div>
          <h1 className="portofolio-title">INDRA.</h1>
        </div>
        <ul className="navigation">
          <a href="#ToolsTechSection">Tools & Technology</a>
          <a href="#ProjectSection">Project</a>
          {/* <a href="#Contact">Contact</a> */}
        </ul>
      </nav>
    </RevealText>
  );
}

export default NavigationBar;
