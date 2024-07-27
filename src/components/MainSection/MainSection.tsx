import Link from "next/link";

import { Animation } from "./Animation/Animation";
import { PrimaryButton } from "../Button";

export const MainSection = () => {
  return (
    <section className="flex flex-row w-full items-center justify-center h-screen max-h-full overflow-hidden py-5 px-[10vw] bg-seasalt">
      <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-start w-full max-w-[1200px] space-y-6 z-20 mx-auto">
        <h1 className="text-4xl lg:text-7xl font-manusia font-bold text-seasalt lg:text-night w-[60%] 2xl:w-full z-20">
          Desarrollador Frontend
        </h1>
        <p className="text-xl lg:text-2xl font-satochiItalic text-seasalt-100 lg:text-seasalt-900 z-20">
          Kevin David Espitia Bautista
        </p>
        <p className="w-[60%] lg:text-lg font-satochi text-seasalt-200 lg:text-seasalt-800 mt-4 z-20">
          Soy un apasionado desarrollador frontend con experiencia en React.js,
          Next.js y otras tecnologías modernas. Me encanta crear experiencias de
          usuario intuitivas y eficientes.
        </p>
        <div className="flex space-x-4 mt-4 font-satochi ">
          <PrimaryButton href="https://www.linkedin.com/in/tu-linkedin" text="LinkedIn"/>
          <PrimaryButton href="https://github.com/Nero-e" text="GitHub"/>
        </div>
        <div className="absolute w-full w-max-[500px] lg:w-[769px] h-[600px] lg:left-[55%]">
        <Animation />
      </div>
      </div>
      
    </section>
  );
};
