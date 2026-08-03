import LineupPosition from "./LineupPosition";
import PlayerCard from "../../common/card/PlayerCard";
import FullArtCard from "../../common/card/FullArtCard";

import grid from "../../../assets/bg/grid-black.png";
import player1 from "../../../assets/card/player/player-1.png";
import common from "../../../assets/card/bg/common-bg.png";
import rare from "../../../assets/card/bg/rare-bg.png";
import superstar from "../../../assets/card/bg/superstar-bg.png";
import legendary from "../../../assets/card/bg/legendary-bg.png";

function LineupSection() {
  return (
    <section className="mt-6">
      <h2 className="text-2xl mb-3">😤 STARTING LINEUP</h2>

      <div
        className="bg-cover bg-full border border-border p-7"
        style={{ backgroundImage: `url(${grid})` }}
      >
        <div className="flex justify-between flex-wrap">
          <LineupPosition position="PG">
            <PlayerCard
              playerImage={player1}
              playerRarity={common}
              playerPosition="PG"
              playerName="Kaito Watanabe"
              offenseCount={89}
              defenseCount={92}
            />
          </LineupPosition>
          <LineupPosition position="SG">
            <PlayerCard
              playerImage={player1}
              playerRarity={rare}
              playerPosition="SG"
              playerName="Kaito Watanabe"
              offenseCount={89}
              defenseCount={92}
            />
          </LineupPosition>
          <LineupPosition position="SF">
            <PlayerCard
              playerImage={player1}
              playerRarity={superstar}
              playerPosition="SF"
              playerName="Kaito Watanabe"
              offenseCount={89}
              defenseCount={92}
            />
          </LineupPosition>
          <LineupPosition position="PF">
            <FullArtCard
              playerImage={player1}
              playerRarity={legendary}
              playerPosition="PF"
              playerName="Kaito Watanabe"
              offenseCount={89}
              defenseCount={92}
            />
          </LineupPosition>
          <LineupPosition position="C">
            <PlayerCard
              playerImage={player1}
              playerRarity={common}
              playerPosition="C"
              playerName="Kaito Watanabe"
              offenseCount={89}
              defenseCount={92}
            />
          </LineupPosition>
        </div>
      </div>
    </section>
  );
}
export default LineupSection;
