import { useRef } from "react";
import { useInView } from "framer-motion";

export const useFade = () => {
  const targeRef = useRef(null);
  const isInView = useInView(targeRef, { once: true });

  const fade = {
    initial: { opacity: 0, scale: 0.5},
    animate: isInView ? { opacity: 1, scale: 1 } : {},
    transition: { duration: 0.5, opacity: { duration: 0.5 } },
  };

  return { targeRef, fade };
};
