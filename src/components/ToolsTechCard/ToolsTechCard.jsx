import "./ToolsTechCard.css";

function ToolsTechCard({ iconPath }) {
  return (
    <>
      <div className="gradient-border-mask">
        <div className="card-container">
          <img className="logo" src={iconPath}></img>
        </div>
      </div>
    </>
  );
}

export default ToolsTechCard;
