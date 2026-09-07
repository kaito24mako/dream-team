import { RiTeamLine } from "react-icons/ri";

import SectionHeading from "../../common/text/SectionHeading";
import CardList from "../../common/list/CardList";
import LineupPosition from "./LineupPosition";
import EmptyCard from "../../common/playerCard/EmptyCard";
import RegularCard from "../../common/playerCard/RegularCard";
import FullArtCard from "../../common/playerCard/FullArtCard";
import grid from "../../../assets/bg/grid-black.png";

function LineupSection({ lineup }) {
  const positions = ["PG", "SG", "SF", "PF", "C"];

  // returns different markdown depending on certain conditions - for cleaner code
  function renderCard(player, position) {
    if (!player) return <EmptyCard playerPosition={position} />;

    // render the type of card depending on the player's rarity
    const Card = player.rarity === "Legendary" ? FullArtCard : RegularCard;

    return (
      <Card
        playerImage={player.image}
        playerRarity={player.rarity}
        playerPosition={player.position}
        playerName={player.fullName}
        offenseCount={player.offensiveRating}
        defenseCount={player.defensiveRating}
      />
    );
  }

  return (
    <section className="mt-6">
      <SectionHeading heading="STARTING LINEUP" Icon={RiTeamLine} />

      <div
        className="bg-cover bg-full border border-border p-5 sm:p-7"
        style={{ backgroundImage: `url(${grid})` }}
      >
        <CardList>
          {positions.map((position) => {
            // to check if theres a player in that position in the lineup
            const player = lineup.find((p) => p.position === position);

            return (
              <LineupPosition position={position} key={position}>
                {renderCard(player, position)}
              </LineupPosition>
            );
          })}
        </CardList>
      </div>
    </section>
  );
}
export default LineupSection;
