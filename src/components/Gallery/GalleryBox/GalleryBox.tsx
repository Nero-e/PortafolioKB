import Link from "next/link";

interface GalleryBoxProps {
  children?: React.ReactNode;
  link?: string;
  className?: string;
}
export const GalleryBox = ({ children, className, link }: GalleryBoxProps) => {
  return (
    <div className={`flex flex-col p-[1vw] ${className}`}>
      <Link href={link ? link : '/'} className="rounded-[5vw] lg:rounded-[4vw] border-gradient w-full h-full p-[1px] inline-block">
        <div className="flex flex-col justify-center items-center overflow-hidden rounded-[5vw] lg:rounded-[4vw] w-full h-full lg:min-h-[22vw] xl:min-h-[20vw] bg-eerie-black">
          {children}
        </div>
      </Link>
    </div>
  );
};
