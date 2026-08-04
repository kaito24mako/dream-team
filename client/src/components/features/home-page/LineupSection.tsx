import { RiTeamLine } from "react-icons/ri";

import LineupPosition from "./LineupPosition";
import RegularCard from "../../common/card/RegularCard";
import FullArtCard from "../../common/card/FullArtCard";

import grid from "../../../assets/bg/grid-black.png";
import player1 from "../../../assets/card/player/player-1.png";
import common from "../../../assets/card/bg/common-bg.png";
import rare from "../../../assets/card/bg/rare-bg.png";
import superstar from "../../../assets/card/bg/superstar-bg.png";
import legendary from "../../../assets/card/bg/legendary-bg.png";
import SectionHeading from "../../common/text/SectionHeading";
import PlayerCardList from "../../common/card/PlayerCardList";

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
              playerImage={player1}
              playerRarity={rare}
              playerPosition="SG"
              playerName="Kaito Watanabe"
              offenseCount={89}
              defenseCount={92}
            />
          </LineupPosition>
          <LineupPosition position="SF">
            <RegularCard
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
            <RegularCard
              playerImage={player1}
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
