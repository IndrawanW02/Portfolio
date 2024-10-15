import "./ToolsTechSection.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import ToolsTechCard from "../ToolsTechCard/ToolsTechCard";

function ToolsTechSection() {
  return (
    <>
      <section id="ToolsTechSection">
        <div className="tool-tech-section">
          <SectionTitle title="Tools & Technologies"></SectionTitle>
          <div className="tool-tech-container">
            <ToolsTechCard
              iconPath={"src/assets/icons/C.svg"}></ToolsTechCard>
            <ToolsTechCard
              iconPath={"src/assets/icons/Java.svg"}></ToolsTechCard>
            <ToolsTechCard
              iconPath={"src/assets/icons/Git.svg"}></ToolsTechCard>
            <ToolsTechCard
              iconPath={"src/assets/icons/MySql.svg"}></ToolsTechCard>
            <ToolsTechCard
              iconPath={"src/assets/icons/Html.svg"}></ToolsTechCard>
            <ToolsTechCard
              iconPath={"src/assets/icons/Css.svg"}></ToolsTechCard>
            <ToolsTechCard
              iconPath={"src/assets/icons/Javascript.svg"}></ToolsTechCard>
            <ToolsTechCard
              iconPath={"src/assets/icons/React.svg"}></ToolsTechCard>
          </div>
        </div>
      </section>
    </>
  );
}

export default ToolsTechSection;
