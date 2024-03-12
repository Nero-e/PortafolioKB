import PlusIcon from "@/svgs/plus.svg";
const LandingHeader = () => {
  return (
    <>
      <div className="flex justify-center ">
        <header className="flex fixed justify-between bg-[rgb(243,244,250,0.32)] backdrop-blur-sm w-[880px] py-4 px-4 font-medium rounded-3xl shadow-custom z-40 top-10 cursor-pointer">
          <div>KB</div>
          <div className="text-rich-black">
            <PlusIcon />
          </div>
        </header>
      </div>
    </>
  );
};

export default LandingHeader;
