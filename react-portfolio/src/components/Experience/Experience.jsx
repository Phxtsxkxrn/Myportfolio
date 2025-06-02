import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
    // Group history items by organization
    const groupedHistory = history.reduce((acc, item) => {
        if (!acc[item.organisation]) {
            acc[item.organisation] = {
                organisation: item.organisation,
                imageSrc: item.imageSrc,
                roles: []
            };
        }
        acc[item.organisation].roles.push({
            role: item.role,
            startDate: item.startDate,
            endDate: item.endDate,
            experiences: item.experiences
        });
        return acc;
    }, {});

    return ( 
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                        <p>{skill.title}</p>
                        </div>
                        );
                    })}
                </div>
                <ul className={styles.history}>
                    {Object.values(groupedHistory).map((org, id) => (
                        <li key={id} className={styles.historyItem}>
                            <div className={styles.historyItemContent}>
                                <div className={styles.headerContainer}>
                                    <img
                                        src={getImageUrl(org.imageSrc)}
                                        alt={`${org.organisation} Logo`}
                                        className={styles.orgLogo}
                                    />
                                    <h3>{org.organisation}</h3>
                                </div>
                                <div className={styles.historyItemDetails}>
                                    {org.roles.map((role, roleId) => (
                                        <div key={roleId} className={styles.roleInfo}>
                                            <p>{role.role}</p>
                                            <p className={styles.duration}>{`${role.startDate} - ${role.endDate}`}</p>
                                            <ul>
                                                {role.experiences.map((experience, expId) => (
                                                    experience.endsWith(':') ? (
                                                        <h4 key={expId} className={styles.experienceHeader}>{experience}</h4>
                                                    ) : (
                                                        experience === "" ? (
                                                            <br key={expId} />
                                                        ) : (
                                                            <li key={expId}>{experience}</li>
                                                        )
                                                    )
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};