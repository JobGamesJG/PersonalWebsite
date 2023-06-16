import { LandingItemAnimations } from "@/lib";
import { motion } from "framer-motion";

export const Landing = () => {
    return (
        <section id="landing" className="landing-container">
            <motion.img
                variants={LandingItemAnimations(0)}
                initial="initial"
                animate="animate"
                src="https://cdn.jobgamesjg.xyz/files/ProfilePictureEdited.png"
                alt=""
            />
            <div className="landing-textbox">
                <h1>Job Klarenbeek</h1>
                <p>Web Developer</p>
            </div>
            <i className="fa-solid fa-chevron-down"></i>
        </section>
    );
};
