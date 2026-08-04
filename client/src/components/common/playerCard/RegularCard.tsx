import Statistic from "../statistic/Statistic";

type Props = {
  playerImage: string;
  playerRarity: string;
  playerPosition: string;
  playerName: string;
  offenseCount: number;
  defenseCount: number;
};

function RegularCard({
  playerImage,
  playerRarity,
  playerPosition,
  playerName,
  offenseCount,
  defenseCount,
}: Props) {
  return (
    <div className="hover-3d">
      <div className="w-35 h-65 md:w-40 lg:w-60 lg:h-85 border border-border-base rounded-lg shadow-sm overflow-hidden font-secondary">
        {/* top half */}
        <div
          className="relative h-38 lg:h-58 bg-base-300 bg-cover bg-center"
          style={{ backgroundImage: `url(${playerRarity})` }}
        >
          <img
            src={playerImage}
            className="w-27 h-38 lg:w-40 lg:h-58 mx-auto"
          />
          <p className="absolute top-1 left-3">{playerPosition}</p>
        </div>

        {/* bottom half */}
        <div className="flex flex-col items-center justify-center gap-2 h-27 bg-base-200">
          <p className="text-sm lg:text-lg">{playerName}</p>

          <div className="flex gap-4">
            <Statistic
              title="Offense"
              count={offenseCount}
              titleSize="small"
              countSize="small"
              textAlign="centerRigid"
              titleOpacity="opacity-80"
            />
            <Statistic
              title="Defense"
              count={defenseCount}
              titleSize="small"
              countSize="small"
              textAlign="centerRigid"
              titleOpacity="opacity-80"
            />
          </div>
        </div>
      </div>

      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default RegularCard;
