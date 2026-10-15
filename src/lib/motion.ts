import { type Transition, type Variants } from "framer-motion";

export const appleEase = [0.22, 1, 0.36, 1] as const;
export const gentleSpring = { type: "spring", stiffness: 260, damping: 25 } as const;
export const tightSpring = { type: "spring", stiffness: 400, damping: 30 } as const;

export const fadeInRise: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: appleEase,
    },
  },
};

export const staggerContainer = (staggerChildren = 0.06, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const wordMaskVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.65,
      ease: appleEase,
    },
  },
};

export const scaleUpCard: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: appleEase,
    },
  },
};

