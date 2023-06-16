import { LandingItemAnimation } from "@/lib";
import { motion } from "framer-motion";

export const Landing = () => {
    return (
        <section id="landing" className="landing-container">
            <motion.img
                variants={LandingItemAnimation(5)}
                initial="initial"
                animate="animate"
                src="https://cdn.jobgamesjg.xyz/files/ProfilePictureEdited.png"
                alt=""
            />
            <div className="landing-textbox">
                <motion.h1 variants={LandingItemAnimation(6)} initial="initial" animate="animate">
                    Job Klarenbeek
                </motion.h1>
                <motion.p variants={LandingItemAnimation(7)} initial="initial" animate="animate">
                    Web Developer
                </motion.p>
            </div>
            <i className="fa-solid fa-chevron-down"></i>
        </section>
    );
};
