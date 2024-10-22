import "./SectionTitle.css";

function SectionTitle({ title, subtitle }) {
  return (
    <>
      <div className="section">
        <h1 className="section-title" data-title={title}>
          {title}
        </h1>
        <h2 className="sub-title">{subtitle}</h2>
      </div>
    </>
  );
}

export default SectionTitle;
