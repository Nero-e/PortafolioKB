"use client";

import { motion, useMotionValue } from "framer-motion";
import { HeaderIcon } from "../HeaderItem";
import { HomeIcon } from "@heroicons/react/24/outline";
import { PaintBrushIcon } from "@heroicons/react/24/outline";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { MusicalNoteIcon } from "@heroicons/react/24/outline";

export const HeaderContent = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      style={{ y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex items-end h-16 mx-auto px-4 pb-3 gap-4 rounded-full backdrop-blur-sm bg-flash-white-200 shadow-custom-nav z-30"
    >
      <div></div>
      <HeaderIcon text="" href="/" mouseX={mouseX}>
        <HomeIcon className="text-black size-5" />
      </HeaderIcon>
      <HeaderIcon text="" href="/about" mouseX={mouseX}>
        <PaintBrushIcon className="text-black size-5" />
      </HeaderIcon>
      <HeaderIcon text="" href="/techStack" mouseX={mouseX}>
        <AcademicCapIcon className="text-black size-5" />
      </HeaderIcon>
      <HeaderIcon text="" href="/" mouseX={mouseX}>
        <RocketLaunchIcon className="text-black size-5" />
      </HeaderIcon>
      <HeaderIcon text="" href="/" mouseX={mouseX}>
        <MusicalNoteIcon className="text-black size-5" />
      </HeaderIcon>
    </motion.div>
  );
};
