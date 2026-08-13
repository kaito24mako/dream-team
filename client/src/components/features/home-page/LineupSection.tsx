import { RiTeamLine } from "react-icons/ri";
import { players } from "../../../data/players";

import SectionHeading from "../../common/text/SectionHeading";
import CardList from "../../common/list/CardList";
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

function LineupSection({ user }) {
  // get the user's lineup
  const lineup = user.lineup;

  // get player object of a certain position from the user's lineup
  const lineupPG = players.find((player) => player.id === lineup.PG);
  const lineupSG = players.find((player) => player.id === lineup.SG);
  const lineupSF = players.find((player) => player.id === lineup.SF);
  const lineupPF = players.find((player) => player.id === lineup.PF);
  const lineupC = players.find((player) => player.id === lineup.C);

  console.log(lineup, "user's lineup");
  console.log(lineupPG, "the specific player from the user's lineup");

  return (
    <section className="mt-6">
      <SectionHeading heading="STARTING LINEUP" Icon={RiTeamLine} />

      <div
        className="bg-cover bg-full border border-border p-5 sm:p-7"
        style={{ backgroundImage: `url(${grid})` }}
      >
        <CardList>
          <LineupPosition position="PG">
            <RegularCard
              playerImage={lineupPG.image}
              playerRarity={lineupPG.rarity}
              playerPosition={lineupPG.position}
              playerName={lineupPG.fullName}
              offenseCount={lineupPG.offensiveRating}
              defenseCount={lineupPG.defensiveRating}
            />
          </LineupPosition>
          <LineupPosition position="SG">
            <RegularCard
              playerImage={lineupSG.image}
              playerRarity={lineupSG.rarity}
              playerPosition={lineupSG.position}
              playerName={lineupSG.fullName}
              offenseCount={lineupSG.offensiveRating}
              defenseCount={lineupSG.defensiveRating}
            />
          </LineupPosition>
          <LineupPosition position="SF">
            <RegularCard
              playerImage={lineupSF.image}
              playerRarity={lineupSF.rarity}
              playerPosition={lineupSF.position}
              playerName={lineupSF.fullName}
              offenseCount={lineupSF.offensiveRating}
              defenseCount={lineupSF.defensiveRating}
            />
          </LineupPosition>
          <LineupPosition position="PF">
            <RegularCard
              playerImage={lineupPF.image}
              playerRarity={lineupPF.rarity}
              playerPosition={lineupPF.position}
              playerName={lineupPF.fullName}
              offenseCount={lineupPF.offensiveRating}
              defenseCount={lineupPF.defensiveRating}
            />
          </LineupPosition>
          <LineupPosition position="C">
            <RegularCard
              playerImage={lineupC.image}
              playerRarity={lineupC.rarity}
              playerPosition={lineupC.position}
              playerName={lineupC.fullName}
              offenseCount={lineupC.offensiveRating}
              defenseCount={lineupC.defensiveRating}
            />
          </LineupPosition>
        </CardList>
      </div>
    </section>
  );
}
export default LineupSection;
