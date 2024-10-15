import "./NavigationBar.css";

function NavigationBar() {
  return (
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
  );
}

export default NavigationBar;
