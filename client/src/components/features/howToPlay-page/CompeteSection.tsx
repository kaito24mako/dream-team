import levelScreenshot from "../../../assets/screenshots/level-ss.png";
import battleScreenshot from "../../../assets/screenshots/battle-ss.png";

function CompeteSection() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl text-secondary">Compete in Matches</h2>
      <div>
        <p>
          The players in your lineup will be used to compete in{" "}
          <span className="font-bold text-secondary">league matches</span>.
        </p>
      </div>

      <div className="collapse collapse-arrow bg-base-200 p-5">
        <input type="checkbox" />

        <h3 className="text-lg collapse-title p-0!">
          Difficulty Levels and Rewards
        </h3>
        <div className="collapse-content p-0! flex flex-col gap-3">
          <img
            src={levelScreenshot}
            alt="A single level with its details"
            className="w-170 rounded-lg border border-border-base shadow-sm mt-2"
          />
          <div className="flex flex-col gap-1">
            <p>
              There are{" "}
              <span className="font-bold text-secondary">
                ten difficulty levels
              </span>{" "}
              to choose from.
            </p>
            <p>
              Each level comprises of an opponent’s five-man lineup, with
              offensive and defensive statistics that are randomised within a
              set range of ratings.
            </p>
            <p>
              If you <span className="font-bold text-coin">win</span>, you
              receive a set amount of currency that you can use to open packs.
            </p>
            <p>
              If you <span className="font-bold text-error">lose</span>, you
              lose a set amount of currency.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-lg">Win Conditions</h3>
        <img
          src={battleScreenshot}
          alt="The battle page showcasing what it entails"
          className="w-170 rounded-lg border border-border-base shadow-sm"
        />
        <div className="flex flex-col gap-1">
          <p>
            On the scoreboard, the{" "}
            <span className="font-bold text-secondary">win percentage</span>{" "}
            determines the probability that you will win the match.
          </p>
          <p>
            Your{" "}
            <span className="font-bold text-secondary">
              win percentage increases by 10%
            </span>{" "}
            for each{" "}
            <span className="font-bold text-secondary">position match-up</span>{" "}
            that you win. There are five position match-ups in a match.
          </p>
          <p>
            You win a{" "}
            <span className="font-bold text-secondary">position match-up</span>{" "}
            if, for example, your player at the Point Guard position has a
            higher combined offensive and defensive score than the opponent’s
            Point Guard.
          </p>
          <p>
            Thus, if by the end of all five position match-ups your win
            percentage is at 80%, you still have a 20% chance of losing the
            match.
          </p>
        </div>
      </div>
    </div>
  );
}
export default CompeteSection;
