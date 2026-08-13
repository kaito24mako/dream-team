import Statistic from "../statistic/Statistic";

// player rarities
import Common from "../../../assets/card/rarity/common-bg.png";
import Rare from "../../../assets/card/rarity/rare-bg.png";
import Superstar from "../../../assets/card/rarity/superstar-bg.png";
import Legendary from "../../../assets/card/rarity/legendary-bg.png";

// player images
import player1 from "../../../assets/card/player/player1.png";
import player2 from "../../../assets/card/player/player2.png";
import player3 from "../../../assets/card/player/player3.png";
import player4 from "../../../assets/card/player/player4.png";
import player5 from "../../../assets/card/player/player5.png";
import player6 from "../../../assets/card/player/player6.png";
import player7 from "../../../assets/card/player/player7.png";
import player8 from "../../../assets/card/player/player8.png";
import player9 from "../../../assets/card/player/player9.png";
import player10 from "../../../assets/card/player/player10.png";

type Props = {
  playerImage: string;
  playerRarity: string;
  playerPosition: string;
  playerName: string;
  offenseCount: number;
  defenseCount: number;
};

function FullArtCardXS({
  playerImage,
  playerRarity,
  playerPosition,
  playerName,
  offenseCount,
  defenseCount,
}: Props) {
  // to connect the player data's 'rarity' value to an imported asset...
  const rarityBg: Record<string, string> = {
    Common,
    Rare,
    Superstar,
    Legendary,
  };
  const playerRarityConversion = rarityBg[playerRarity];

  // image conversion
  const image: Record<string, string> = {
    player1,
    player2,
    player3,
    player4,
    player5,
    player6,
    player7,
    player8,
    player9,
    player10,
  };
  const playerImageConversion = image[playerImage];

  return (
    <div
      className="relative w-30 h-40 lg:w-38 lg:h-55 font-secondary border border-border-base rounded-lg shadow-sm overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${playerRarityConversion})` }}
    >
      <img src={playerImageConversion} className="absolute" />
      <p className="absolute top-1 lg:top-0.5 left-2 text-xs lg:text-base">
        {playerPosition}
      </p>

      {/* bottom half */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center text-center gap-2 h-20 lg:h-25 bg-base-300/50">
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

export default FullArtCardXS;
