import { LandingHeader } from "@/components/Shared/Header";
import { MainSection } from "@/components/MainSection";
import { Gallery } from "@/components/Gallery";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <main className="relative w-full h-screen overflow-auto snap-y snap-mandatory">
        <div className="snap-start">
          <MainSection />
        </div>
        <div className="snap-start">
          <Gallery />
        </div>
      </main>
    </>
  );
}