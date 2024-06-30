import { GradientBox } from "./GradientBox"
import { ContentBox } from "./ContentBox"

interface GalleryBoxProps {
    children?: React.ReactNode;
    className?: string;
}
export const GalleryBox = ({children, className}: GalleryBoxProps) => {
    return (
        <div className={`p-[1vw] ${className}`}>
      <GradientBox>
        <ContentBox>
          {children}
        </ContentBox>
      </GradientBox>
    </div>
    )
}