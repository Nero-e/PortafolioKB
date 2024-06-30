import { GalleryBox } from "./GalleryBox";

export const Gallery = () => {
  return (
    <section className="flex flex-nowrap justify-between items-center overflow-hidden  z-60 w-full h-full min-h-full py-48 px-[10vw] relative">
      <div className="flex flex-col relative z-30 gap-6 w-full">
        <div className="grid grid-rows-5 grid-cols-1 md:grid-rows-3 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3 gap-2">
        <GalleryBox className="col-start-1">
            <h1>Grid 1</h1>
          </GalleryBox>
          <GalleryBox className="col-span-1 row-span-1 lg:col-start-2 lg:row-start-1">
            About me (cv)
          </GalleryBox>
          <GalleryBox className="md:col-start-2 md:row-start-1 md:row-span-1 lg:col-start-3 lg:row-start-1 lg:col-span-1 lg:row-span-1">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-2xl">Mi repertorio</h1>
              <p>Tech</p>
            </div>
          </GalleryBox>
          <GalleryBox className="md:col-start-1 md:row-start-2 md:row-span-2  lg:col-start-1 lg:row-start-2 lg:col-span-1 lg:row-span-2">
            grid 4
          </GalleryBox>
          <GalleryBox className="md:col-start-2 md:row-start-2 md:row-span-1 lg:col-start-2 lg:row-start-2 lg:col-span-2 lg:row-span-1">
            grid 5
          </GalleryBox>
          <GalleryBox className="md:col-start-2 md:row-start-3 lg:row-start-3 lg:col-start-2">
            grid 6
          </GalleryBox>
        </div>
      </div>
      {/*Fondo*/}
      <div className="absolute bottom-0 top-0 left-0 right-0 h-full w-full z-10 flex items-center justify-center bg-[#0c0c0d]" />
    </section>
  );
};
