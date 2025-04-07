"use client";

import { motion, MotionValue, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

interface HeaderIconProps {
  mouseX: MotionValue;
  text?: string;
  href: string;
  children?: React.ReactNode;
}

export const HeaderIcon = ({ mouseX, href, children }: HeaderIconProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width }}
        className="flex justify-center items-center aspect-square w-10 rounded-full backdrop-blur-sm cursor-pointer uppercase bg-seasalt-100"
      >
        <div className="opacity-50">
        {children}
        </div>
      </motion.div>
    </Link>
  );
};
