import { LandingButtonAnimations, LandingItemAnimations } from "../../lib";
import { motion } from "framer-motion";

export const Landing = () => {
  return (
    <section id="landing" className="landing-container item">
      <div className="landing-wrapper">
        <div className="landing-textbox">
          <h1>
            Web?
            <br />
            Developer
          </h1>
          <motion.p variants={LandingItemAnimations} initial="initial" animate="animate">
            Hello, it&apos;s me
          </motion.p>
          <motion.p variants={LandingItemAnimations} initial="initial" animate="animate">
            Job<i>.</i>
          </motion.p>
          <motion.a
            variants={LandingButtonAnimations}
            initial="initial"
            animate="animate"
            className="button border redirect text-decoration"
            href="#about">
            press for more info!
          </motion.a>
        </div>
      </div>
    </section>
  );
};
