import type { Variants } from "framer-motion";

//default - animation//
export const InToView = (delay: number, duration: number): Variants => ({
    initial: {
        opacity: 0,
        transform: "translateY(50px)",
    },
    animate: {
        opacity: 1,
        transform: "translateY(0px)",
        transition: {
            delay: delay * 0.1,
            duration: duration,
            ease: [0.4, 0, 0.2, 1],
        },
    },
});

export const LetterSpacing = (delay: number, duration: number): Variants => ({
    initial: {
        opacity: 0,
        letterSpacing: "100px",
    },
    animate: {
        opacity: 1,
        letterSpacing: "10px",
        transition: {
            delay: delay * 0.1,
            duration: duration,
            ease: [0, 0, 0, 1],
        },
    },
});

export const FadeInItem = (delay: number, duration: number): Variants => ({
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: delay * 0.1,
            duration: duration,
            ease: [0.4, 0, 0.2, 1],
        },
    },
});

//header - Animation//
export const HeaderItem = (key: number): Variants => ({
    initial: {
        opacity: 0,
        transform: "translateY(10px)",
    },
    animate: {
        opacity: 1,
        transform: "translateY(0px)",
        transition: {
            delay: 0.25 * key,
            ease: [0.4, 0, 0.2, 1],
        },
    },
});

//projects - animation//
export const ProjectsVisibleHidden: Variants = {
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

export const ProjectsGrow: Variants = {
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
