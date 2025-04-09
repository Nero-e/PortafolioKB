"use client";
import Image from "next/image";
import { useState } from "react";
import { GalleryBox } from "./GalleryBox";
import { GalleryContent } from "./GalleryContent";
import { PhotoCard } from "./PhotoCard";
import { ContactForm } from "./Form";
import { Notification } from "./Form/Notification/Notificaction";

export const Gallery = () => {
  const [notification, setNotification] = useState({
    visible: false,
    status: "",
    message: "",
  });

  const showNotification = (status: "success" | "error", message: string) => {
    setNotification({ visible: true, status, message });

  // Ocultar la notificación después de un tiempo
    setTimeout(() => {
      setNotification({ visible: false, status: "", message: "" });
    }, 3000);
  };

  return (
    <section className="flex flex-col overflow-hidden w-full h-full min-h-screen py-48 px-[10vw] bg-night z-10">
      <div className="gap-6 w-full h-full max-w-[1400px] mx-auto">
        <div className="grid xs:grid-cols-1 xs:grid-rows-6 sm:grid-cols-1 sm:grid-rows-6 md:grid-cols-2 md:grid-rows-4 xl:grid-cols-3 xl:grid-rows-3 gap-y-6">
          {/* Gallery items */}
          {/* Photo card */}
          <div className="flex justify-center p-[1vw] sm:col-start-1 sm:row-start-1 sm:row-span-1 col-span-1 row-span-1 lg:row-span-1">
            <PhotoCard />
          </div>
          {/* About Card */}
          <GalleryBox className="md:col-start-2" link="/about" isAnimated>
            <div className="absolute p-8 text-center z-20">
              <h1 className="mb-1 text-xl font-satoshi font-medium tracking-wider text-seasalt">
                Acerca de mi
              </h1>
            </div>
            <div className="relative flex justify-center items-center -mr-[225px] mt-20 w-[550px] h-full">
              <div className="absolute flex flex-col items-center justify-center w-full overflow-hidden">
                <Image
                  src="/images/texto5.png"
                  alt="About me"
                  width={800}
                  height={800}
                  className="relative border-flash-white-200 border-2"
                  priority={false}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,..."
                />
              </div>
            </div>
          </GalleryBox>
          {/* Tool stack card */}
          <GalleryBox
            className="md:col-start-2 md:row-start-2 xl:col-start-3 xl:row-start-1"
            link="/techStack"
            isAnimated
          >
            <GalleryContent
              tittle="Stack Tecnológico"
              text="Herramientas y tegnologias"
            >
              <Image
                className="relative inline-block max-w-full -m-[10vw] md:-m-[4vw] xl:-m-[2vw] border-0 overflow-hidden"
                src={"/svgs/frame.svg"}
                alt="frame"
                width={500}
                height={500}
                priority={false}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,..."
              />
            </GalleryContent>
          </GalleryBox>
          {/* Location card */}
          <GalleryBox
            className="md:col-start-1 md:row-start-2 md:row-span-2 xl:col-span-1 xl:row-span-2"
            isAnimated
          >
            <div className="relative flex flex-col text-center w-full h-full p-8">
              <h1 className="mb-1 text-xl font-satoshi font-medium tracking-wider text-seasalt">
                Ubicación
              </h1>
              <p className="text-sm font-satoshiItalic text-flash-white-200 mb-3">
                Bogotá, Colombia
              </p>
              <div className="relative w-full h-full">
                <div className="absolute inset-0 md:relative md:w-full h-full w-full md:max-w-full md:pt-8">
                  <Image
                    src={"/svgs/map.svg"}
                    alt="About me"
                    className="w-full h-full object-cover rounded-[4vw] lg:rounded-[80px]"
                    width={800}
                    height={800}
                  />
                </div>
              </div>
            </div>
          </GalleryBox>
          {/* Soft skills card */}
          <GalleryBox
            className="xs:row-span-2 sm:row-span-2 md:col-start-1 md:col-span-2 md:row-start-4 xl:col-start-2 xl:row-start-2 xl:row-span-1"
            isAnimated
          >
            <div className="relative flex flex-col text-center bg-[url('/images/square.png')] bg-cover w-full h-full p-8">
              {/* Título */}
              <div className="space-y-5">
                <h1 className="text-xl font-satoshi font-medium tracking-wider text-seasalt">
                  Núcleo de Interaccion
                </h1>
              </div>
              {/* contenedor */}
              <div className="relative mt-5 w-full h-full">
                <div className="absolute flex flex-col items-center w-full h-full xs:flex md:hidden">
                  {/* imagen */}
                  <div className="p-10">
                    <Image
                      src={"/images/cubsm.png"}
                      alt="About me"
                      width={100}
                      height={100}
                    />
                  </div>
                  {/* texto */}
                  <div className="flex flex-col space-y-5 px-5 text-left">
                    <ContentBlock
                      title="Trabajo en Equipo"
                      text="Colaboro eficientemente para lograr objetivos comunes."
                    />
                    <ContentBlock
                      title="Adaptabilidad"
                      text="Me ajusto rápidamente a cambios y nuevos desafíos."
                    />
                    <ContentBlock
                      title="Resolución de Problemas"
                      text="Abordo los retos con soluciones innovadoras y bien pensadas."
                    />
                  </div>
                </div>
                {/* Layout para pantallas mayores a XS */}
                <div className="hidden md:flex flex-row w-full h-full">
                  <div className="flex flex-col justify-center md:space-y-5 xl:space-y-20 text-right items-center w-full h-full pr-5">
                    <ContentBlock
                      title="Trabajo en Equipo"
                      text="Colaboro eficientemente para lograr objetivos comunes."
                    />
                    <ContentBlock
                      title="Adaptabilidad"
                      text="Me ajusto rápidamente a cambios y nuevos desafíos."
                    />
                  </div>
                  {/* imagen centrada */}
                  <div className="hidden sm:hidden md:flex justify-center items-center w-full h-full">
                    <div className="relative flex justify-center items-center md:w-[200px] xl:w-[300px] h-full">
                      <div className="absolute flex flex-col items-center justify-center w-full overflow-hidden">
                        <Image
                          src="/svgs/cub.svg"
                          alt="About me"
                          className="relative"
                          width={800}
                          height={800}
                          priority={false}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/svg+xml;base64,..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center text-left w-full h-full pl-5">
                    <ContentBlock
                      title="Resolución de Problemas"
                      text="Abordo los retos con soluciones innovadoras y bien pensadas."
                    />
                  </div>
                </div>
              </div>
            </div>
          </GalleryBox>
          {/* Contact card */}
          <GalleryBox className="md:col-start-2 md:row-start-3" border>
            <ContactForm showNotification={showNotification} />
          </GalleryBox>
          {/* Notification */}
          {notification.visible && (
            <Notification
              status={notification.status}
              message={notification.message}
              onClose={() =>
                setNotification({ visible: true, status: "", message: "" })
              }
            />
          )}
        </div>
      </div>
    </section>
  );
};

function ContentBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h1 className="text-lg xl:text-base font-satoshi font-medium tracking-wider text-seasalt">
        {title}
      </h1>
      <p className="text-sm xl:text-xs font-satoshiItalic text-flash-white-200">
        {text}
      </p>
    </div>
  );
}
