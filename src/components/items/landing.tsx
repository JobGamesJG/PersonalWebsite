import { FadeInItem, LetterSpacing } from "@/lib";
import { motion } from "framer-motion";

export const Landing = () => {
    return (
        <section id="landing" className="landing-container">
            <motion.img
                variants={FadeInItem(5, 1)}
                initial="initial"
                animate="animate"
                src="https://cdn.jobgamesjg.xyz/files/ProfilePictureEdited.png"
                alt=""
            />
            <div className="landing-textbox">
                <motion.h1 variants={LetterSpacing(7, 1.5)} initial="initial" animate="animate">
                    Job Klarenbeek
                </motion.h1>
                <motion.p variants={LetterSpacing(8, 1.5)} initial="initial" animate="animate">
                    Web Developer
                </motion.p>
            </div>
            <i className="fa-solid fa-chevron-down"></i>
        </section>
    );
};
