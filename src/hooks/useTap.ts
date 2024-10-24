import gsap from "gsap";

export const useTap = (ref: React.RefObject<HTMLDivElement>) => {
  const handleMouseDown = () => {
    gsap.to(ref.current, {
      scale: 0.9, // Similar a "whileTap" de Framer Motion
      duration: 0.2,
      ease: "power2.out", // Transición más rápida
    });
  };

  const handleMouseUp = () => {
    gsap.to(ref.current, {
      scale: 1.05, // Vuelve a "whileHover" cuando se deja de hacer clic
      duration: 0.2,
      ease: "power2.out",
    });
  };
  return { handleMouseDown, handleMouseUp };
};
