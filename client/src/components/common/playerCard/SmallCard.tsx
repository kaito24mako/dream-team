import Statistic from "../statistic/Statistic";

type Props = {
  playerImage: string;
  playerRarity: string;
  playerPosition: string;
  playerName: string;
  offenseCount: number;
  defenseCount: number;
  isEnemy?: boolean;
};

function SmallCard({
  playerImage,
  playerRarity,
  playerPosition,
  playerName,
  offenseCount,
  defenseCount,
  isEnemy = false,
}: Props) {
  return (
    <div className="hover-3d">
      <div className="w-30 h-40 lg:w-40 lg:h-55 font-secondary border border-border-base rounded-lg shadow-sm overflow-hidden">
        {/* top half */}
        <div
          className="relative h-20 lg:h-30 bg-base-300 bg-cover bg-center"
          style={{ backgroundImage: `url(${playerRarity})` }}
        >
          <img
            src={playerImage}
            className={`${isEnemy && "w-20! lg:w-29!"} w-15 h-20 lg:w-23 lg:h-30 mx-auto`}
          />
          <p className="absolute top-1 lg:top-0.5 left-2 text-xs lg:text-base">
            {playerPosition}
          </p>
        </div>

        {/* bottom half */}
        <div className="flex flex-col items-center justify-center gap-1 lg:gap-2 h-20 lg:h-25 bg-base-200 text-center">
          <p className="text-xs lg:text-sm">{playerName}</p>

          <div className="flex gap-3 lg:gap-4">
            <Statistic
              title="Offense"
              count={offenseCount}
              titleSize="xs"
              countSize="xs"
              textAlign="centerRigid"
              titleOpacity="opacity-80"
            />
            <Statistic
              title="Defense"
              count={defenseCount}
              titleSize="xs"
              countSize="xs"
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

export default SmallCard;
