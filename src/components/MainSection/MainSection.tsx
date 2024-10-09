'use client';

import Link from 'next/link';
import { motion, useAnimate, useInView } from 'framer-motion';

import { Animation } from './Animation/Animation';
import { PrimaryButton } from '../Button';
import { Ring } from '../Loader/Ring';
import { useEffect, useState } from 'react';

export const MainSection = () => {
  const [scope, animate] = useAnimate();

  const isInView = useInView(scope, { once: false });

  useEffect(() => {
    if (isInView) {
      // Configuramos las animaciones secuenciales
      animate(
        '#title',
        { opacity: [0, 1], y: [-50, 0] },
        { delay: 0.5, duration: 1 },
      );
      animate(
        '#subtitle',
        { opacity: [0, 1], y: [-50, 0] },
        { delay: 0.6, duration: 1 },
      );
      animate(
        '#paragraph',
        { opacity: [0, 1], y: [-30, 0] },
        { delay: 0.7, duration: 1 },
      );
      animate(
        '#button',
        { opacity: [0, 1], y: [50, 0] },
        { delay: 0.8, duration: 1 },
      );
    }
  }, [isInView, animate]);

  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden py-5 px-12 bg-seasalt">
      {/* Contenedor */}
      <div
        ref={scope}
        className="flex flex-col w-full text-center font-satoshi md:text-left max-w-[1400px] z-20 duration-500"
      >
        <p
          id="title"
          style={{ opacity: 0 }}
          className="text-3xl font-bold text-[#5A189A]"
        >
          ¡Hola!, Soy-
        </p>
        <h1
          id="subtitle"
          style={{ opacity: 0 }}
          className="text-9xl font-black text-night"
        >
          Kevin Espitia.
        </h1>
        <p
          id="paragraph"
          style={{ opacity: 0 }}
          className="text-3xl font-semibold w-[60%] text-night mt-8 whitespace-pre-wrap"
        >
          Desarrollador de Software.{' '}
          <span className="font-normal text-[#8f9094]">
            Autodidacta con interés en la programación
          </span>
        </p>
        <div
          id="paragraph"
          style={{ opacity: 0 }}
          className="text-xl text-[#8f9094] my-8"
        >
          <p className="">
            ✨ Desarrollador Frontend especializado en React & Next.js
          </p>
          <p className="">
            💥 Experto en SQL y PL/SQL para la gestión de bases de datos
          </p>
        </div>
        <div
          id="button"
          style={{ opacity: 0 }}
          className="flex justify-center md:justify-start space-x-4 mt-4 font-satochi"
        >
          <PrimaryButton
            href="https://www.linkedin.com/in/tu-linkedin"
            text="LinkedIn"
          />
          <PrimaryButton
            href="/pdf/Curriculum.pdf"
            text="Cv"
            download="Curriculum.pdf"
          />
        </div>
      </div>
      <motion.div
        style={{ opacity: 0, x: '100%' }} // Inicia fuera de la pantalla por la derecha
        animate={{ opacity: 1, x: '0%' }} // Anima hacia su posición final
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }} // Control de tiempo para toda la animación
        className="absolute flex justify-center items-center w-[600px] h-[600px] md:left-[50%] lg:left-[70%] xl:left-[60%] transition-all ease-linear"
      >
        <Animation />
      </motion.div>
    </section>
  );
};
