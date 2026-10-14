import { useNavigate } from "react-router-dom";
import { useUser } from "../../../utils/context/UserContext.jsx";
import { useLineup } from "../../../utils/context/LineupContext.jsx";

import Button from "../../common/button/Button";
import CurrencyItem from "./CurrencyItem";

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
  const navigate = useNavigate();
  const { user } = useUser();
  const { lineup } = useLineup();

  // instead of state, use a variable to calculate per render
  const locked =
    lineup.length < 5 ? "lineup" : user.currency < loss ? "currency" : "none";

  function handleToPlay() {
    if (locked === "none") {
      navigate(`/league/match/lvl${level}`);
    }
  }

  return (
    <li className="flex justify-between items-center text-center text-sm lg:text-sm bg-base-300 py-4 px-4 sm:px-6 rounded-sm">
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
        <CurrencyItem
          heading="Win"
          headingColor="text-secondary"
          currency={reward}
          currencyColor="text-coin"
        />
        <CurrencyItem
          heading="Loss"
          headingColor="text-error"
          currency={loss}
          currencyColor="text-red-500"
        />

        <p className="text-error">
          {locked === "currency" && "Not enough currency"}
          {locked === "lineup" && "Need a full lineup"}
        </p>
        <Button
          size="small"
          bgColor="primary"
          textColor="black"
          onClick={handleToPlay}
          disabled={locked !== "none"}
        >
          {locked !== "none" ? "Locked" : "Play"}
        </Button>
      </div>
    </li>
  );
}
export default MatchItem;
