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
import player11 from "../../../assets/card/player/player11.png";
import player12 from "../../../assets/card/player/player12.png";
import player13 from "../../../assets/card/player/player13.png";
import player14 from "../../../assets/card/player/player14.png";
import player15 from "../../../assets/card/player/player15.png";
import player16 from "../../../assets/card/player/player16.png";
import player17 from "../../../assets/card/player/player17.png";
import player18 from "../../../assets/card/player/player18.png";
import player19 from "../../../assets/card/player/player19.png";
import player20 from "../../../assets/card/player/player20.png";
import player21 from "../../../assets/card/player/player21.png";
import player22 from "../../../assets/card/player/player22.png";
import player23 from "../../../assets/card/player/player23.png";
import player24 from "../../../assets/card/player/player24.png";
import player25 from "../../../assets/card/player/player25.png";
import player26 from "../../../assets/card/player/player26.png";
import player27 from "../../../assets/card/player/player27.png";
import player28 from "../../../assets/card/player/player28.png";
import player29 from "../../../assets/card/player/player29.png";
import player30 from "../../../assets/card/player/player30.png";
import player31 from "../../../assets/card/player/player31.png";
import player32 from "../../../assets/card/player/player32.png";
import player33 from "../../../assets/card/player/player33.png";
import player34 from "../../../assets/card/player/player34.png";
import player35 from "../../../assets/card/player/player35.png";
import player36 from "../../../assets/card/player/player36.png";
import player37 from "../../../assets/card/player/player37.png";
import player38 from "../../../assets/card/player/player38.png";
import player39 from "../../../assets/card/player/player39.png";
import player40 from "../../../assets/card/player/player40.png";
import player41 from "../../../assets/card/player/player41.png";
import player42 from "../../../assets/card/player/player42.png";
import player43 from "../../../assets/card/player/player43.png";
import player44 from "../../../assets/card/player/player44.png";
import player45 from "../../../assets/card/player/player45.png";
import player46 from "../../../assets/card/player/player46.png";
import player47 from "../../../assets/card/player/player47.png";
import player48 from "../../../assets/card/player/player48.png";
import player49 from "../../../assets/card/player/player49.png";
import player50 from "../../../assets/card/player/player50.png";
import player51 from "../../../assets/card/player/player51.png";
import player52 from "../../../assets/card/player/player52.png";
import player53 from "../../../assets/card/player/player53.png";
import player54 from "../../../assets/card/player/player54.png";
import player55 from "../../../assets/card/player/player55.png";
import player56 from "../../../assets/card/player/player56.png";
import player57 from "../../../assets/card/player/player57.png";
import player58 from "../../../assets/card/player/player58.png";
import player59 from "../../../assets/card/player/player59.png";
import player60 from "../../../assets/card/player/player60.png";

type Props = {
  is3D?: boolean;
  playerImage: string;
  playerRarity: string;
  playerPosition: string;
  playerName: string;
  offenseCount: number;
  defenseCount: number;
};

function RegularCard({
  is3D = true,
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
    player11,
    player12,
    player13,
    player14,
    player15,
    player16,
    player17,
    player18,
    player19,
    player20,
    player21,
    player22,
    player23,
    player24,
    player25,
    player26,
    player27,
    player28,
    player29,
    player30,
    player31,
    player32,
    player33,
    player34,
    player35,
    player36,
    player37,
    player38,
    player39,
    player40,
    player41,
    player42,
    player43,
    player44,
    player45,
    player46,
    player47,
    player48,
    player49,
    player50,
    player51,
    player52,
    player53,
    player54,
    player55,
    player56,
    player57,
    player58,
    player59,
    player60,
  };
  const playerImageConversion = image[playerImage];

  return (
    <div className={is3D ? "hover-3d" : undefined}>
      <div className="w-37 h-65 md:w-40 lg:w-60 lg:h-85 font-secondary border border-border-base rounded-lg shadow-sm overflow-hidden">
        {/* top half */}
        <div
          className="relative h-38 lg:h-58 bg-base-300 bg-cover bg-center"
          style={{ backgroundImage: `url(${playerRarityConversion})` }}
        >
          <img
            src={playerImageConversion}
            className="w-27 h-38 lg:w-40 lg:h-58 mx-auto"
          />
          <p className="absolute top-2 lg:top-1.5 left-3 text-sm lg:text-lg">
            {playerPosition}
          </p>
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
