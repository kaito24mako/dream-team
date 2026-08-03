import PlayerCard from "../../common/card/PlayerCard";

import grid from "../../../assets/bg/grid-black.png";
import player1 from "../../../assets/card/player/player-1.png";
import player1Rarity from "../../../assets/card/bg/common-bg.png";

function LineupSection() {
  return (
    <section className="mt-6">
      <h2 className="text-2xl mb-3">😤 STARTING LINEUP</h2>

      <div
        className="bg-cover bg-full border border-border p-7"
        style={{ backgroundImage: `url(${grid})` }}
      >
        <PlayerCard
          playerImage={player1}
          playerRarity={player1Rarity}
          playerName="Kaito Watanabe"
          offenseCount={89}
          defenseCount={92}
        />
      </div>
    </section>
  );
}
export default LineupSection;
