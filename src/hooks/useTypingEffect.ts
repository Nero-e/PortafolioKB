"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type TypingOptions = {
  speed?: number;
  delay?: number;
};

export const useTypingEffect = (text: string, options?: TypingOptions) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const animationId = useRef<gsap.core.Tween | null>(null);

  const { speed = 0.1, delay = 0 } = options || {};

  useEffect(() => {
    if (!textRef.current) return;

    if (animationId.current) animationId.current.kill();

    textRef.current.textContent = '';
    let currentIndex = 0;
    const chars = text.split('');

    const typeNextChar = () => {
        if (currentIndex < chars.length && textRef.current) {
          textRef.current.textContent += chars[currentIndex];
          currentIndex++;
          animationId.current = gsap.delayedCall(speed, typeNextChar);
        }
      };
      
    animationId.current = gsap.delayedCall(delay, typeNextChar);

    return () => gsap.killTweensOf(textRef.current);
  }, [text, speed, delay]);
    return textRef;

};
