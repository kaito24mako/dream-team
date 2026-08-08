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
    <div className="flex flex-col justify-center gap-3 lg:gap-5 lg:min-h-[80dvh]">
      <div className="flex items-end gap-3">
        {Icon && <Icon className="w-11 h-11 lg:w-13 lg:h-13 text-primary" />}

        <h2 className="text-4xl lg:text-5xl text-start">{heading}</h2>
      </div>

      <div className="text-base md:text-xl lg:text-2xl text-start">
        <p className="opacity-80">{description}</p>
        <p className="opacity-80">{descriptionTwo}</p>
      </div>
      {children}
    </div>
  );
}
export default ScrollableItem;
