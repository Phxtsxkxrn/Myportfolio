import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Phatsakorn</h1>
                <p className={styles.description}>
                    I'm a 4th-year Computer Engineering and Information Technology student at Kasetsart University,
                    currently interning as part of a cooperative education program.
                    Feel free to reach out if you'd like to connect or learn more!
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