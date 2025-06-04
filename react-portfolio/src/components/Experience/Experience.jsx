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
                <div className={styles.leftColumn}>
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
                    <div className={styles.figmaContainer}>
                        <h3 className={styles.figmaTitle}>My Design Work</h3>
                        <div className={styles.figmaFrame}>
                            <iframe 
                                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                                width="800"
                                height="450"
                                src="https://embed.figma.com/design/9GqjbBSsitHxXiGJwUEGWv/All-Work?node-id=0-1&embed-host=share"
                                allowFullScreen
                            />
                        </div>
                    </div>
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
                                            <div className={styles.roleTitle}>
                                                <p>{role.role}</p>
                                                {role.role === "UX/UI Support" && (
                                                    <div className={styles.roleSkills}>
                                                        <img 
                                                            src={getImageUrl("skills/figma.png")} 
                                                            alt="Figma"
                                                            className={styles.roleSkillIcon}
                                                        />
                                                        <img 
                                                            src={getImageUrl("skills/jira.png")} 
                                                            alt="Jira"
                                                            className={styles.roleSkillIcon}
                                                        />
                                                    </div>
                                                )}
                                                {role.role === "Webmasters Intern" && (
                                                    <div className={styles.roleSkills}>
                                                        <img 
                                                            src={getImageUrl("skills/html.png")} 
                                                            alt="HTML"
                                                            className={styles.roleSkillIcon}
                                                        />
                                                        <img 
                                                            src={getImageUrl("skills/css.png")} 
                                                            alt="CSS"
                                                            className={styles.roleSkillIcon}
                                                        />
                                                        <img 
                                                            src={getImageUrl("skills/javascript.png")} 
                                                            alt="JavaScript"
                                                            className={styles.roleSkillIcon}
                                                        />
                                                        <img 
                                                            src={getImageUrl("skills/bootstrap.png")} 
                                                            alt="Bootstrap"
                                                            className={styles.roleSkillIcon}
                                                        />
                                                        <img 
                                                            src={getImageUrl("skills/magento.png")} 
                                                            alt="Magento"
                                                            className={styles.roleSkillIcon}
                                                        />
                                                        <img 
                                                            src={getImageUrl("skills/algolia.png")} 
                                                            alt="Algolia"
                                                            className={styles.roleSkillIcon}
                                                        />
                                                    </div>
                                                )}
                                            </div>
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