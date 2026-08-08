import type { IconType } from "react-icons";

function ScrollableItem({
  children,
  Icon,
  heading,
  description,
  descriptionTwo,
}: {
  children: React.ReactNode;
  Icon?: IconType;
  heading: string;
  description: string;
  descriptionTwo?: string;
}) {
  return (
    <div className="flex flex-col justify-center gap-3 md:gap-5 md:min-h-[80dvh]">
      <div className="flex items-end gap-3">
        {Icon && <Icon className="w-11 h-11 md:w-13 md:h-13 text-primary" />}

        <h2 className="text-4xl md:text-5xl text-start">{heading}</h2>
      </div>

      <div className="text-base md:text-2xl text-start">
        <p className="opacity-80">{description}</p>
        <p className="opacity-80">{descriptionTwo}</p>
      </div>
      {children}
    </div>
  );
}
export default ScrollableItem;
