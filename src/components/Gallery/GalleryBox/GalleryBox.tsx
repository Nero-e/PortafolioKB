import Link from "next/link";

interface GalleryBoxProps {
  children?: React.ReactNode;
  link?: string;
  className?: string;
  border?: boolean;
  wight?: string;
  heightClass?: string;
}
export const GalleryBox = ({
  children,
  className,
  link,
  border,
  wight,
  heightClass,
}: GalleryBoxProps) => {
  return (
    // className="rounded-[4vw] lg:rounded-[2vw] w-full h-full p-[2px] inline-block border-custom"
    <div className={`flex flex-col p-[1vw] ${className}`}>
      <Link
        href={link ? link : "/"}
        className={`rounded-[4vw] lg:rounded-[80px] w-full h-full p-[1px] inline-block ${
          border ? "bg-gradient" : "border-custom"
        }`}
      >
        <div
          className={`flex flex-col  items-center overflow-hidden rounded-[4vw] lg:rounded-[80px] w-full h-full transition-all duration-500 bg-night ${
            heightClass
              ? `${heightClass}`
              : "min-h-[300px] lg:min-h-[22vw] 2xl:min-h-[380px]"
          }`}
        >
          {children}
        </div>
      </Link>
    </div>
  );
};
