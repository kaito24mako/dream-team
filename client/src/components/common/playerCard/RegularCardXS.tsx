import Statistic from "../statistic/Statistic";

// player rarities
import Common from "../../../assets/card/rarity/common-bg.png";
import Rare from "../../../assets/card/rarity/rare-bg.png";
import Superstar from "../../../assets/card/rarity/superstar-bg.png";
import Legendary from "../../../assets/card/rarity/legendary-bg.png";

type Props = {
  playerImage: string;
  playerRarity: string;
  playerPosition: string;
  playerName: string;
  offenseCount: number;
  defenseCount: number;
  isEnemy?: boolean;
};

function RegularCardXS({
  playerImage,
  playerRarity,
  playerPosition,
  playerName,
  offenseCount,
  defenseCount,
  isEnemy = false,
}: Props) {
  const rarityBg: Record<string, string> = {
    Common,
    Rare,
    Superstar,
    Legendary,
  };
  const playerRarityConversion = rarityBg[playerRarity];

  const playerImageConversion = `${import.meta.env.VITE_BACKEND_URL}${playerImage}`;

  return (
    <div className="w-30 h-40 lg:w-38 lg:h-55 font-base border border-border-base rounded-lg shadow-sm overflow-hidden">
      {/* top half */}
      <div
        className="relative h-22 lg:h-33 bg-base-300 bg-cover bg-center"
        style={{
          backgroundImage: `url(${isEnemy ? playerRarity : playerRarityConversion})`,
        }}
      >
        <img
          src={isEnemy ? playerImage : playerImageConversion}
          className={`${isEnemy && "w-22! lg:w-30!"} w-16 h-22 lg:w-23 lg:h-33 mx-auto`}
        />
        <p className="absolute top-1 lg:top-0.5 left-2 text-xs lg:text-base">
          {playerPosition}
        </p>
      </div>

      {/* bottom half */}
      <div className="flex flex-col items-center justify-center gap-1 lg:gap-2 h-18 lg:h-22 bg-base-200 text-center">
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
  );
}

export default RegularCardXS;
