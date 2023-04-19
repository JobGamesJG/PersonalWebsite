import type { Variants } from "framer-motion";

//Projects - Animation//
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
      ease: [0.7, 0, 0.3, 1],
    },
  },
});

//header - Animation//
export const HeaderItemAnimations = (key: number): Variants => ({
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

//Landing - Animation//
export const LandingItemAnimations: Variants = {
  initial: {
    opacity: 0,
    transform: "translateY(50px)",
  },
  animate: {
    opacity: 1,
    transform: "translateY(0px)",
    transition: {
      delay: 1,
      duration: 1,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const LandingButtonAnimations: Variants = {
  initial: {
    opacity: 0,
    transform: "translateY(50px)",
  },
  animate: {
    opacity: 1,
    transform: "translateY(0px)",
    transition: {
      delay: 1.25,
      duration: 1,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

//animeCard - Animation//

export const Modal: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const Background: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};
