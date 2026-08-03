import Statistic from "../statistic/Statistic";

type Props = {
  playerImage;
  playerName: string;
  offenseCount: number;
  defenseCount: number;
};

function PlayerCard({
  playerImage,
  playerName,
  offenseCount,
  defenseCount,
}: Props) {
  return (
    <div className="w-60 h-85 border border-border-base rounded-md overflow-hidden">
      <div className="h-55 bg-base-200">
        <img src={playerImage} className="h-55 w-40 mx-auto" />
      </div>

      <div className="flex flex-col items-center justify-center gap-2 h-29.5 font-base bg-base-300">
        <p className="text-xl">{playerName}</p>
        <div className="flex gap-4">
          <Statistic
            title="Offense"
            count={offenseCount}
            titleSize="small"
            countSize="small"
            textAlign="center"
          />
          <Statistic
            title="Defense"
            count={defenseCount}
            titleSize="small"
            countSize="small"
            textAlign="center"
          />
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
