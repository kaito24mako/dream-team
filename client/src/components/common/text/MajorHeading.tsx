import type { IconType } from "react-icons";
import Divider from "../divider/Divider";

type Props = {
  heading: string;
  Icon?: IconType;
  divider?: boolean;
  description?: string;
};

function MajorHeading({ heading, Icon, divider = false, description }: Props) {
  return (
    <>
      <div className="flex flex-col items-start gap-2 mb-3">
        <div className="flex gap-3 items-center">
          {Icon && <Icon className="w-7 h-7 text-secondary" />}
          <h2 className="text-3xl text-primary">{heading}</h2>
        </div>

        <p>{description}</p>
      </div>
      {divider && <Divider />}
    </>
  );
}
export default MajorHeading;
