import React, { useState } from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectsRow}>
        {projects.map((project, idx) => (
          <div key={idx} className={styles.projectSectionH}>
            <button
              className={styles.projectToggleH}
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
            >
              {project.title}
            </button>
            {openIndex === idx && (
              <div className={styles.projectContentH}>
                <ProjectCard project={project} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
