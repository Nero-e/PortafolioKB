import React from 'react';

interface GalleryBoxContentProps {
  children?: React.ReactNode;
  className?: string;
  tittle?: string;
  text?: string;
}

export const GalleryBoxContent = ({
  children,
  className,
  tittle,
  text,
}: GalleryBoxContentProps) => {
  return (
    <div className="flex flex-col flex-none justify-between items-center gap-y-5 w-[120%] h-full pt-[2.5vw]">
      <div className="flex flex-col w-[70%] text-center z-10">
        <h1 className="mb-1 mt-0 text-xl font-satochi tracking-wider text-seasalt">
          {tittle}
        </h1>
        <p className="mb-3 text-sm font-satochiItalic text-anti-flash-white-200">
          {text}
        </p>
      </div>
      {children}
    </div>
  );
};
