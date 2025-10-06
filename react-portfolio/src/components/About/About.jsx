import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                    src={getImageUrl("about/aboutImage1.png")}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="Server icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>UX/UI Designer</h3>
                            <p>
                                Focused on crafting intuitive and visually engaging interfaces that elevate user experience across platforms.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                Skilled in building responsive, accessible, and performance-optimized websites using HTML, CSS, and JavaScript.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}