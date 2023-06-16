import { useState } from "react";
import { motion } from "framer-motion";
import config from "@/lib/Config.json";
import { InToView } from "@/lib";

export const Skills = () => {
    const [enabled, setEnabled] = useState(false);
    const [view, setView] = useState(false);

    return (
        <section id="skills" className="skills-container item">
            <div className="skills-wrapper">
                <div>
                    <p className="title">skills</p>
                    <h1 className="title main">What can I do?</h1>
                </div>
                <div className="skills-skills">
                    <div className="skills-technicalSkillsBox">
                        {config.skills.Technical.map((data, key) => (
                            <div key={key}>
                                <div>
                                    <h1>{data.item}</h1>
                                    <p>{data.percentage}</p>
                                </div>
                                <div>
                                    <motion.a
                                        onHoverStart={() => setEnabled(true)}
                                        onViewportEnter={() => setView(true)}
                                        viewport={{
                                            once: true,
                                            amount: 0.8,
                                        }}
                                        style={{
                                            width: view ? data.percentage : 0,
                                            transition: enabled
                                                ? ""
                                                : "all 1s cubic-bezier(0.7, 0, 0.3, 1)",
                                            opacity: view ? 1 : 0,
                                        }}></motion.a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="skills-professionalSkillsBox">
                        {config.skills.Professional.map((data, key) => (
                            <div key={key}>
                                <div>
                                    <h1>{data.item}</h1>
                                </div>
                                <div>
                                    <a
                                        style={{
                                            background: `conic-gradient(#689af8 ${data.percentage}, #000 0deg)`,
                                            transition: enabled
                                                ? ""
                                                : "all 1s cubic-bezier(0.7, 0, 0.3, 1)",
                                            opacity: view ? 1 : 0,
                                        }}>
                                        <p>{data.percentage}</p>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
