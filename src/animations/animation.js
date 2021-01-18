const animationConfig = {
  routingTime: 0.5,
  waveTime: 1,
  horizontalOffset: window.innerWidth / 5,
};
export const pageAnimation = {
  initial: {
    y: '50vh',
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: animationConfig.routingTime,
      ease: 'easeInOut',
      when: 'beforeChildren',
    },
  },
  exit: {
    y: '-50vh',
    opacity: 0,
    transition: {
      duration: animationConfig.routingTime,
      ease: 'easeInOut',
    },
  },
};
export const waveAnimation = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: animationConfig.waveTime,
      ease: 'easeInOut',
      delay: animationConfig.routingTime,
    },
  },
};

export const landingParentAnimation = {
  initial: {},
  animate: {
    transition: {
      duration: 0,
      when: 'beforeChildren',
      staggerChildren: 0.25,
      delayChildren: animationConfig.routingTime + animationConfig.waveTime,
    },
  },
};
export const textHorizontalAnimation = {
  initial: {
    opacity: 0,
    x: animationConfig.horizontalOffset,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
    },
  },
};
export const fadeInAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};
export const imgAnimation = {
  initial: {
    opacity: 0,
    scale: 2,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'circIn',
    },
  },
};
export const worksParentAnimation = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 1.5,
    },
  },
  exit: {},
};
export const layersParentAnimation = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};
export const layerAnimation = {
  initial: {
    x: '-200vw',
    skew: '45deg',
  },
  animate: {
    x: '100vw',
    skew: '0deg',
    transition: {
      duration: 1,
      ease: 'linear',
    },
  },
};
