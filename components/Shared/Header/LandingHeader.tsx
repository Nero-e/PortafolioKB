import PlusIcon from "@/public/svgs/plus.svg";
export const LandingHeader = () => {
  return (
    <>
      <div className="flex justify-center text-night font-semibol">
        <header className="flex fixed items-center justify-between bg-anti-flash-white-200 backdrop-blur-sm w-[838px] h-14 rounded-[30px] z-40 mt-20 px-9 shadow-custom-dark cursor-pointer">
          <div>KB</div>
          <div>
            <PlusIcon />
          </div>
        </header>
      </div>
    </>
  );
};
