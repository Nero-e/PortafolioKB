import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useFade = (ref: React.RefObject<HTMLDivElement>) => {
  useGSAP(() => {
    if (ref.current) {
      const animation = gsap.context(() => {
        gsap.from(ref.current, {
          opacity: 0,
          y:40,
          duration: 2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            end: "top: 50%",
            toggleActions: "play none none none",
            markers: false,
            once: true,
          },
          // onComplete: () => gsap.set(ref.current, { clearProps: "opacity,y" })

        });
      }, [ref]);

      return () => animation.revert();
    }
  }, [ref]);
};
