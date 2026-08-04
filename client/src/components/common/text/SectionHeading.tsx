import type { IconType } from "react-icons";
import Divider from "../divider/Divider";

type Props = {
  heading: string;
  Icon?: IconType;
  divider?: boolean;
};

function SectionHeading({ heading, Icon, divider = false }: Props) {
  return (
    <>
      <div className="flex items-center gap-2 mb-3">
        {Icon && <Icon className="w-7 h-7 text-secondary" />}
        <h2 className="text-2xl">{heading}</h2>
      </div>
      {divider && <Divider />}
    </>
  );
}
export default SectionHeading;
