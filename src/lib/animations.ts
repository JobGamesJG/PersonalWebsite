import type { Variants } from "framer-motion";

//default - animation//
export const InToView = (key: number): Variants => ({
    initial: {
        opacity: 0,
        transform: "translateY(40px)",
    },
    inView: {
        opacity: 1,
        transform: "translateY(0px)",
        transition: {
            duration: 1,
            delay: 0.05 * key,
            ease: [0.4, 0, 0.2, 1],
        },
    },
});

//header - Animation//
export const HeaderItemAnimation = (key: number): Variants => ({
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

//landing - animation//
export const LandingItemAnimation = (key: number): Variants => ({
    initial: {
        opacity: 0,
        transform: "translateY(50px)",
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

//404 - Animation//
export const PageNotFoundLetterSpacingAnimation: Variants = {
    initial: {
        opacity: 0,
        letterSpacing: "100px",
    },
    animate: {
        opacity: 1,
        letterSpacing: "10px",
        transition: {
            delay: 1.5,
            duration: 3,
            ease: [0, 0, 0, 1],
        },
    },
};
