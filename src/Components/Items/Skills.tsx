import { useState } from "react";
import config from "../../lib/Config.json";
import { motion } from "framer-motion";
import { InToView } from "../../lib";

export const Skills = () => {
  const [enabled, setEnabled] = useState(false);
  const [view, setView] = useState(false);

  return (
    <motion.section
      id="skills"
      viewport={{
        once: true,
        amount: 0.8,
      }}
      variants={InToView(0)}
      initial="initial"
      whileInView={"inView"}
      className="skills-container item">
      <div className="skills-wrapper">
        <h1>
          My skills <i>#</i>
        </h1>
        <div className="skills">
          {config.skills.map((data, key) => (
            <div key={key}>
              <h1>{data.item}</h1>
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
                    transition: enabled ? "" : "all 1s cubic-bezier(0.7, 0, 0.3, 1)",
                  }}></motion.a>
                <p>{data.percentage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
