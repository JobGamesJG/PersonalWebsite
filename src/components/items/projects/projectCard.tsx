import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

import { ProjectsVisibleHidden, ProjectsGrow, InToView } from "@/lib";

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
                    variants={ProjectsVisibleHidden}
                    initial="disabled">
                    <motion.div
                        className={`modal ${props.video != null ? "long" : ""}`}
                        animate={control}
                        initial="disabled"
                        variants={ProjectsGrow}>
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
            <motion.div
                className={`projects-item ${active ? "active" : ""}`}
                onClick={() => setActive(!active)}
                viewport={{
                    once: true,
                    amount: 0.1,
                }}
                variants={InToView(props.number + 1, 1)}
                initial="initial"
                whileInView={"animate"}>
                <img src={props.image} alt="" />
                <div>
                    <div>
                        <h1>{props.title}</h1>
                    </div>
                    <p>{props.subTitle}</p>
                </div>
            </motion.div>
        </div>
    );
};
