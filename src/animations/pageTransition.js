export const pageTransition = {
  initial: {
    opacity: 0,
    y: 30,
  },

  animate: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
    },
  },

  exit: {
    opacity: 0,
    y: -30,

    transition: {
      duration: 0.4,
    },
  },
};