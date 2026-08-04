type Props = {
  level: number;
  minRating: number;
  maxRating: number;
  opponentName: string;
  reward: number;
  cost: number;
};

function MatchItem({
  level,
  minRating,
  maxRating,
  opponentName,
  reward,
  cost,
}: Props) {
  return (
    <div className="flex gap-13 text-center lg:gap-30 items-center bg-base-300 p-4 pl-6 rounded-sm">
      <div className="flex items-center gap-5">
        <h4 className="text-sm lg:text-base font-base! font-bold">
          Level {level}
        </h4>
        <div className="flex flex-col sm:flex-row text-sm lg:text-base opacity-87">
          <p className="mr-0 sm:mr-1">Ratings:</p>
          <p>
            {minRating} - {maxRating}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <p className="hidden md:block text-sm lg:text-base opacity-87">
          VS {opponentName}
        </p>
        <p className="text-sm lg:text-base text-secondary">Reward: ${reward}</p>
        <button className="btn btn-primary btn-sm text-black">
          Enter: ${cost}
        </button>
      </div>
    </div>
  );
}
export default MatchItem;
