'use client';
import { useRef, useState } from 'react';

import PlusIcon from '@/public/svgs/plus.svg';
import {
  motion,
  useMotionValue,
  useTransform,
  MotionValue,
  useSpring,
} from 'framer-motion';

export const LandingHeader = () => {
  return (
    <div className="fixed flex justify-center bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-10 z-50">
      <Dock />
    </div>
  );
};

function Dock() {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto flex h-16 items-end gap-4 rounded-full bg-anti-flash-white-200 backdrop-blur-sm px-4 pb-3 shadow-custom-nav"
    >
      <AppIcon text='' mouseX={mouseX} />
      <AppIcon text='' mouseX={mouseX} />
      <AppIcon text='' mouseX={mouseX} />
      <AppIcon text='' mouseX={mouseX} />
      <AppIcon text='' mouseX={mouseX} />
    </motion.div>
  );
}

function AppIcon({ mouseX, text }: { mouseX: MotionValue, text: string }) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="flex justify-center items-center aspect-square w-10 rounded-full bg-seasalt-200 shadow-custom-dark backdrop-blur-sm cursor-pointer uppercase"
    >
      {text}
    </motion.div>
  );
}