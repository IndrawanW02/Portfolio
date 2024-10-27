import "./ToolsTechSection.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import ToolsTechCard from "../ToolsTechCard/ToolsTechCard";

function ToolsTechSection() {
  return (
    <>
      <section id="ToolsTechSection">
        <div className="tool-tech-section">
          <SectionTitle
            title="Tools & Technologies"
            subtitle="The following are some of the tools and technologies I have experience working with."
          ></SectionTitle>
          <div className="tool-tech-container">
            <ToolsTechCard
              iconPath={"assets/icons/C.svg"}
              index={1}
            ></ToolsTechCard>
            <ToolsTechCard
              iconPath={"assets/icons/Java.svg"}
              index={2}
            ></ToolsTechCard>
            <ToolsTechCard
              iconPath={"assets/icons/Git.svg"}
              index={3}
            ></ToolsTechCard>
            <ToolsTechCard
              iconPath={"assets/icons/MySql.svg"}
              index={4}
            ></ToolsTechCard>
            <ToolsTechCard
              iconPath={"assets/icons/Html.svg"}
              index={5}
            ></ToolsTechCard>
            <ToolsTechCard
              iconPath={"assets/icons/Css.svg"}
              index={6}
            ></ToolsTechCard>
            <ToolsTechCard
              iconPath={"assets/icons/Javascript.svg"}
              index={7}
            ></ToolsTechCard>
            <ToolsTechCard
              iconPath={"assets/icons/React.svg"}
              index={8}
            ></ToolsTechCard>
          </div>
        </div>
      </section>
    </>
  );
}

export default ToolsTechSection;
