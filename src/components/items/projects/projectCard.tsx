import { motion, AnimatePresence, useAnimation, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const variants2: Variants = {
    disabled: {
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
    enabled: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};

const variants3: Variants = {
    disabled: {
        opacity: 0,
        scale: 0.8,
        transition: {
            duration: 0.3,
            delay: 0.05,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
    enabled: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
            delay: 0.05,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};

export const ProjectCard = (props: any) => {
    const [active, setActive] = useState(false);
    const control = useAnimation();

    useEffect(() => {
        if (active) void control.start("enabled");
        else void control.start("disabled");
    }, [control, active]);

    return (
        <div className="projects-item-container">
            {active && (
                <motion.div
                    className={`modal-container ${active ? "active" : ""}`}
                    animate={control}
                    variants={variants2}
                    initial="disabled">
                    <motion.div
                        className="modal"
                        animate={control}
                        initial="disabled"
                        variants={variants3}>
                        <div className="modal-header">
                            <p className="title">{props.title}</p>
                            <a
                                className="button icon"
                                onClick={() => [
                                    control.start("disabled"),
                                    setTimeout(() => setActive(!active), 200),
                                ]}>
                                <i className="fas fa-times"></i>
                            </a>
                        </div>
                        <div className="modal-info">
                            {props.video == null && <img src={props.image} alt="" />}
                            <p>{props.description}</p>
                            {props.video != null &&
                                props.video
                                    .filter((x: any) => x)
                                    .map((video: any, i: number) => (
                                        <div
                                            key={i}
                                            className="modal-video"
                                            onClick={() =>
                                                window.open(
                                                    `https://www.youtube.com/watch?v=${video.vidID}`,
                                                )
                                            }>
                                            <img
                                                src={`https://i3.ytimg.com/vi/${video.vidID}/maxresdefault.jpg`}
                                                alt=""
                                            />
                                            <div>
                                                <h1>{video.title}</h1>
                                                <p>{props.title}</p>
                                            </div>
                                        </div>
                                    ))}

                            <div className="modal-buttons">
                                {props.buttons.map((data: any, key: number) => (
                                    <a key={key} onClick={() => window.open(data.link)}>
                                        <i className={`${data.icon} button`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
            <div
                className={`projects-item ${active ? "active" : ""}`}
                onClick={() => setActive(!active)}>
                <img src={props.image} alt="" />
                <div>
                    <div>
                        <h1>{props.title}</h1>
                    </div>
                    <p>{props.subTitle}</p>
                </div>
            </div>
        </div>
    );
};
