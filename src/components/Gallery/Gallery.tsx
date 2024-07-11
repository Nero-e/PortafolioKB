import { GalleryBox } from "./GalleryBox";
import { GalleryBoxContent } from "./GalleryBoxContent";

export const Gallery = () => {
  return (
    <section className="flex flex-col overflow-hidden w-full h-full min-h-screen py-48 px-[10vw] bg-night">
      <div className="z-30 gap-6 w-full max-w-[1400px] h-full mx-auto">
        <div className="grid xs:grid-cols-1 xs:grid-rows-6 grid-cols-2 grid-rows-4 lg:grid-cols-3 lg:grid-rows-3 gap-[1vw]">
          {/* Primer grid */}
          <GalleryBox className="xs:col-start-1 xs:row-start-1 xs:row-span-1 col-span-1 row-span-2 lg:row-span-1">
            <GalleryBoxContent tittle="Auror" text="Grid content 1"/>
          </GalleryBox>
          {/* Segundo grid */}
          <GalleryBox className="xs:row-start-2 xs:col-start-1 col-start-2" link="/about">
            <GalleryBoxContent tittle="About" text="Grid content 2"/>
          </GalleryBox>
          {/* Tercer grid */}
          <GalleryBox className="xs:row-start-3 xs:col-start-1 col-span-1 col-start-2 lg:col-start-3">
            <GalleryBoxContent tittle="Auror" text="Grid content 3"/>
          </GalleryBox>
          {/* Cuarto grid */}
          <GalleryBox className="xs:row-start-4 xs:col-span-1 col-start-1 row-start-3 col-span-2 lg:col-span-1 lg:row-span-2">
            <GalleryBoxContent tittle="Auror" text="Grid content 4" className="inline-block max-w-full sm:w-[50%] lg:w-full -m-[4vw] lg:-m-[1vw] border-0"/>
          </GalleryBox>
          {/* Quito grid */}
          <GalleryBox className="xs:col-start-1 xs:row-start-5 col-start-1 row-start-4 lg:col-start-2 lg:row-start-2 lg:col-span-2">
            <GalleryBoxContent tittle="Auror" text="Grid content 5" className="inline-block max-w-full lg:w-[50%] -m-[1vw] lg:-m-[4vw] border-0"/>
          </GalleryBox>
          {/* Sexto grid  col-start-2 row-start-4 lg:row-start-3*/}
          <GalleryBox className="xs:col-start-1 xs:row-start-6">
            <GalleryBoxContent tittle="Auror" text="Grid content 6"/>
          </GalleryBox>
        </div>
      </div>
    </section>
  );
};
