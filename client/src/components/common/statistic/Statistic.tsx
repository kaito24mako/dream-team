type Size = "small" | "medium" | "large";
type TextAlign = "center" | "centerRigid" | "end";

type Props = {
  title: string;
  count: number | string;
  titleSize?: Size;
  countSize: Size;
  textAlign: TextAlign;
  titleOpacity?: string;
};

function Statistic({
  title,
  count,
  titleSize = "small",
  countSize,
  textAlign,
  titleOpacity = "",
}: Props) {
  const titleSizeClasses: Record<Size, string> = {
    small: "text-xs",
    medium: "text-base",
    large: "text-2xl",
  };
  const countSizeClasses: Record<Size, string> = {
    small: "text-base lg:text-xl",
    medium: "text-xl lg:text-2xl",
    large: "text-3xl lg:text-4xl",
  };
  const textAlignClasses: Record<TextAlign, string> = {
    center: "text-start sm:text-center",
    centerRigid: "text-center",
    end: "text-start sm:text-end",
  };

  return (
    <div className="flex flex-col">
      <p className={`${titleSizeClasses[titleSize]} ${titleOpacity}`}>
        {title}
      </p>
      <span
        className={`${countSizeClasses[countSize]} ${textAlignClasses[textAlign]} font-secondary`}
      >
        {count}
      </span>
    </div>
  );
}
export default Statistic;
