import { RxLightningBolt } from "react-icons/rx";

import { featuredPlayersRandom } from "../../../utils/data/getPlayers";

import SectionHeading from "../../common/text/SectionHeading";
import FullArtCard from "../../common/playerCard/FullArtCard";
import CardList from "../../common/list/CardList";

function FeaturedSection() {
  return (
    <section>
      <SectionHeading
        heading="Featured Cards"
        Icon={RxLightningBolt}
        divider={true}
      />
      <CardList>
        {featuredPlayersRandom.map((player) => (
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
export default FeaturedSection;
