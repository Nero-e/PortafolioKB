import React from "react";
export const GradientBox = ({children}:{children: React.ReactNode}) => {
    return (
        <div className="w-full h-full p-[1px] rounded-[4vw] bg-gradient text-seasalt cursor-pointer">
            {children}
        </div>
    )
}