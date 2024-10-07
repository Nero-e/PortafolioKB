interface TechDescriptionProps {
  title: string;
  description?: string;
}

export const TechDescription = ({
  title,
  description,
}: TechDescriptionProps) => {
  return (
    <div className="flex flex-col justify-center items-center text-center space-y-1">
      <h1 className="text-seasalt text-[26px] font-satochi font-bold">
        {title}
      </h1>
      <p className="text-anti-flash-white-200 text-sm font-satochi">
        {description}{" "}
      </p>
    </div>
  );
};
