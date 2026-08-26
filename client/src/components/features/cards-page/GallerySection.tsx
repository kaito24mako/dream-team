import { RxLightningBolt } from "react-icons/rx";
import { sortPlayersByRarity } from "../../../utils/data/getPlayers";

import SectionHeading from "../../common/text/SectionHeading";
import FullArtCard from "../../common/playerCard/FullArtCard";
import CardList from "../../common/list/CardList";

function GallerySection({ players }) {
  const sortedPlayers = sortPlayersByRarity(players);

  return (
    <section>
      <SectionHeading
        heading="ALL CARDS"
        Icon={RxLightningBolt}
        divider={true}
      />
      <CardList>
        {sortedPlayers.map((player) => (
          <FullArtCard
            key={player.id}
            playerImage={player.image}
            playerRarity={player.rarity}
            playerPosition={player.position}
            playerName={player.fullName}
            offenseCount={player.offensiveRating}
            defenseCount={player.defensiveRating}
          />
        ))}
      </CardList>
    </section>
  );
}
export default GallerySection;
