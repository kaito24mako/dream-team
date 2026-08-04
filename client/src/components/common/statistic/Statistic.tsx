type Size = "small" | "medium" | "large";
type TextAlign = "center" | "end";

type Props = {
  title: string;
  count: number | string;
  titleSize?: Size;
  countSize: Size;
  textAlign: TextAlign;
};

function Statistic({
  title,
  count,
  titleSize = "small",
  countSize,
  textAlign,
}: Props) {
  const titleSizeClasses: Record<Size, string> = {
    small: "text-xs",
    medium: "text-base",
    large: "text-2xl",
  };
  const countSizeClasses: Record<Size, string> = {
    small: "text-xl",
    medium: "text-2xl",
    large: "text-4xl",
  };
  const textAlignClasses: Record<TextAlign, string> = {
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
