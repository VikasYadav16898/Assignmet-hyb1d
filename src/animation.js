export const navAnimation = {
  hidden: {
    y: -100,
  },
  show: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const popAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const popAnimationWrapper = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const pageRevealAnimation = {
  hidden: {
    y: 2,
  },
  show: {
    y: 1,
    transition: {
      duration: 1,
    },
  },
};

export const loadingAnimation = {
  hidden: {
    y: -30,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
      type: "spring",
    },
  },
};
