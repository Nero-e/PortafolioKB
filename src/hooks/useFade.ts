import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useFade = (ref: React.RefObject<HTMLDivElement>) => {
  useGSAP(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 100%",
            end: "bottom 90%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }
  }, [ref]);
};
