import { Link } from "react-router-dom";
import Button from "../../common/button/Button";

type Props = {
  level: number;
  minRating: number;
  maxRating: number;
  opponentName: string;
  reward: number;
  loss: number;
};

function MatchItem({
  level,
  minRating,
  maxRating,
  opponentName,
  reward,
  loss,
}: Props) {
  return (
    <li className="flex justify-between items-center text-center text-sm lg:text-sm bg-base-300 p-4 px-6 rounded-sm">
      <div className="flex items-center gap-5 pr-10">
        <h4 className=" font-base! font-bold">Level {level}</h4>
        <div className="flex flex-col sm:flex-row opacity-87">
          <p className="mr-0 sm:mr-1">Ratings:</p>
          <p>
            {minRating} - {maxRating}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-end gap-5">
        <p className="hidden md:block opacity-87">VS {opponentName}</p>
        <p className="text-secondary">Reward: ${reward}</p>
        <p className="text-error">Loss: ${loss}</p>

        <Button size="small" bgColor="primary" textColor="black" link="/battle">
          Play
        </Button>
      </div>
    </li>
  );
}
export default MatchItem;
