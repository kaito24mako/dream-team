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

function FullArtCard({
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
    <div className="hover-3d">
      <div
        className="relative w-37 h-65 md:w-40 lg:w-60 lg:h-85 font-secondary border border-border-base rounded-lg shadow-sm overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${playerRarityConversion})` }}
      >
        <img src={playerImageConversion} className="absolute" />
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
