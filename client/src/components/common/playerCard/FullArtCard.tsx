import Statistic from "../statistic/Statistic";

// player rarities
import Common from "../../../assets/card/rarity/common-bg.png";
import Rare from "../../../assets/card/rarity/rare-bg.png";
import Superstar from "../../../assets/card/rarity/superstar-bg.png";
import Legendary from "../../../assets/card/rarity/legendary-bg.png";

type Props = {
  is3D?: boolean;
  playerImage: string;
  playerRarity: string;
  playerPosition: string;
  playerName: string;
  offenseCount: number;
  defenseCount: number;
  pointerCursor?: boolean;
  onClick?: () => void;
};

function FullArtCard({
  is3D = true,
  playerImage,
  playerRarity,
  playerPosition,
  playerName,
  offenseCount,
  defenseCount,
  pointerCursor = false,
  onClick,
}: Props) {
  // to connect the player data's 'rarity' value to an imported asset
  const rarityBg: Record<string, string> = {
    Common,
    Rare,
    Superstar,
    Legendary,
  };

  const playerRarityConversion = rarityBg[playerRarity];

  // get the image url for each player
  const playerImageConversion = `${import.meta.env.VITE_BACKEND_URL}${playerImage}`;

  return (
    <div
      className={`${is3D ? "hover-3d" : undefined} ${pointerCursor ? "cursor-pointer" : ""}`}
      onClick={onClick}
    >
      <div
        className="relative w-37 h-65 md:w-40 lg:w-60 lg:h-85 font-base border border-border-base rounded-lg shadow-sm overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${playerRarityConversion})` }}
      >
        <img src={playerImageConversion} className="absolute pt-7 md:p-0" />
        <p className="absolute top-2 lg:top-1.5 left-3 text-sm lg:text-lg">
          {playerPosition}
        </p>

        {/* bottom half */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center gap-2 h-27 bg-base-300/40">
          <p className="text-sm lg:text-lg">{playerName}</p>

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
