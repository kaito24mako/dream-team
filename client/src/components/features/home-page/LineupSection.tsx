import { RiTeamLine } from "react-icons/ri";

import SectionHeading from "../../common/text/SectionHeading";
import PlayerCardList from "../../common/playerCard/PlayerCardList";
import LineupPosition from "./LineupPosition";
import RegularCard from "../../common/playerCard/RegularCard";
import FullArtCard from "../../common/playerCard/FullArtCard";

import grid from "../../../assets/bg/grid-black.png";
import common from "../../../assets/card/rarity/common-bg.png";
import rare from "../../../assets/card/rarity/rare-bg.png";
import superstar from "../../../assets/card/rarity/superstar-bg.png";
import legendary from "../../../assets/card/rarity/legendary-bg.png";

import player1 from "../../../assets/card/player/player1.png";
import player2 from "../../../assets/card/player/player2.png";
import player3 from "../../../assets/card/player/player3.png";
import player4 from "../../../assets/card/player/player4.png";
import player5 from "../../../assets/card/player/player5.png";

function LineupSection() {
  return (
    <section className="mt-6">
      <SectionHeading heading="STARTING LINEUP" Icon={RiTeamLine} />

      <div
        className="bg-cover bg-full border border-border p-7"
        style={{ backgroundImage: `url(${grid})` }}
      >
        <PlayerCardList>
          <LineupPosition position="PG">
            <RegularCard
              playerImage={player1}
              playerRarity={common}
              playerPosition="PG"
              playerName="Kaito Watanabe"
              offenseCount={89}
              defenseCount={92}
            />
          </LineupPosition>
          <LineupPosition position="SG">
            <RegularCard
              playerImage={player2}
              playerRarity={rare}
              playerPosition="SG"
              playerName="Kaito Watanabe"
              offenseCount={89}
              defenseCount={92}
            />
          </LineupPosition>
          <LineupPosition position="SF">
            <RegularCard
              playerImage={player3}
              playerRarity={superstar}
              playerPosition="SF"
              playerName="Kaito Watanabe"
              offenseCount={89}
              defenseCount={92}
            />
          </LineupPosition>
          <LineupPosition position="PF">
            <FullArtCard
              playerImage={player5}
              playerRarity={legendary}
              playerPosition="PF"
              playerName="Kaito Watanabe"
              offenseCount={89}
              defenseCount={92}
            />
          </LineupPosition>
          <LineupPosition position="C">
            <RegularCard
              playerImage={player4}
              playerRarity={common}
              playerPosition="C"
              playerName="Kaito Watanabe"
              offenseCount={89}
              defenseCount={92}
            />
          </LineupPosition>
        </PlayerCardList>
      </div>
    </section>
  );
}
export default LineupSection;
