import "./ToolsTechCard.css";

import RevealCard from "../RevealAnimation/RevealCard";

function ToolsTechCard({ iconPath, index }) {
  return (
    <>
      <RevealCard index={index}>
        <div className="gradient-border-mask">
          <div className="card-container">
            <img className="logo" src={iconPath}></img>
          </div>
        </div>
      </RevealCard>
    </>
  );
}

export default ToolsTechCard;
