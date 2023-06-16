import config from "../../../lib/Config.json";
import { ProjectCard } from "./projectCard";

export const Projects = () => {
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
