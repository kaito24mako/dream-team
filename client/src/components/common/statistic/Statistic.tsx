function Statistic({
  title,
  count,
  titleSize = "small",
  countSize,
  textAlign,
}: {
  title: string;
  count: number | string;
  titleSize?: string;
  countSize: string;
  textAlign: string;
}) {
  const titleSizeClasses = {
    small: "text-xs",
    medium: "text-base",
    large: "text-2xl",
  };
  const countSizeClasses = {
    small: "text-xl",
    medium: "text-2xl",
    large: "text-4xl",
  };
  const textAlignClasses = {
    center: "text-center",
    end: "text-end",
  };

  return (
    <div className="flex flex-col">
      <p className={`${titleSizeClasses[titleSize]}`}>{title}</p>
      <span
        className={`${countSizeClasses[countSize]} ${textAlignClasses[textAlign]} font-secondary`}
      >
        {count}
      </span>
    </div>
  );
}
export default Statistic;
