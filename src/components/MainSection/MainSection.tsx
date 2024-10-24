'use client';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import { Animation } from './Animation/Animation';
import { PrimaryButton } from '../Button';
import { Typing } from '../Typing/Typing';

export const MainSection = () => {
  const greetings = useRef(null);
  const name = useRef(null);
  const content = useRef(null);
  const paragraph = useRef(null);
  const button = useRef(null);
  const canvas = useRef(null);

  useGSAP(() => {
    const anima = gsap.timeline({});

    anima
      .fromTo(
        greetings.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2' },
      )
      .fromTo(
        name.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2' },
        '-=0.8',
      )
      .fromTo(
        content.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2' },
        '-=0.7',
      )
      .fromTo(
        paragraph.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2' },
        '-=0.7',
      )
      .fromTo(
        button.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2' },
        '-=0.6',
      )
      .fromTo(
        canvas.current,
        { opacity: 0, x: 500 },
        { opacity: 1, x: 0, duration: 1, ease: 'power2.out' },
        '-=1',
      );
  }, []);

  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden py-5 px-12 bg-seasalt">
      {/* Contenedor */}
      <div className="relative flex flex-col w-full font-satoshi text-left  max-w-[1400px] z-20 duration-500">
        <p
          ref={greetings}
          style={{ opacity: 0 }}
          className="~text-2xl/3xl font-bold text-[#5A189A]"
        >
          {/* 👋  */}
          ¡Hola!, Soy-
        </p>
        <h1
          ref={name}
          style={{ opacity: 0 }}
          className="text-clamp6xl/9xl font-black text-night"
        >
          Kevin Espitia.
        </h1>
        <p
          ref={content}
          style={{ opacity: 0 }}
          className="~text-xl/3xl font-semibold md:w-[60%] text-night mt-8 whitespace-pre-wrap"
        >
          Desarrollador de Software.{' '}
          <span className="font-normal text-[#8f9094]">
            Autodidacta con interés en la programación
          </span>
        </p>
        <div
          ref={paragraph}
          style={{ opacity: 0 }}
          className="~text-lg/xl text-[#8f9094] my-8"
        >
          <p>
            ✨{' '}
            <Typing
              steps={[
                800,
                'Desarrollador Frontend especializado en React & Next.js',
              ]}
            />
          </p>
          <p>
            💥{' '}
            <Typing
              steps={[
                800,
                'Experto en SQL y PL/SQL para la gestión de bases de datos',
              ]}
            />
          </p>
        </div>
        <div
          ref={button}
          style={{ opacity: 0 }}
          className="flex justify-center md:justify-start space-x-4 mt-4 font-satochi"
        >
          <PrimaryButton
            href="https://www.linkedin.com/in/kespitia"
            text="LinkedIn"
          />
          <PrimaryButton
            href="/pdf/Curriculum.pdf"
            text="Cv"
            download="Curriculum.pdf"
          />
        </div>
      </div>
      {/* <div
        ref={canvas}
        className="absolute flex justify-center items-center w-[600px] h-[600px] bottom-[80%] md:bottom-auto md:left-[65%] xl:left-[60%] transition-all ease-linear"
      >
        <Animation />
      </div> */}
    </section>
  );
};
