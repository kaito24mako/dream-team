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
    <div className="flex gap-10 lg:gap-30 items-center bg-base-300 p-4 pl-6 rounded-sm">
      <div className="flex items-center gap-5">
        <h4 className="font-base! font-bold">Level {level}</h4>
        <p className="opacity-87">
          Ratings: {minRating} - {maxRating}
        </p>
      </div>

      <div className="flex items-center gap-5">
        <p className="opacity-87">VS {opponentName}</p>
        <p className="text-secondary">Reward: ${reward}</p>
        <button className="btn btn-primary btn-sm text-black">
          Enter: ${cost}
        </button>
      </div>
    </div>
  );
}
export default MatchItem;
