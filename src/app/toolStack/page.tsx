import Image from 'next/image';

import { GalleryBoxContent } from '@/src/components/Gallery/GalleryBoxContent';
import { GalleryBox } from '@/src/components/Gallery/GalleryBox';
import { TechBadge } from '@/src/components/TechBox/TechBadge';
import { TechDescription } from '@/src/components/TechBox/TechDescription';
import { TechTag } from '@/src/components/TechBox/TechTag';

export default function ToolsStack() {
  return (
    <section className="flex flex-col overflow-hidden w-full h-full min-h-screen py-48 px-[10vw] bg-night">
      <div className="z-30 gap-6 w-full max-w-[1400px] h-full mx-auto">
        <div className="flex flex-col justify-center text-center w-full max-w-[1400px] mb-20">
          <h1 className="text-5xl font-satochi font-bold text-seasalt uppercase">
            Mi Stack Tecnologico
          </h1>
          <p className="text-xl font-satochi text-seasalt-300">
            Aplicaciones que uso para diseñar, mantenerme productivo o
            divertirme
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {/*Figma card */}
          <GalleryBox heightClass="min-h-[300px] lg:min-h-[22vw] 2xl:min-h-[18vw]">
            <div className="flex flex-col justify-center items-center pt-[60px] gap-y-4 p-10">
              <TechBadge src="/images/figma.png" />
              <TechDescription
                title="Figma"
                description="Herramienta de diseño intuitiva para crear prototipos y diseños."
              />
              <div className="flex flex-row justify-center items-center gap-2">
                <TechTag variant="design" />
              </div>
            </div>
          </GalleryBox>
          {/* Notion card */}
          <GalleryBox heightClass="min-h-[300px] lg:min-h-[22vw] 2xl:min-h-[18vw]">
            <div className="flex flex-col justify-center items-center pt-[60px] gap-y-4 p-10">
              <TechBadge src="/images/Notion.png" />
              <TechDescription
                title="Notion"
                description="Herramienta versátil para gestionar notas, tareas y proyectos."
              />
              <div className="flex flex-row justify-center items-center gap-2">
                <TechTag variant="design" />
                <TechTag variant="productivity" />
              </div>
            </div>
          </GalleryBox>
          {/* Css card */}
          <GalleryBox heightClass="min-h-[300px] lg:min-h-[22vw] 2xl:min-h-[18vw]">
            <div className="flex flex-col justify-center items-center pt-[60px] gap-y-4 p-10">
              <TechBadge src="/svgs/Css.svg" />
              <TechDescription
                title="CSS"
                description="Estilos visuales que permiten un diseño atractivo y responsivo."
              />
              <div className="flex flex-row justify-center items-center gap-2">
                <TechTag variant="design" />
                <TechTag variant="development" />
              </div>
            </div>
          </GalleryBox>
          {/* Github card */}
          <GalleryBox heightClass="min-h-[300px] lg:min-h-[22vw] 2xl:min-h-[18vw]">
            <div className="flex flex-col justify-center items-center pt-[60px] gap-y-4 p-10">
              <TechBadge src="/svgs/GitHubvs.svg" />
              <TechDescription
                title="Github"
                description="Plataforma para gestionar código y colaborar en proyectos."
              />
              <div className="flex flex-row justify-center items-center gap-2">
                <TechTag variant="productivity" />
              </div>
            </div>
          </GalleryBox>
          {/* React card */}
          <GalleryBox heightClass="min-h-[300px] lg:min-h-[22vw] 2xl:min-h-[18vw]">
            <div className="flex flex-col justify-center items-center pt-[60px] gap-y-4 p-10">
              <TechBadge src="/svgs/React.svg" />
              <TechDescription
                title="React"
                description="Librería para construir interfaces de usuario dinámicas y eficientes."
              />
              <div className="flex flex-row justify-center items-center gap-2">
                <TechTag variant="code" />
                <TechTag variant="development" />
              </div>
            </div>
          </GalleryBox>
          {/* JavaScript card */}
          <GalleryBox heightClass="min-h-[300px] lg:min-h-[22vw] 2xl:min-h-[18vw]">
            <div className="flex flex-col justify-center items-center pt-[60px] gap-y-4 p-10">
              <TechBadge src="/images/javaScript.png" />
              <TechDescription
                title="JavaScript"
                description="Lenguaje de programación esencial para añadir interactividad a la web."
              />
              <div className="flex flex-row justify-center items-center gap-2">
                <TechTag variant="code" />
                <TechTag variant="development" />
              </div>
            </div>
          </GalleryBox>
          {/* Spline card */}
          <GalleryBox heightClass="min-h-[300px] lg:min-h-[22vw] 2xl:min-h-[18vw]">
            <div className="flex flex-col justify-center items-center pt-[60px] gap-y-4 p-10">
              <TechBadge src="/images/Spline.png" />
              <TechDescription
                title="Spline"
                description="Crea gráficos y animaciones 3D interactivas de forma sencilla."
              />
              <div className="flex flex-row justify-center items-center gap-2">
                <TechTag variant="design" />
              </div>
            </div>
          </GalleryBox>
          {/* Nest card */}
          <GalleryBox heightClass="min-h-[300px] lg:min-h-[22vw] 2xl:min-h-[18vw]">
            <div className="flex flex-col justify-center items-center pt-[60px] gap-y-4 p-10">
              <TechBadge src="/svgs/Nestvs.svg" />
              <TechDescription
                title="Nest"
                description="Framework de backend eficiente y escalable en Node.js."
              />
              <div className="flex flex-row justify-center items-center gap-2">
                <TechTag variant="code" />
                <TechTag variant="development" />
              </div>
            </div>
          </GalleryBox>
          {/* Database card */}
          <GalleryBox heightClass="min-h-[300px] lg:min-h-[22vw] 2xl:min-h-[18vw]">
            <div className="flex flex-col justify-center items-center pt-[60px] gap-y-4 p-10">
              <TechBadge src="/svgs/Databasevs.svg" />
              <TechDescription
                title="Bases de datos SQL"
                description="Almacena y gestiona datos estructurados de manera eficiente."
              />
              <div className="flex flex-row justify-center items-center gap-2">
                <TechTag variant="development" />
                <TechTag variant="productivity" />
              </div>
            </div>
          </GalleryBox>
          {/* Html card */}
          <GalleryBox heightClass="min-h-[300px] lg:min-h-[22vw] 2xl:min-h-[18vw]">
            <div className="flex flex-col justify-center items-center pt-[60px] gap-y-4 p-10">
              <TechBadge src="/svgs/Html.svg" />
              <TechDescription
                title="HTML"
                description="Lenguaje base para estructurar el contenido web."
              />
              <div className="flex flex-row justify-center items-center gap-2">
                <TechTag variant="code" />
                <TechTag variant="development" />
              </div>
            </div>
          </GalleryBox>
          {/* Nextjs card */}
          <GalleryBox heightClass="min-h-[300px] lg:min-h-[22vw] 2xl:min-h-[18vw]">
            <div className="flex flex-col justify-center items-center pt-[60px] gap-y-4 p-10">
              <TechBadge src="/svgs/Nextjs.svg" />
              <TechDescription
                title="Nextjs"
                description="Framework de React para aplicaciones web optimizadas y rápidas."
              />
              <div className="flex flex-row justify-center items-center gap-2">
                <TechTag variant="code" />
                <TechTag variant="development" />
              </div>
            </div>
          </GalleryBox>
          {/* TypeScript card */}
          <GalleryBox heightClass="min-h-[300px] lg:min-h-[22vw] 2xl:min-h-[18vw]">
            <div className="flex flex-col justify-center items-center pt-[60px] gap-y-4 p-10">
              <TechBadge src="/svgs/TypeScript.svg" />
              <TechDescription
                title="TypeScript"
                description="Superconjunto de JavaScript que añade tipado estático."
              />
              <div className="flex flex-row justify-center items-center gap-2">
                <TechTag variant="code" />
                <TechTag variant="development" />
              </div>
            </div>
          </GalleryBox>
        </div>
      </div>
    </section>
  );
}
