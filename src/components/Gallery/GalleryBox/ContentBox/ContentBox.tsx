import React from "react";

interface ContentBoxProps {
    children?: React.ReactNode;
    className?: string;
}

export const ContentBox = ({children, className}: ContentBoxProps) => {
    return (
        <div className={`flex flex-col justify-between w-full h-[35vh] md:h-full md:min-h-[22vw] items-center rounded-[4vw] bg-eerie-black text-seasalt overflow-hidden p-10`}>
            {children}
        </div>
    )
};
