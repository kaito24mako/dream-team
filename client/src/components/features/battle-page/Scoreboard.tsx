import { Link } from "react-router-dom";
import Button from "../../common/button/Button";

function Scoreboard({ winPercentage = 50, onStartBattle, battleFinished }) {
  return (
    <div className="bg-base-200 border-x border-b border-border w-fit mx-auto py-5 px-8 md:px-10 rounded-b-sm">
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-base md:text-lg">WIN PERCENTAGE</h3>
          <span className="text-4xl border border-black bg-base-100 py-1 px-8">
            {winPercentage}%
          </span>
        </div>

        {!battleFinished ? (
          <Button className="btn-info w-fit mx-auto" onClick={onStartBattle}>
            Start Match
          </Button>
        ) : (
          <Link to="/league">
            <Button className="btn-error w-fit mx-auto">Exit Match</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
export default Scoreboard;
