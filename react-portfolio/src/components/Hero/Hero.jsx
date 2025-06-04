import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Phatsakorn</h1>
                <p className={styles.description}>
                    Final-year Computer Engineering and Information Technology student specializing in UX/UI design. Proficient in Figma, with experience in real-world projects, including work with Central Group.
                </p>
                <a href="mailto:epsk.coin@gmail.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img
                src={getImageUrl("hero/heroImage2.png")}
                alt="Hero image of me"
                className={styles.heroImg}
            />
        </section>
    );
};