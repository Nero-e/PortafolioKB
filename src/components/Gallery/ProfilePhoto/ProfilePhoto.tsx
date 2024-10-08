'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { useFade } from '@/src/hooks/useFade';

export const ProfilePhoto = () => {
  const { targeRef, fade } = useFade();

  return (
    <motion.div className="w-auto h-full flex justify-center items-center" ref={targeRef} {...fade}>
      <Image
        src={'/svgs/Logo.svg'}
        alt="Photo"
        width={300}
        height={300}
        style={{ objectFit: 'contain' }}
        className="w-full h-full"
      />
    </motion.div>
  );
};
