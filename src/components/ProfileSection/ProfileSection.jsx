import "./ProfileSection.css";

function ProfileSection() {
  return (
    <>
      <div className="profile-section">
        <div className="profile-desc">
          <h1>
            Hey, I'm <span>Indrawan Wijaya</span>
          </h1>
          <p>
            A Computer Science student at BINUS University, focusing on software
            engineering and mobile programming. I'm passionate to learn new
            technologies and am always eager to enhance both my technical and
            non-technical skills
          </p>
        </div>
        <div className="profile-avatar-container">
          <div className="profile-image-container">
            <img
              className="profile-pic"
              src="src/assets/pictures/ProfilePicture.png"
              alt="Indrawan Wijaya"></img>
          </div>
          <div className="background-layer"></div>
        </div>
      </div>
    </>
  );
}

export default ProfileSection;
