"use client";
import dynamic from "next/dynamic";

// import { useMainAnima } from "@/src/hooks/useMainAnima";
import { PrimaryButton } from "../Button";
import CirucleLoader from "../Loaders/CirculeLoader";
const LazySplineAnima = dynamic(() => import("./Animation/Animation"), {
  ssr: false,
  loading: () => <CirucleLoader />
});

export const MainSection = () => {
  // const { greetings, name, content, paragraph, button, canvas } = useMainAnima();


  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden py-5 px-12 bg-seasalt">
      <div className="relative flex flex-col w-full font-satoshi text-left  max-w-[1400px] z-20 duration-500 leading-none">
        <p
          // ref={greetings}
          className="text-2xl/3xl font-bold text-tekgelet"
        >
          {/* 👋  */}
          ¡Hola!, Soy-
        </p>
        <h1
          // ref={name}
          className="text-6xl/9xl font-bold text-night"
        >
          Kevin Espitia.
        </h1>
        <p
          // ref={content}
          className="text-xl/3xl font-semibold md:w-[60%] text-night mt-5  whitespace-pre-wrap"
        >
          Desarrollador de Software.{" "}
          <span className="font-normal text-[#8f9094]">
            Autodidacta con interés en la programación
          </span>
        </p>
        <div
          // ref={paragraph}
          className="text-lg/xl text-[#8f9094] my-8 space-y-2 font-satoshiItalic"
        >
          <p>✨ Desarrollador Frontend especializado en React & Next.js</p>
          <p>💥 Experto en SQL y PL/SQL para la gestión de bases de datos</p>
        </div>
        <div
          // ref={button}
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
        // ref={canvas}
        className="absolute flex justify-center items-center aspect-square w-[600px] bottom-[80%] md:bottom-auto md:left-[65%] xl:left-[60%]"
      >
        <LazySplineAnima />
      </div>
    </section>
  );
};
