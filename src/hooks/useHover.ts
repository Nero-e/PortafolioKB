import { gsap } from "gsap";

export const useHover = (ref: React.RefObject<HTMLDivElement>, isScale: boolean, setIsScale: React.Dispatch<React.SetStateAction<boolean>>) => {
  const handleMouseEnter = () => {
    if (!isScale) {
      gsap.to(ref.current, {
        scale: 1.05,
        duration: 0.3,
        ease: "power1",
      });
    }
  };

  const handleMouseLeave = () => {
    if (!isScale) {
      gsap.to(ref.current, {
        scale: 1,
        duration: 0.3,
        ease: "power1",
      });
    }
    setIsScale(false);
  };

  return { handleMouseEnter, handleMouseLeave };
};
