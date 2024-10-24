"use client";
import Link from "next/link";
import { useRef, useState } from "react";

import { useHover } from "@/src/hooks/useHover";
import { useTap } from "@/src/hooks/useTap";
// import { useFade } from "@/src/hooks/useFade";

interface GalleryBoxProps {
  children?: React.ReactNode;
  link?: string;
  className?: string;
  border?: boolean;
  heightClass?: string;
}

export const GalleryBox = (props: GalleryBoxProps) => {
  const { children, link, className, border, heightClass } = props;

  const box = useRef<HTMLDivElement>(null);
  const [isScale, setIsScale] = useState(false);

  const { handleMouseEnter, handleMouseLeave } = useHover(
    box,
    isScale,
    setIsScale
  );
  const { handleMouseDown, handleMouseUp } = useTap(box);
  // useFade(box);

  return (
    <div
      ref={box}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`flex flex-col p-[1vw] ${className}`}
    >
      {link ? (
        <Link
          href={link}
          className={`rounded-[4vw] lg:rounded-[80px] w-full xs:min-w-[300px] h-full p-[1px] inline-block ${
            border ? "bg-gradient" : "border-custom"
          }`}
        >
          <div
            className={`relative flex flex-col items-center overflow-hidden rounded-[4vw] lg:rounded-[80px] w-full h-full transition-all duration-500 bg-night ${
              heightClass
                ? `${heightClass}`
                : "min-h-[300px] lg:min-h-[22vw] 2xl:min-h-[380px]"
            }`}
          >
            {children}
            {/* Sombra */}
            <div className="absolute overflow-hidden inset-0 -mb-3 bg-gradient-to-t from-night -from-10%  to-transparent to-30%" />
          </div>
        </Link>
      ) : (
        <div
          className={`rounded-[4vw] lg:rounded-[80px] w-full xs:min-w-[300px] h-full p-[1px] inline-block ${
            border ? "bg-gradient" : "border-custom"
          }`}
        >
          <div
            className={`flex flex-col items-center overflow-hidden rounded-[4vw] lg:rounded-[80px] w-full h-full transition-all duration-500 bg-night ${
              heightClass
                ? `${heightClass}`
                : "min-h-[300px] lg:min-h-[22vw] 2xl:min-h-[380px]"
            }`}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
