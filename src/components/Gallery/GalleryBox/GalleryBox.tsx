'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { useFade } from '@/src/hooks/useFade';
import { useTap } from '@/src/hooks/useTap';

interface GalleryBoxProps {
  children?: React.ReactNode;
  link?: string;
  className?: string;
  border?: boolean;
  wight?: string;
  heightClass?: string;
}
export const GalleryBox = (props: GalleryBoxProps) => {
  const { children, link, className, border, wight, heightClass } = props;

  const { targeRef, fade } = useFade();
  const { tap } = useTap();

  return (
    <motion.div
      ref={targeRef}
      className={`flex flex-col p-[1vw] ${className}`}
      {...fade}
      {...tap}
    >
      {link ? (
        <Link
          href={link}
          className={`rounded-[4vw] lg:rounded-[80px] w-full h-full p-[1px] inline-block ${
            border ? 'bg-gradient' : 'border-custom'
          }`}
        >
          <div
            className={`relative flex flex-col items-center overflow-hidden rounded-[4vw] lg:rounded-[80px] w-full h-full transition-all duration-500 bg-night ${
              heightClass
                ? `${heightClass}`
                : 'min-h-[300px] lg:min-h-[22vw] 2xl:min-h-[380px]'
            }`}
          >
            {children}
            <div className="absolute overflow-hidden inset-0 -mb-3 bg-gradient-to-t from-night -from-10%  to-transparent to-30%" />
          </div>
        </Link>
      ) : (
        <div
          className={`rounded-[4vw] lg:rounded-[80px] w-full h-full p-[1px] inline-block ${
            border ? 'bg-gradient' : 'border-custom'
          }`}
        >
          <div
            className={`flex flex-col items-center overflow-hidden rounded-[4vw] lg:rounded-[80px] w-full h-full transition-all duration-500 bg-night ${
              heightClass
                ? `${heightClass}`
                : 'min-h-[300px] lg:min-h-[22vw] 2xl:min-h-[380px]'
            }`}
          >
            {children}
          </div>
        </div>
      )}
    </motion.div>
  );
};
