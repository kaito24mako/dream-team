import { Link } from "react-router-dom";
import Button from "../../common/button/Button";
import CurrencyItem from "../league-page/CurrencyItem";

function Scoreboard({
  winPercentage = 50,
  battleStarted,
  battleFinished,
  isWinner,
  onStartBattle,
  selectedOpponent,
}) {
  return (
    <div className="w-fit mx-auto rounded-b-md border-x border-b border-border bg-base-200 px-5 py-4 shadow-md md:px-8">
      <div className="flex min-h-24 items-center gap-5 md:gap-7">
        <div className="flex flex-col items-center">
          <h3 className="text-base tracking-wide opacity-80">Win Chance</h3>
          <span className="min-w-28 rounded-sm bg-base-100 px-5 py-2 text-center text-3xl font-semibold">
            {winPercentage}%
          </span>
        </div>

        {!battleStarted ? (
          <Button
            className="btn-info min-w-30 shadow-sm"
            onClick={onStartBattle}
          >
            Start Match
          </Button>
        ) : battleFinished ? (
          <div className="flex min-w-38 flex-col items-center gap-2 text-center">
            <h3
              className={`text-lg font-bold ${isWinner ? "text-secondary" : "text-error"}`}
            >
              {isWinner ? "Victory!" : "Defeat"}
            </h3>
            <div className="rounded-sm border border-border bg-base-100 px-3 py-1.5 text-sm shadow-sm">
              {isWinner ? (
                <CurrencyItem
                  heading="Reward"
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
            </div>
            <Link to="/league">
              <Button size="small" className="btn-error min-w-28">
                Exit Match
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex min-w-30 flex-col items-center gap-2 text-center">
            <span className="loading loading-spinner loading-sm text-primary" />
            <span className="text-sm font-semibold tracking-wide opacity-80">
              BATTLING
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
export default Scoreboard;
