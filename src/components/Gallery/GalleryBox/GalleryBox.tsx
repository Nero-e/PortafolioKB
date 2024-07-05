import { GradientBox } from "./GradientBox";
import { ContentBox } from "./ContentBox";

interface GalleryBoxProps {
  children?: React.ReactNode;
  className?: string;
}
export const GalleryBox = ({ children, className }: GalleryBoxProps) => {
  return (
    <ContentBox>{children}</ContentBox>
  );
};
