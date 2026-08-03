import Statistic from "../statistic/Statistic";

type Props = {
  playerImage;
  playerRarity;
  playerName: string;
  offenseCount: number;
  defenseCount: number;
};

function FullArtCard({
  playerImage,
  playerRarity,
  playerName,
  offenseCount,
  defenseCount,
}: Props) {
  return (
    <div className="hover-3d">
      <div
        className="relative w-60 h-85 border border-border-base rounded-lg shadow-sm overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${playerRarity})` }}
      >
        <img src={playerImage} className="absolute mx-auto" />

        {/* bottom half */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center gap-2 p-3 font-primary bg-base-300/15">
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
