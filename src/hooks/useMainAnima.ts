"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const useMainAnima = () => {
  const greetings = useRef<HTMLParagraphElement>(null);
  const name = useRef<HTMLHeadingElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const paragraph = useRef<HTMLParagraphElement>(null);
  const button = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const anima = gsap.timeline({ delay: 0.3 });

    anima
      .fromTo(
        greetings.current,
        { y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2" }
      )
      .fromTo(
        name.current,
        { y: -40 },
        { opacity: 1, y: 0, duration: 1, ease: "power2" },
        "-=0.8"
      )
      .fromTo(
        content.current,
        { y: -30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2" },
        "-=0.7"
      )
      .fromTo(
        paragraph.current,
        { y: -20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2" },
        "-=0.7"
      )
      .fromTo(
        button.current,
        { y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2" },
        "-=0.6"
      )
      .fromTo(
        canvas.current,
        { scale: 0.5, rotate: 90 },
        { opacity: 1, scale: 1, rotate: 0, duration: 2, ease: "power2" },
        ""
      );
    return () => anima.kill();
  }, []);

  return { greetings, name, content, paragraph, button, canvas };
};
