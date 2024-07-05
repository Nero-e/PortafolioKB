import { GalleryBox } from "./GalleryBox";

export const Gallery = () => {
  return (
    <section className="flex flex-col overflow-hidden w-[100vw] h-full min-h-screen py-48 px-[10vw] bg-night">
      <div className="z-30 gap-6 w-full max-w-[1400px] h-full mx-auto">
        <div className="grid xs:grid-cols-1 xs:grid-rows-6 grid-cols-2 grid-rows-4 lg:grid-cols-3 lg:grid-rows-3 gap-[1vw]">
          {/* Primer grid */}
          <div className="flex flex-col p-[1vw] xs:col-start-1 xs:row-start-1 xs:row-span-1 col-span-1 row-span-2 lg:row-span-1">
            <a className="rounded-[5vw] lg:rounded-[4vw] border-gradient w-full h-full p-[1px] inline-block">
              <div className="flex flex-col justify-center items-center overflow-hidden rounded-[5vw] lg:rounded-[4vw] w-full h-full lg:min-h-[22vw] xl:min-h-[20vw] bg-eerie-black">
                <div className="flex flex-col flex-none justify-between items-center gap-y-5 w-[120%] h-full pt-[2.5vw]">
                  <div className="flex flex-col w-[70%] text-center z-10">
                    <h1 className="mb-1 mt-0 text-xl font-satochi tracking-wider text-seasalt">
                      Auror 1
                    </h1>
                    <p className="mb-3 text-sm font-satochiItalic text-anti-flash-white-200">
                      Aurora Borealis
                    </p>
                  </div>
                  <img className="inline-block max-w-full -m-[1vw] border-0" src={'/images/Frame.png'}/>
                </div>
              </div>
            </a>
          </div>
          {/* Segundo grid */}
          <div className="flex flex-col p-[1vw] xs:row-start-2 xs:col-start-1 col-start-2">
            <a className="rounded-[5vw] lg:rounded-[4vw] border-gradient w-full h-full p-[1px] inline-block">
              <div className="flex flex-col justify-center items-center overflow-hidden rounded-[5vw] lg:rounded-[4vw] w-full h-full lg:min-h-[22vw] xl:min-h-[20vw] bg-eerie-black">
                <div className="flex flex-col flex-none justify-between items-center gap-y-5 w-[120%] h-full pt-[2.5vw]">
                  <div className="flex flex-col w-[70%] text-center z-10">
                    <h1 className="mb-1 mt-0 text-xl font-satochi tracking-wider text-seasalt">
                      Auror 2
                    </h1>
                    <p className="mb-3 text-sm font-satochiItalic text-anti-flash-white-200">
                      Aurora Borealis
                    </p>
                  </div>
                  <img className="inline-block max-w-full -m-[1vw] border-0" src={'/images/Frame.png'}/>
                </div>
              </div>
            </a>
          </div>
          {/* Tercer grid */} 
          <div className="flex flex-col p-[1vw] xs:row-start-3 xs:col-start-1 col-span-1 col-start-2 lg:col-start-3">
            <a className="rounded-[5vw] lg:rounded-[4vw] border-gradient w-full h-full p-[1px] inline-block">
              <div className="flex flex-col justify-center items-center overflow-hidden rounded-[5vw] lg:rounded-[4vw] w-full h-full lg:min-h-[22vw] xl:min-h-[20vw] bg-eerie-black">
                <div className="flex flex-col flex-none justify-between items-center gap-y-5 w-[120%] h-full pt-[2.5vw]">
                  <div className="flex flex-col w-[70%] text-center z-10">
                    <h1 className="mb-1 mt-0 text-xl font-satochi tracking-wider text-seasalt">
                      Auror 3
                    </h1>
                    <p className="mb-3 text-sm font-satochiItalic text-anti-flash-white-200">
                      Aurora Borealis
                    </p>
                  </div>
                  <img className="inline-block max-w-full -m-[1vw] border-0" src={'/images/Frame.png'}/>
                </div>
              </div>
            </a>
          </div>
          {/* Cuarto grid */}
          <div className="flex flex-col p-[1vw] xs:row-start-4 xs:col-span-1 col-start-1 row-start-3 col-span-2 lg:col-span-1 lg:row-span-2">
            <a className="rounded-[5vw] lg:rounded-[4vw] border-gradient w-full h-full p-[1px] inline-block">
              <div className="flex flex-col justify-center items-center overflow-hidden rounded-[5vw] lg:rounded-[4vw] w-full h-full lg:min-h-[22vw] xl:min-h-[20vw] bg-eerie-black">
                <div className="flex flex-col flex-none justify-between items-center gap-y-5 w-[120%] h-full pt-[2.5vw]">
                  <div className="flex flex-col w-[70%] text-center z-10">
                    <h1 className="mb-1 mt-0 text-xl font-satochi tracking-wider text-seasalt">
                      Auror 4
                    </h1>
                    <p className="mb-3 text-sm font-satochiItalic text-anti-flash-white-200">
                      Aurora Borealis
                    </p>
                  </div>
                  <img className="inline-block max-w-full sm:w-[50%] lg:w-full -m-[4vw] lg:-m-[1vw] border-0" src={'/images/Frame.png'}/>
                </div>
              </div>
            </a>
          </div>
          {/* Quito grid */}
          <div className="flex flex-col p-[1vw] xs:col-start-1 xs:row-start-5 col-start-1 row-start-4 lg:col-start-2 lg:row-start-2 lg:col-span-2">
            <a className="rounded-[5vw] lg:rounded-[4vw] border-gradient w-full h-full p-[1px] inline-block">
              <div className="flex flex-col justify-center items-center overflow-hidden rounded-[5vw] lg:rounded-[4vw] w-full h-full lg:min-h-[22vw] xl:min-h-[20vw] bg-eerie-black">
                <div className="flex flex-col flex-none justify-between items-center gap-y-5 w-[120%] h-full pt-[2.5vw]">
                  <div className="flex flex-col w-[70%] text-center z-10">
                    <h1 className="mb-1 mt-0 text-xl font-satochi tracking-wider text-seasalt">
                      Auror 5
                    </h1>
                    <p className="mb-3 text-sm font-satochiItalic text-anti-flash-white-200">
                      Aurora Borealis
                    </p>
                  </div>
                  <img className="inline-block max-w-full lg:w-[50%] -m-[1vw] lg:-m-[4vw] border-0" src={'/images/Frame.png'}/>
                </div>
              </div>
            </a>
          </div>
          {/* Sexto grid  col-start-2 row-start-4 lg:row-start-3*/}
          <div className="flex flex-col p-[1vw] xs:col-start-1 xs:row-start-6">
            <a className="rounded-[5vw] lg:rounded-[4vw] border-gradient w-full h-full p-[1px] inline-block">
              <div className="flex flex-col justify-center items-center overflow-hidden rounded-[5vw] lg:rounded-[4vw] w-full h-full lg:min-h-[22vw] xl:min-h-[20vw] bg-eerie-black">
                <div className="flex flex-col flex-none justify-between items-center gap-y-5 w-[120%] h-full pt-[2.5vw]">
                  <div className="flex flex-col w-[70%] text-center z-10">
                    <h1 className="mb-1 mt-0 text-xl font-satochi tracking-wider text-seasalt">
                      Auror 6
                    </h1>
                    <p className="mb-3 text-sm font-satochiItalic text-anti-flash-white-200">
                      Aurora Borealis
                    </p>
                  </div>
                  <img className="inline-block max-w-full -m-[1vw] border-0" src={'/images/Frame.png'}/>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
