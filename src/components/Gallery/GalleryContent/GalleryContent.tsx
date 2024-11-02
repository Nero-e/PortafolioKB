import React from "react";

interface GalleryContentProps {
  children?: React.ReactNode;
  tittle?: string;
  text?: string;
}

export const GalleryContent = (props: GalleryContentProps) => {
  const { children, tittle, text } = props;
  return (
    <div className="flex flex-col flex-none justify-between items-center gap-y-5 w-[120%] h-full p-8">
      <div className="flex flex-col w-[70%] text-center">
        <h1 className="mb-1 mt-0 text-xl font-satoshi font-medium tracking-wider text-seasalt">
          {tittle}
        </h1>
        <p className="mb-3 text-sm font-satoshiItalic text-flash-white-200">
          {text}
        </p>
      </div>
      {children}
    </div>
  );
};
