import Statistic from "../statistic/Statistic";

type Props = {
  playerImage: string;
  playerRarity: string;
  playerPosition: string;
  playerName: string;
  offenseCount: number;
  defenseCount: number;
};

function FullArtCard({
  playerImage,
  playerRarity,
  playerPosition,
  playerName,
  offenseCount,
  defenseCount,
}: Props) {
  return (
    <div className="hover-3d">
      <div
        className="relative w-37 h-65 md:w-40 lg:w-60 lg:h-85 border border-border-base rounded-lg shadow-sm font-primary overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${playerRarity})` }}
      >
        <img src={playerImage} className="absolute mx-auto" />
        <p className="text-base lg:text-lg absolute top-1 left-3">
          {playerPosition}
        </p>

        {/* bottom half */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center gap-2 p-3 bg-base-300/25">
          <p className="text-xl lg:text-2xl text-center">{playerName}</p>

          <div className="flex gap-4">
            <Statistic
              title="Offense"
              count={offenseCount}
              titleSize="small"
              countSize="small"
              textAlign="centerRigid"
              titleOpacity="opacity-87"
            />
            <Statistic
              title="Defense"
              count={defenseCount}
              titleSize="small"
              countSize="small"
              textAlign="centerRigid"
              titleOpacity="opacity-87"
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

export default FullArtCard;
