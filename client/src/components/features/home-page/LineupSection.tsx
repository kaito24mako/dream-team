import PlayerCard from "../../common/card/PlayerCard";

import grid from "../../../assets/bg/grid-black.png";
import player1 from "../../../assets/card/player/player-1.png";
import common from "../../../assets/card/bg/common-bg.png";
import rare from "../../../assets/card/bg/rare-bg.png";
import superstar from "../../../assets/card/bg/superstar-bg.png";
import legendary from "../../../assets/card/bg/legendary-bg.png";
import FullArtCard from "../../common/card/FullArtCard";

function LineupSection() {
  return (
    <section className="mt-6">
      <h2 className="text-2xl mb-3">😤 STARTING LINEUP</h2>

      <div
        className="bg-cover bg-full border border-border p-7"
        style={{ backgroundImage: `url(${grid})` }}
      >
        <div className="flex justify-between flex-wrap">
          <PlayerCard
            playerImage={player1}
            playerRarity={common}
            playerName="Kaito Watanabe"
            offenseCount={89}
            defenseCount={92}
          />
          <PlayerCard
            playerImage={player1}
            playerRarity={rare}
            playerName="Kaito Watanabe"
            offenseCount={89}
            defenseCount={92}
          />
          <PlayerCard
            playerImage={player1}
            playerRarity={superstar}
            playerName="Kaito Watanabe"
            offenseCount={89}
            defenseCount={92}
          />
          <FullArtCard
            playerImage={player1}
            playerRarity={legendary}
            playerName="Kaito Watanabe"
            offenseCount={89}
            defenseCount={92}
          />
          <PlayerCard
            playerImage={player1}
            playerRarity={common}
            playerName="Kaito Watanabe"
            offenseCount={89}
            defenseCount={92}
          />
        </div>
      </div>
    </section>
  );
}
export default LineupSection;
