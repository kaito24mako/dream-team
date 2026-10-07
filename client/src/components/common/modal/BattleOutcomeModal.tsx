import { Link, useParams } from "react-router-dom";
import { getSelectedOpponent } from "../../../utils/helpers/getOpponents";

import Button from "../button/Button";
import CurrencyItem from "../../features/league-page/CurrencyItem";

function BattleOutcomeModal({ ...props }) {
  // use the level param to find the opponent chosen in the league page
  const { levelSlug } = useParams();
  const level = Number(levelSlug.replace("lvl", ""));
  const selectedOpponent = getSelectedOpponent(level);

  return (
    <div
      className="fixed flex items-center justify-center bg-black/60 px-4 inset-0 z-50"
      // onClick={() => {
      //   props.setViewResults(false);
      // }}
    >
      <div
        className="flex flex-col items-center text-center gap-5 w-full max-w-sm rounded-lg bg-base-100 p-6 md:p-8 text-base-content shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {props.isWinner ? (
          <h2 className="text-xl">Your team won!</h2>
        ) : (
          <h2 className="text-xl">Your team lost...</h2>
        )}

        <div>
          <p>Level {selectedOpponent.level}</p>
          <p>Win percentage: {props.winPercentage}%</p>
          <p>Won {props.matchupWins} out of 5 matchups</p>
        </div>

        <div>
          {props.isWinner ? (
            <CurrencyItem
              heading="Gained"
              headingColor="text-secondary"
              currency={selectedOpponent.reward}
              currencyColor="text-coin"
            />
          ) : (
            <CurrencyItem
              heading="Lost"
              headingColor="text-error"
              currency={selectedOpponent.loss}
              currencyColor="text-red-500"
            />
          )}

          <Link to="/league">
            <Button size="small" className="btn-error w-fit mt-2">
              Exit Match
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default BattleOutcomeModal;
