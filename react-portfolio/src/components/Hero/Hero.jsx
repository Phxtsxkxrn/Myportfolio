import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Phatsakorn</h1>
                <p className={styles.description}>
                    Hi, I'm Phatsakorn — a final-year Computer Engineering and Information Technology student with a strong focus on UX/UI design.
I specialize in creating user-centered digital experiences using Figma and have hands-on experience from real-world projects, including collaborations with Central Group.
                </p>
                <a href="mailto:sing.phatsakorn@gmail.com" className={styles.contactBtn}>
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