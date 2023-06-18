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
                    className="about-hobby"
                    viewport={{
                        once: true,
                        amount: 0.1,
                    }}
                    variants={InToView(0, 1)}
                    initial="initial"
                    whileInView={"animate"}>
                    <p className="title">My Hobby&apos;s</p>
                    <h1 className="title main">
                        Programming,
                        <br />
                        Playing sports &
                        <br />
                        Gaming
                    </h1>
                    <div>
                        {config.socials.map((data, key) => (
                            <a href={data.link} key={key}>
                                <i className={`${data.icon} button`}></i>
                            </a>
                        ))}
                    </div>
                    <p className="about-quote">
                        A random quote: <i>&quot;{config.about.quotes[randomNumber].quote}&quot;</i>
                    </p>
                </motion.div>
                <motion.p
                    className="about-info"
                    viewport={{
                        once: true,
                        amount: 0.1,
                    }}
                    variants={InToView(1, 1)}
                    initial="initial"
                    whileInView={"animate"}>
                    Hi, I am Job. A {age.toPrecision(9)} ... year-old programmer from the
                    Netherlands. Who knew making poorly programmed roblox games would get me this
                    far. Maybe all the tutorials and the help from my brother brought me to this
                    point. maybe something else. I don&apos;t know, but does it really matter? What
                    happens, happens, you will just need to try to find your way around it. I quess
                    tutorials and my brothers help brought me to this point.
                    <br />
                    <br />
                    One of my hobby&apos;s is obviously programming, but besides that I also love to
                    play sports, like hockey, or train my body. I play hockey three times a week.
                    Now I play in a pretty high team, but at the start of 2023 that wasn&apos;t the
                    case but I managed to switch team mid-season to a team that suits me better. I
                    try to stay in shape, playing hockey does the job for the most part, but I also
                    do workouts. For now my workouts are just pushups, crunches and pullups. The
                    typical &quot;home&quot; workout, but maybe that will change.
                    <br />
                    <br />
                    Gaming, a big part in my life. Nothing is better to open a game after a long day
                    and just have fun with the boys. I play all kinds of games, from story games to
                    battle royales. Uncharted is one of my favorites. I&apos;m currently working on
                    a game. I don&apos;t know if I&apos;m going to finnish it, but i&apos;ll try.
                </motion.p>
            </div>
        </section>
    );
};
