import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, source, video, picture },
  hideImage = false,
}) => {
  return (
    <div className={styles.container}>
      {!hideImage && (
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
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
          <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
            Source
          </a>
        )}
        {video && (
          <a href={video} className={styles.link} target="_blank" rel="noopener noreferrer">
            Video
          </a>
        )}
        {picture && (
          <a href={picture} className={styles.link} target="_blank" rel="noopener noreferrer">
            Picture
          </a>
        )}
      </div>
    </div>
  );
};