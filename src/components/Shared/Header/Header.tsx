import { HeaderContent } from "./HeaderContent";

export const Header = () => {
  return (
    <div className="fixed flex justify-center bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-10 z-10">
      <HeaderContent />
    </div>
  );
};
