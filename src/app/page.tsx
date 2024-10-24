import { LandingHeader } from '@/src/components/Shared/Header';
import { MainSection } from '@/src/components/MainSection';
import { Gallery } from '@/src/components/Gallery';
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="relative w-full h-screen overflow-auto">
        {/* <LandingHeader /> */}
        <div className="">
          <MainSection />
        </div>
        <div className="">{/* <Gallery /> */}</div>
      </main>
    </>
  );
}
