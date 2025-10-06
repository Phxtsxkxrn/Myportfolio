import React, { useState, useEffect, useRef } from "react";

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

    const [showDesignPopup, setShowDesignPopup] = useState(false);
    const [popupImage, setPopupImage] = useState(""); // เพิ่ม state สำหรับรูป popup
    const popupContentRef = useRef(null);

    // Prevent background scroll when popup is open
    useEffect(() => {
        if (showDesignPopup) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [showDesignPopup]);

    // Scroll to top function for popup
    const handleScrollTop = () => {
        if (popupContentRef.current) {
            popupContentRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

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
                    <h3 className={styles.myDesignTitle}>My Design</h3>
                    <div className={styles.myDesignSection}>
                        <div className={styles.myDesignGroup}>
                            <div className={styles.myDesignGroupTitle}>Official Designs</div>
                            <div className={styles.myDesignRow}>
                                <div className={styles.myDesignItem}>
                                    <img
                                        src={getImageUrl("mydesign/Main-Faqs.png")}
                                        alt="My Design Cover"
                                        className={styles.myDesignCover}
                                        onClick={() => {
                                            setPopupImage("mydesign/Faqs.webp");
                                            setShowDesignPopup(true);
                                        }}
                                        style={{ cursor: "pointer" }}
                                    />
                                    <div className={styles.myDesignWorkName}>Central FAQ Redesign</div>
                                </div>
                                <div className={styles.myDesignItem}>
                                    <img
                                        src={getImageUrl("mydesign/Main-Store.png")}
                                        alt="My Design Cover 2"
                                        className={styles.myDesignCover}
                                        onClick={() => {
                                            setPopupImage("mydesign/Store.webp");
                                            setShowDesignPopup(true);
                                        }}
                                        style={{ cursor: "pointer" }}
                                    />
                                    <div className={styles.myDesignWorkName}>Store Page Redesign</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.myDesignGroup}>
                            <div className={styles.myDesignGroupTitle}>Portfolio Design</div>
                            {/* ตัวอย่างผลงานที่ไม่ใช่ official */}
                            <div className={styles.myDesignItem}>
                                <img
                                    src={getImageUrl("mydesign/Main-Uniqlo.png")}
                                    alt="Portfolio Design Cover"
                                    className={styles.myDesignCover}
                                    onClick={() => {
                                        setPopupImage("mydesign/Uniqlo.webp");
                                        setShowDesignPopup(true);
                                    }}
                                    style={{ cursor: "pointer" }}
                                />
                                <div className={styles.myDesignWorkName}>App Uniqlo Redesigns</div>
                            </div>
                        </div>
                        {showDesignPopup && (
                            <div className={styles.popupOverlay} onClick={() => setShowDesignPopup(false)}>
                                <div
                                    className={styles.popupContent}
                                    ref={popupContentRef}
                                    onClick={e => e.stopPropagation()}
                                >
                                    <img
                                        src={getImageUrl(popupImage)}
                                        alt="My Design Large"
                                        className={styles.myDesignPopupImg}
                                    />
                                    <button className={styles.closeBtn} onClick={() => setShowDesignPopup(false)} aria-label="Close">
                                        &times;
                                    </button>
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
                                                        <img 
                                                            src={getImageUrl("skills/testrail.png")} 
                                                            alt="TestRail"
                                                            className={styles.roleSkillIcon}
                                                        />
                                                        <img 
                                                            src={getImageUrl("skills/algolia.png")} 
                                                            alt="Algolia"
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