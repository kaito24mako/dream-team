import { RiTeamLine } from "react-icons/ri";

import {
  lineupPG,
  lineupSG,
  lineupSF,
  lineupPF,
  lineupC,
} from "../../../utils/data/getLineup";

import SectionHeading from "../../common/text/SectionHeading";
import CardList from "../../common/list/CardList";
import LineupPosition from "./LineupPosition";
import RegularCard from "../../common/playerCard/RegularCard";
import FullArtCard from "../../common/playerCard/FullArtCard";

import grid from "../../../assets/bg/grid-black.png";

function LineupSection() {
  return (
    <section className="mt-6">
      <SectionHeading heading="STARTING LINEUP" Icon={RiTeamLine} />

      <div
        className="bg-cover bg-full border border-border p-5 sm:p-7"
        style={{ backgroundImage: `url(${grid})` }}
      >
        <CardList>
          <LineupPosition position="PG">
            {lineupPG.rarity === "Legendary" ? (
              <FullArtCard
                playerImage={lineupPG.image}
                playerRarity={lineupPG.rarity}
                playerPosition={lineupPG.position}
                playerName={lineupPG.fullName}
                offenseCount={lineupPG.offensiveRating}
                defenseCount={lineupPG.defensiveRating}
              />
            ) : (
              <RegularCard
                playerImage={lineupPG.image}
                playerRarity={lineupPG.rarity}
                playerPosition={lineupPG.position}
                playerName={lineupPG.fullName}
                offenseCount={lineupPG.offensiveRating}
                defenseCount={lineupPG.defensiveRating}
              />
            )}
          </LineupPosition>
          <LineupPosition position="SG">
            {lineupSG.rarity === "Legendary" ? (
              <FullArtCard
                playerImage={lineupSG.image}
                playerRarity={lineupSG.rarity}
                playerPosition={lineupSG.position}
                playerName={lineupSG.fullName}
                offenseCount={lineupSG.offensiveRating}
                defenseCount={lineupSG.defensiveRating}
              />
            ) : (
              <RegularCard
                playerImage={lineupSG.image}
                playerRarity={lineupSG.rarity}
                playerPosition={lineupSG.position}
                playerName={lineupSG.fullName}
                offenseCount={lineupSG.offensiveRating}
                defenseCount={lineupSG.defensiveRating}
              />
            )}
          </LineupPosition>
          <LineupPosition position="SF">
            {lineupSF.rarity === "Legendary" ? (
              <FullArtCard
                playerImage={lineupSF.image}
                playerRarity={lineupSF.rarity}
                playerPosition={lineupSF.position}
                playerName={lineupSF.fullName}
                offenseCount={lineupSF.offensiveRating}
                defenseCount={lineupSF.defensiveRating}
              />
            ) : (
              <RegularCard
                playerImage={lineupSF.image}
                playerRarity={lineupSF.rarity}
                playerPosition={lineupSF.position}
                playerName={lineupSF.fullName}
                offenseCount={lineupSF.offensiveRating}
                defenseCount={lineupSF.defensiveRating}
              />
            )}
          </LineupPosition>
          <LineupPosition position="PF">
            {lineupPF.rarity === "Legendary" ? (
              <FullArtCard
                playerImage={lineupPF.image}
                playerRarity={lineupPF.rarity}
                playerPosition={lineupPF.position}
                playerName={lineupPF.fullName}
                offenseCount={lineupPF.offensiveRating}
                defenseCount={lineupPF.defensiveRating}
              />
            ) : (
              <RegularCard
                playerImage={lineupPF.image}
                playerRarity={lineupPF.rarity}
                playerPosition={lineupPF.position}
                playerName={lineupPF.fullName}
                offenseCount={lineupPF.offensiveRating}
                defenseCount={lineupPF.defensiveRating}
              />
            )}
          </LineupPosition>
          <LineupPosition position="C">
            {lineupC.rarity === "Legendary" ? (
              <FullArtCard
                playerImage={lineupC.image}
                playerRarity={lineupC.rarity}
                playerPosition={lineupC.position}
                playerName={lineupC.fullName}
                offenseCount={lineupC.offensiveRating}
                defenseCount={lineupC.defensiveRating}
              />
            ) : (
              <RegularCard
                playerImage={lineupC.image}
                playerRarity={lineupC.rarity}
                playerPosition={lineupC.position}
                playerName={lineupC.fullName}
                offenseCount={lineupC.offensiveRating}
                defenseCount={lineupC.defensiveRating}
              />
            )}
          </LineupPosition>
        </CardList>
      </div>
    </section>
  );
}
export default LineupSection;
