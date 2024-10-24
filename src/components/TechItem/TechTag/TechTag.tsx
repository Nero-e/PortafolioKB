type TechTagVariant = "design" | "productivity" | "development" | "code";

interface TechTagProps {
  variant: TechTagVariant;
}

export const TechTag = ({ variant }: TechTagProps) => {
  const getVariantStyles = (variant: TechTagVariant) => {
    switch (variant) {
      case "design":
        return {
          className: "bg-[#e9b7723b] border-[#ffc72085] text-[#ffc720]",
          tagName: "design",
        };
      case "productivity":
        return {
          className: "bg-[#ff49753b] border-[#ff497585] text-[#ff4975]",
          tagName: "productivity",
        };
      case "development":
        return {
          className: "bg-[#00b2ee3b] border-[#00b2ee85] text-[#00b2ee]",
          tagName: "development",
        };
      case "code":
        return {
          className: "bg-[#3ec25b40] border-[#3ec25b] text-[#3ec25b]",
          tagName: "code",
        };
    }
  };
  const { className, tagName } = getVariantStyles(variant);
  return (
    <div
      className={`px-[7px] py-[5px] rounded-[7px] border-[1px] ${className} opacity-80`}
    >
      <h6 className="text-[12px] uppercase tracking-wider font-satochi">
        {tagName}
      </h6>
    </div>
  );
};
