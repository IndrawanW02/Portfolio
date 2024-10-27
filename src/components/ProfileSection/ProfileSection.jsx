import "./ProfileSection.css";

import RevealText from "../RevealAnimation/RevealText";
import RevealCard from "../RevealAnimation/RevealCard";

function ProfileSection() {
  return (
    <>
      <div className="profile-section">
        <div className="about-profile">
          <RevealText delay={0.4}>
            <h1 className="greeting">
              Hey, I'm <span className="profile-name">Indrawan Wijaya</span>
            </h1>
          </RevealText>

          <RevealText delay={0.45}>
            <p className="profile-desc">
              A Computer Science student at BINUS University, focusing on
              software engineering and mobile programming. I'm passionate to
              learn new technologies and am always eager to enhance both my
              technical and non-technical skills
            </p>
          </RevealText>
        </div>

        <RevealCard index={1}>
          <div className="profile-avatar-container">
            <div className="profile-image-container">
              <img
                className="profile-pic"
                src="assets/pictures/ProfilePicture.png"
                alt="Indrawan Wijaya"
              ></img>
            </div>
            <div className="background-layer"></div>
          </div>
        </RevealCard>
      </div>
    </>
  );
}

export default ProfileSection;
