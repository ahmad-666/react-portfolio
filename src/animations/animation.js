const ROUTING_TIME = 0.5;
const WAVE_TIME = 1;
const OFFSET_HORIZONTAL = window.innerWidth / 5;
const IMG_ANIMATION_TIME = 0.5;
const LAYER_TIME = 1.2;
const LAYER_STAGGER = LAYER_TIME / 5;
const WORKS_FADE_TIME = 0.65;
export const pageAnimation = {
  initial: {
    y: '50vh',
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: ROUTING_TIME,
      ease: 'easeInOut',
      staggerChildren: 0.25,
      delayChildren: ROUTING_TIME,
    },
  },
  exit: {
    y: '-50vh',
    opacity: 0,
    transition: {
      duration: ROUTING_TIME,
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
      duration: WAVE_TIME,
      ease: 'easeInOut',
    },
  },
};
export const landingTextParentAnimation = {
  initial: {},
  animate: {
    transition: {
      duration: 0,
      staggerChildren: 0.15,
      delayChildren: WAVE_TIME,
    },
  },
};
export const horizontalOffsetAnimation = {
  initial: {
    opacity: 0,
    x: OFFSET_HORIZONTAL,
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
export const descParentAnime = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: WAVE_TIME,
    },
  },
};
export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};
export const imgParentAnimation = {
  animate: {
    transition: {
      delayChildren: 0.75,
    },
  },
};
export const imgAnimation = {
  initial: {
    scale: 2,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: IMG_ANIMATION_TIME,
    },
  },
};
export const layersParentAnimation = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: LAYER_STAGGER,
      delayChildren: 0,
    },
  },
};
export const layerAnimation = {
  initial: {
    x: '-200vw',
    skew: '45deg',
  },
  animate: {
    x: '200vw',
    skew: '0deg',
    transition: {
      duration: LAYER_TIME,
      ease: 'linear',
    },
  },
};

export const faqAnimation = {
  initial: {
    opacity: 0,
    height: 0,
  },
  animate: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};
export const faqsAnimation = {
  initial: {
    opacity: 0,
    x: -OFFSET_HORIZONTAL,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export const worksParentAnimation = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: WORKS_FADE_TIME,
      delay: LAYER_TIME * 1.25,
    },
  },
};
export const workAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
export const lineAnimation = {
  initial: {
    originX: 'left',
    scaleX: 0,
  },
  animate: {
    scaleX: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};
export const blackFilterAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'linear',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'linear',
    },
  },
};
export const submitBtnAnimation = {
  initial: { scale: 1 },
  animate: {},
  whileHover: {
    scale: 1.2,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 1.5,
    },
  },
  whileTap: {
    scale: 0.6,
    transition: {
      duration: 0.3,
    },
  },
};
