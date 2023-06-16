import config from "../../../lib/Config.json";
import { motion } from "framer-motion";
import { InToView } from "../../../lib";
import { useState } from "react";
import { ProjectCard } from "./projectCard";

export const Projects = () => {
    const [active, setActive] = useState(false);

    return (
        <section id="projects" className="projects-container item">
            <div className="projects-wrapper">
                <div>
                    <p className="title">My Projects</p>
                    <h1 className="title main">What projects have I worked on?</h1>
                </div>
                <div className="projects">
                    {config.projects
                        .filter((x) => x)
                        .map((project, i) => (
                            <ProjectCard key={i} {...project} number={i + 1} />
                        ))}
                </div>
            </div>
        </section>
    );
};
