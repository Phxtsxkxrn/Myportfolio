import React, { useState, useEffect, useRef } from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, source, video, picture },
  hideImage = false,
}) => {
  const [showModal, setShowModal] = useState(false);
  const modalContentRef = useRef(null);

  // Array of images for Warehouse Management vertical scroll
  const warehouseImages = [
    "projects/Warehouse-Management-System-Simulation-All/Warehouse-management.png",
    // เพิ่ม path รูปอื่นๆ ได้ที่นี่
    // "projects/Warehouse-Management-System-Simulation-All/another-image.png",
  ];

  const handleImageClick = () => {
    if (title === "Warehouse Management") {
      setShowModal(true);
    }
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  const handleScrollTop = () => {
    if (modalContentRef.current) {
      modalContentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      {!hideImage && (
        <>
          <img
            src={getImageUrl(imageSrc)}
            alt={`Image of ${title}`}
            className={styles.image}
            style={title === "Warehouse Management" ? { cursor: "pointer" } : {}}
            onClick={handleImageClick}
          />
          {title === "Warehouse Management" && showModal && (
            <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
              <div
                className={styles.modalVerticalContent}
                ref={modalContentRef}
                onClick={(e) => {
                  // ถ้าคลิกที่ modalVerticalContent (พื้นที่นอกรูป) ให้ปิด modal
                  if (e.target === e.currentTarget) {
                    setShowModal(false);
                  }
                  e.stopPropagation();
                }}
              >
                <button
                  className={styles.closeButton}
                  onClick={() => setShowModal(false)}
                  style={{ top: 24, right: 32, fontSize: 32, width: 48, height: 48 }}
                >
                  ×
                </button>
                <div className={styles.verticalImagesWrapper}>
                  {warehouseImages.map((img, idx) => (
                    <img
                      key={idx}
                      src={getImageUrl(img)}
                      alt={`Warehouse Management Vertical ${idx + 1}`}
                      className={styles.modalVerticalImage}
                    />
                  ))}
                </div>
                <button
                  className={styles.scrollTopBtn}
                  onClick={handleScrollTop}
                  aria-label="Scroll to top"
                  type="button"
                  style={{ position: "fixed", bottom: 32, right: 32, top: "auto" }}
                >
                  ↑
                </button>
              </div>
            </div>
          )}
        </>
      )}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        {source && (
          <a
            href={source}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        )}
        {video && (
          <a
            href={video}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Video
          </a>
        )}
        {picture && (
          <a
            href={picture}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Picture
          </a>
        )}
      </div>
    </div>
  );
};