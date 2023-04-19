import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { InToView, getAge } from "../../lib";

export const About = () => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setAge(getAge()), 1e2);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      viewport={{
        once: true,
        amount: 0.8,
      }}
      variants={InToView(0)}
      initial="initial"
      whileInView={"inView"}
      id="about"
      className="about-container item">
      <div className="about-wrapper">
        <div>
          <div className="about-skillsBox">
            <p>My Hobby&apos;s</p>
            <h1>
              Web Devolper,
              <br />
              Game Developer &
              <br />
              Hockey player
            </h1>
          </div>
          <div className="about-infobox">
            <p>
              Hi, I am Job. A {age.toPrecision(9)}
              ... year-old coder and anime lover from the Netherlands. Who knew making poorly
              programmed roblox games would get me this far. I quess tutorials and my brothers help
              brought me to this point.
              <br />
              Besides programming, I love playing games, field hockey and other sports. I have the
              best friends in the world. That is also why I like to spend time with them and with my
              family because that is the thing that makes me happy.
            </p>
          </div>
        </div>
        <p className="about-quote">
          One more thing before you go:{" "}
          <i>
            &quot;A battle doesn&apos;t end when the enemy has won, it ends when you give up.&quot;
          </i>
        </p>
      </div>
    </motion.section>
  );
};
