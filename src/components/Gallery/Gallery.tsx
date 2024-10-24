import Image from "next/image";

import { GalleryBox } from "./GalleryBox";
import { GalleryContent } from "./GalleryContent";
import { PhotoCard } from "./PhotoCard";

export const Gallery = () => {
  return (
    <section className="flex flex-col overflow-hidden w-full h-full min-h-screen py-48 px-[10vw] bg-night">
      <div className="gap-6 w-full h-full max-w-[1400px] mx-auto">
        <div className="grid xs:grid-cols-1 xs:grid-rows-6 grid-cols-2 grid-rows-4 lg:grid-cols-3 lg:grid-rows-3 gap-y-6">
          {/* Gallery items */}
          {/* Photo card */}
          <div className="flex justify-center p-[1vw] xs:col-start-1 xs:row-start-1 xs:row-span-1 col-span-1 row-span-1 lg:row-span-1">
            <PhotoCard />
          </div>
          {/* About Cardd */}
          <GalleryBox className="sm:col-start-2" link="/about">
            <div className="absolute pt-[2.5vw] py-10 text-center z-20">
              <h1 className="text-xl font-satoshi font-medium tracking-wider text-seasalt">
                Acerca de mi
              </h1>
            </div>
            <div className="relative flex justify-center items-center -mr-[225px] mt-20 w-[550px] h-full">
              <div className="absolute flex flex-col items-center justify-center w-full overflow-hidden">
                <Image
                  src={"/images/texto5.png"}
                  alt="About me"
                  className="relative border-flash-white-200 border-2"
                  width={800}
                  height={800}
                ></Image>
              </div>
            </div>
          </GalleryBox>
          {/* Tool stack card */}
          <GalleryBox
            className="sm:col-start-2 sm:row-start-2 lg:col-start-3 lg:row-start-1"
            link="/techStack"
          >
            <GalleryContent
              tittle="Stack Tecnológico"
              text="Tools that i enjoy to work"
            >
              <Image
                className="relative inline-block max-w-full sm:-m-[10vw] md:-m-[3vw] border-0 overflow-hidden"
                src={"/svgs/frame.svg"}
                alt="frame"
                width={500}
                height={500}
              />
            </GalleryContent>
          </GalleryBox>
          {/* Location card */}
          <GalleryBox className="sm:col-start-1 sm:row-start-2 sm:row-span-2 lg:col-span-1 lg:row-span-2">
            <div className="relative flex flex-col items-center pt-[2.5vw] p-[1vw] z-20 w-full h-full overflow-hidden">
              <h1 className="text-xl font-satoshi font-medium tracking-wider text-seasalt">
                Ubicación
              </h1>
              <p className="mb-10 text-sm font-satoshiItalic text-flash-white-200">
                Bogotá, Colombia
              </p>
              <div className="relative flex justify-center items-center w-full h-full">
                <div className="absolute flex flex-col items-center justify-center w-full overflow-hidden">
                  <Image
                    src={"/svgs/map.svg"}
                    alt="About me"
                    className="relative rounded-[4vw] lg:rounded-[80px]"
                    width={800}
                    height={800}
                  ></Image>
                </div>
              </div>
            </div>
          </GalleryBox>
          {/* Soft skills card */}
          <GalleryBox className="sm:col-start-1 sm:col-span-2 sm:row-start-4 lg:col-start-2 lg:row-start-2">
            <div className="relative flex flex-col items-center p-[2.5vw] z-20 bg-[url('/images/square.png')] bg-cover w-full h-full overflow-hidden">
              {/* Título */}
              <div className="space-y-5">
                <h1 className="text-xl font-satoshi font-medium tracking-wider text-seasalt">
                  Núcleo de Interaccion
                </h1>
              </div>
              {/* contenedor */}
              <div className="relative mt-5 w-full h-full">
                <div className="absolute flex flex-row justify-center items-center w-full h-full">
                  <div className="flex flex-col justify-center space-y-20 text-right items-center w-full h-full">
                    <div className="pr-5">
                      <h1 className="text-base font-satoshi font-medium tracking-wider text-seasalt">
                        Trabajo en Equipo
                      </h1>
                      <p className="text-xs font-satoshiItalic text-flash-white-200">
                        Colaboro eficientemente para lograr objetivos comunes.
                      </p>
                    </div>
                    <div className="pr-5">
                      <h1 className="text-base font-satoshi font-medium tracking-wider text-seasalt">
                        Adaptabilidad
                      </h1>
                      <p className="text-xs font-satoshiItalic text-flash-white-200">
                        Me ajusto rápidamente a cambios y nuevos desafíos.
                      </p>
                    </div>
                  </div>
                  {/* imagen */}
                  <div className="flex justify-center items-center  w-full h-full m-auto">
                    <div className="relative flex justify-center items-center w-[300px] h-full">
                      <div className="absolute flex flex-col items-center justify-center w-full overflow-hidden">
                        <Image
                          src={"/svgs/cub.svg"}
                          alt="About me"
                          className="relative"
                          width={800}
                          height={800}
                        ></Image>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col justify-center items-center w-full h-full">
                    <div className="pl-5">
                      <h1 className="text-base font-satoshi font-medium tracking-wider text-seasalt">
                        Resolución de Problemas
                      </h1>
                      <p className="text-xs font-satoshiItalic text-flash-white-200">
                        Abordo los retos con soluciones innovadoras y bien
                        pensadas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GalleryBox>
          {/* Contact card */}
          <GalleryBox className="sm:col-start-2 sm:row-start-3" border>
            <GalleryContent tittle="Contacto" text="Contact with me" />
          </GalleryBox>
        </div>
      </div>
    </section>
  );
};
