interface TechBadgeProps {
  src: string;
}

export const TechBadge = ({ src }: TechBadgeProps) => {
  return (
    <div
      className=" bg-[#0f0f0f] w-[64px] h-[64px] rounded-2xl mt-[25px] p-[1px] bg-center border-custom shadow-sm shadow-[#202020]"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "auto 75px",
        backgroundRepeat: "no-repeat",
      }}
    />
  );  
};
// '/images/figma.png'
