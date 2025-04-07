"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

import { useAnima } from "@/src/hooks/useMainAnima";
import { useTypingEffect } from "@/src/hooks/useTypingEffect";
import { PrimaryButton } from "../Button";
// import Animation from "./Animation/Animation";
const Animation = dynamic(() => import("./Animation/Animation"), {
  ssr: false,
  loading: () =>  <div className="w-11 aspect-square rounded-full bg-seasalt-200 animate-pulse" />
})

export const MainSection = () => {

 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => setIsVisible(entry.isIntersecting),
    { threshold: 0.1 }
  );
  
  const element = document.querySelector('.spline-container');
  if (element) observer.observe(element);

  return () => observer.disconnect();
}, []);

  const greetings = useAnima();
  const name = useAnima({ delay: 0.5 });
  const paragraph = useAnima({ delay: 0.6 });
  const content = useAnima({ delay: 0.8, y: -20 });
  const button = useAnima({ delay: 2.2, y: 50 });

  const paragrah1 = useTypingEffect(
    "✨ Desarrollador Frontend especializado en React & Next.js",
    { speed: 0.02, delay: 0.9 }
  );
  const paragrah2 = useTypingEffect(
    "💥 Experto en SQL y PL/SQL para la gestión de bases de datos",
    { speed: 0.02, delay: 2 }
  );
  const canvas = useAnima({ y: 0, delay: 0.5 });

  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden py-5 px-12 bg-seasalt">
      <div className="relative flex flex-col w-full font-satoshi text-left  max-w-[1400px] z-20 duration-500 leading-none">
        <p ref={greetings} className="text-2xl/3xl font-bold text-tekgelet">
          👋 ¡Hola!, Soy-
        </p>
        <h1 ref={name} className="text-6xl/9xl font-bold text-night">
          Kevin Espitia.
        </h1>
        <p
          ref={paragraph}
          className="text-xl/3xl font-semibold md:w-[60%] text-night mt-5  whitespace-pre-wrap"
        >
          Desarrollador de Software.{" "}
          <span className="font-normal text-[#8f9094]">
            Autodidacta con interés en la programación
          </span>
        </p>
        <div
          ref={content}
          className="text-lg/xl text-[#8f9094] my-8 space-y-2 font-satoshiItalic"
        >
          <p ref={paragrah1} />
          <p ref={paragrah2} />
        </div>
        <div
          ref={button}
          className="flex justify-center md:justify-start space-x-4 mt-4 font-satochi"
        >
          <PrimaryButton
            href="https://www.linkedin.com/in/kespitia"
            text="LinkedIn"
          />
          <PrimaryButton
            href="/pdf/Curriculum.pdf"
            text="Cv"
            download="Curriculum.pdf"
          />
        </div>
      </div>
      <div
        ref={canvas}
        className="absolute flex justify-center items-center aspect-square w-[400px] bottom-[80%] md:bottom-auto md:left-[65%] xl:left-[60%] spline-container"
      >
        {isVisible && <Animation />}
      </div>
    </section>
  );
};
