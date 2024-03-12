"use client";
import Spline from "@splinetool/react-spline";

const Animation = () => {
  return (
    <>
      <div className="h-full z-20 absolute bottom-0 top-0 left-[50rem] right-0">
        <Spline
          className="object-center object-cover bg-center"
          scene="https://prod.spline.design/psQ20LZpyvaLSXbN/scene.splinecode"
        />
      </div>
      <div className="absolute bottom-0 top-0 left-0 right-0 h-full w-full z-10 flex items-center justify-center bg-[#F3F4FA]" />
    </>
  );
};
export default Animation;
