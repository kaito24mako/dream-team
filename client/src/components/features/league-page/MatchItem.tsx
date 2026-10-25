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
    <li className="grid items-center gap-4 rounded-sm bg-base-300 p-4 text-sm sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-6">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-1 lg:justify-start">
          <h4 className="font-base! font-bold">Level {level}</h4>
          <p className="opacity-87">
            Ratings: {minRating} - {maxRating}
          </p>
        </div>
        <p className="mt-1 opacity-87 wrap-break-word">VS {opponentName}</p>
      </div>

      <div className="grid grid-cols-2 items-center gap-4 text-center sm:grid-cols-[auto_auto_minmax(0,1fr)] sm:gap-5">
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

        <div className="col-span-2 flex flex-col gap-2 sm:col-span-1 sm:items-end">
          {locked !== "none" && (
            <p className="text-error sm:text-right">
              {locked === "currency" && "Not enough currency"}
              {locked === "lineup" && "Need a full lineup"}
            </p>
          )}
          <Button
            className="w-full sm:w-auto"
            size="small"
            bgColor="primary"
            textColor="black"
            onClick={handleToPlay}
            disabled={locked !== "none"}
          >
            {locked !== "none" ? "Locked" : "Play"}
          </Button>
        </div>
      </div>
    </li>
  );
}
export default MatchItem;
