// hooks/useMainAnima.ts
"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const useMainAnima = () => {
  const greetings = useRef<HTMLParagraphElement>(null);
  const name = useRef<HTMLHeadingElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const paragraph = useRef<HTMLParagraphElement>(null);
  const button = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLDivElement>(null);

  const [isReady, setIsReady] = useState(false);

  useLayoutEffect(() => {
    setIsReady(true);

    if (isReady) {
      const anima = gsap.timeline();
      anima
        .fromTo(
          greetings.current,
          { y: -50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        )
        .fromTo(
          name.current,
          { y: -50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.8"
        )
        .fromTo(
          content.current,
          { y: -30 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.7"
        )
        .fromTo(
          paragraph.current,
          { y: -20 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.7"
        )
        .fromTo(
          button.current,
          { y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(
          canvas.current,
          { scale: 0.5, rotate: 90 },
          { opacity: 1, scale: 1, rotate: 0, duration: 2, ease: "power2.out" },
          ""
        );

      return () => {
        anima.kill();
      };
    }
  }, [isReady]);

  return { greetings, name, content, paragraph, button, canvas };
};
