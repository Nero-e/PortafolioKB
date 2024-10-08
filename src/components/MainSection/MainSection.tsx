"use client";
import Link from "next/link";

import { Animation } from "./Animation/Animation";
import { PrimaryButton } from "../Button";
import { Ring } from "../Loader/Ring";

export const MainSection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden py-5 px-6 bg-seasalt">
      {/* Contenedor de texto */}
      <div className="flex flex-col w-full space-y-6 text-center md:text-left max-w-[1400px] z-20">
        <h1 className="text-5xl md:text-7xl">
          ¡Hola! Soy <span className="font-bold">Kevin</span>,
        </h1>
        <h2 className="text-5xl md:text-7xl font-bold text-[#5A189A]">
          Desarrollador de Software
        </h2>
        <div className="flex justify-center md:justify-start space-x-4 mt-4 font-satochi ">
          <PrimaryButton
            href="https://www.linkedin.com/in/tu-linkedin"
            text="LinkedIn"
          />
          <PrimaryButton
            href="/pdf/Curriculum.pdf"
            text="Cv"
            download="Curriculum.pdf"
          />
        </div>
      </div>
      <div className="absolute flex justify-center items-center w-[600px] h-[600px]  md:left-[50%] lg:left-[54%]">
        <Animation />
      </div>
    </section>
  );
};
