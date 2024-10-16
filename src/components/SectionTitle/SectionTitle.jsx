import "./SectionTitle.css";

function SectionTitle({ title }) {
  return (
    <>
      <h1 className="section-title" data-title={title}>
        {title}
      </h1>
    </>
  );
}

export default SectionTitle;
