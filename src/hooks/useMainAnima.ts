// hooks/useMainAnima.ts
"use client";

import {useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

type AnimationOptions = {
  y?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  ease?: string;
};

export const useAnima = (options?: AnimationOptions) => {

  const elementRef  = useRef<HTMLParagraphElement>(null);

  const {
    y = -50,
    opacity = 0,
    duration = 1,
    delay = 0.3,
    ease = 'power3.out'
  } = options || {};

  useLayoutEffect(() => {
    if (!elementRef.current) return;

    // Crear contexto de animación para limpieza automática
    const ctx = gsap.context(() => {

      // Ocultar inicialmente
      gsap.set(elementRef.current, { y, opacity });

      // Animación de entrada
      gsap.to(elementRef.current, {
        y: 0,
        opacity: 1,
        duration,
        ease,
        delay,
        willChange: 'transform, opacity'
      });
    }, elementRef);

    return () => ctx.revert(); // Limpieza
  }, [y, opacity, duration, delay, ease]);

  return elementRef ;
  
};
