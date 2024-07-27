import Link from "next/link";

interface GalleryBoxProps {
  children?: React.ReactNode;
  link?: string;
  className?: string;
  border?: boolean;
}
export const GalleryBox = ({ children, className, link, border }: GalleryBoxProps) => {
  return (
    // className="rounded-[4vw] lg:rounded-[2vw] w-full h-full p-[2px] inline-block border-custom"
    <div className={`flex flex-col p-[1vw] ${className}`}>
      <Link href={link ? link : '/'} className={`rounded-[4vw] lg:rounded-[2vw] w-full h-full p-[1px] inline-block ${border ? "bg-gradient" : "border-custom"}`}>
        <div className="flex flex-col justify-center items-center overflow-hidden rounded-[4vw] lg:rounded-[2vw] w-full h-full lg:min-h-[22vw] xl:min-h-[20vw] bg-night">
          {children}
        </div>
      </Link>
    </div>
  );
};
