"use client"
import { useFade } from "@/src/hooks/useFade";
import Image from "next/image";
import { useRef } from "react";

export const PhotoCard = () => {
  const box = useRef<HTMLDivElement>(null);
  useFade(box);

  return (
    <div ref={box} className="w-auto h-full flex justify-center items-center">
      <Image
        src={"/svgs/photoCard.svg"}
        alt="Photo"
        width={300}
        height={300}
        className="w-full h-full"
        priority={false}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,..."
      />
    </div>
  );
};
