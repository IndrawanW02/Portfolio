import "./SectionTitle.css";

import RevealText from "../RevealAnimation/RevealText";

function SectionTitle({ title, subtitle }) {
  return (
    <>
      <div className="section">
        <RevealText delay={0.25}>
          <h1 className="section-title" data-title={title}>
            {title}
          </h1>
        </RevealText>
        <RevealText delay={0.3}>
          <h2 className="sub-title">{subtitle}</h2>
        </RevealText>
      </div>
    </>
  );
}

export default SectionTitle;
