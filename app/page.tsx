import LandingHeader from "@/components/LandingHeader";
import MainSection from "@/components/MainSection";
import SecondSection from "@/components/SecondSection";
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
          <SecondSection/>
        </div>
      </main>
    </>
  );
}
