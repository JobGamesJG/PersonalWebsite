import { useEffect, useState } from "react";
import { InToView, getAge } from "@/lib";
import { motion } from "framer-motion";
import config from "@/lib/Config.json";

export const About = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [age, setAge] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setAge(getAge()), 1e2);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * config.about.quotes.length));
  }, [randomNumber]);

  return (
    <section id="about" className="about-container item">
      <div className="about-wrapper">
        <motion.div
          className="about-skillsBox"
          viewport={{
            once: true,
            amount: 1,
          }}
          variants={InToView(0)}
          initial="initial"
          whileInView={"inView"}>
          <p className="title">My Hobby&apos;s</p>
          <h1 className="title main">
            Web Devolper,
            <br />
            Game Developer &
            <br />
            Hockey player
          </h1>
        </motion.div>
        <motion.p
          className="about-infoBox"
          viewport={{
            once: true,
            amount: 1,
          }}
          variants={InToView(1)}
          initial="initial"
          whileInView={"inView"}>
          Hi, I am Job. A {age.toPrecision(3)} ... year-old programmer from the Netherlands. Who
          knew making poorly programmed roblox games would get me this far. I quess tutorials and my
          brothers help brought me to this point.
          <br />
          Besides programming, I love playing games, field hockey and other sports. I have the best
          friends in the world. That is also why I like to spend time with them and with my family
          because that is the thing that makes me happy.
        </motion.p>
      </div>
      <motion.p
        className="about-quote"
        viewport={{
          once: true,
          amount: 1,
        }}
        variants={InToView(2)}
        initial="initial"
        whileInView={"inView"}>
        A quote for you: <i>&quot;{config.about.quotes[randomNumber].quote}&quot;</i>
      </motion.p>
    </section>
  );
};
