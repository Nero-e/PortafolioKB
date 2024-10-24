import { Gallery } from "../components/Gallery";
import { MainSection } from "../components/MainSection/MainSection";
// import { Header } from "../components/Shared/Header/Header";

export default function Home() {
  return (
    <main className="relative w-full h-full min-h-screen overflow-auto">
      {/* <Header /> */}
      <MainSection />
      <Gallery />
    </main>
  );
}
