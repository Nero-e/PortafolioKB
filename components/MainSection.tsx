"use client";
import Spline from "@splinetool/react-spline";
import Animation from "./Animation";
const MainSection = () => {
  return (
    <>
      <section className="flex overflow-hidden w-full flex-nowrap justify-between items-center h-screen py-44 px-32">
        <div className="absolute inset-0 bg-opacity-70 backdrop-blur-lg flex items-center justify-center z-30">
          <div className="text-black text-center">
            {/* <Animation/> */}
            <h1 className="text-4xl font-bold">Frontend Developer</h1>
            <p className="mt-2">Kevin David Espitia Bautista</p>
          </div>
        </div>
        {/* Fondo */}
        <div className="absolute bottom-0 top-0 left-0 right-0 h-full w-full z-10 flex items-center justify-center bg-[#F3F4FA]" />
      </section>
    </>
  );
};
export default MainSection;
