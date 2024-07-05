import PlusIcon from "@/public/svgs/plus.svg";
export const LandingHeader = () => {
  return (
    <>
      <div className="lg:flex justify-center text-night font-semibold hidden">
        <header className="flex fixed items-center justify-between bg-anti-flash-white-200 backdrop-blur-sm w-[838px] h-14 rounded-[30px] z-40 mt-20 px-9 shadow-custom-dark cursor-pointer">
          <div><h1 className="text-lg font-satochi tracking-wider">KB</h1></div>
          <div>
            <PlusIcon />
          </div>
        </header>
      </div>
    </>
  );
};
