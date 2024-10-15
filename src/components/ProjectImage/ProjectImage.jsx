import { useState, useEffect, useRef } from "react";
import "./ProjectImage.css";

function ProjectImage({ selectedProject }) {
  // const projectThumbnail = {
  //   FootLockRe: ["../src/assets/pictures/FootLockRe_1.png"],
  //   Chantel: ["../src/assets/pictures/Chantel_1.png"],
  //   SANTARA: ["../src/assets/pictures/SANTARA_1.png"],
  //   MakeMeUpzz: ["../src/assets/pictures/MakeMeUpzz_1.png"],
  // };

  const scrollableRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(
    "src/assets/pictures/FootLockRe_1.png"
  );

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const resetScroll = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollLeft = 0;
    }
  };

  useEffect(() => {
    setSelectedImage(`src/assets/pictures/${selectedProject}_1.png`);
    resetScroll();
  }, [selectedProject]);

  return (
    <>
      <div className="image-container">
        <div className="gradient-border-pic">
          <div className="picture-display">
            <img src={selectedImage} alt="Thumbnail"></img>
          </div>
        </div>
        <div className="picture-nav" ref={scrollableRef}>
          {Array.from({ length: 5 }, (_, index) => {
            const imageUrl = `src/assets/pictures/${selectedProject}_${
              index + 1
            }.png`;
            return (
              <img
                key={index}
                src={imageUrl}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${
                  imageUrl === selectedImage ? "active" : ""
                }`}
                onClick={() => handleThumbnailClick(imageUrl)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProjectImage;
