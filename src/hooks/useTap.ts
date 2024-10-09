export const useTap = () => {
  const tap = {
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    whileTap: { scale: 0.9, transition: { duration: 0.2, ease: 'easeOut' } },
  };

  return { tap };
};
