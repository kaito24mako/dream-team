import { RxLightningBolt } from "react-icons/rx";

import SectionHeading from "../../common/text/SectionHeading";
import FullArtCard from "../../common/playerCard/FullArtCard";
import CardList from "../../common/list/CardList";

import player10 from "../../../assets/card/player/player10.png";
import legendary from "../../../assets/card/rarity/legendary-bg.png";

function FeaturedSection() {
  return (
    <section>
      <SectionHeading
        heading="Featured Cards"
        Icon={RxLightningBolt}
        divider={true}
      />

      <CardList>
        <FullArtCard
          playerImage={player10}
          playerRarity={legendary}
          playerPosition="SF"
          playerName="Kaito Watanabe"
          offenseCount={89}
          defenseCount={92}
        />
        <FullArtCard
          playerImage={player10}
          playerRarity={legendary}
          playerPosition="SF"
          playerName="Kaito Watanabe"
          offenseCount={89}
          defenseCount={92}
        />
        <FullArtCard
          playerImage={player10}
          playerRarity={legendary}
          playerPosition="SF"
          playerName="Kaito Watanabe"
          offenseCount={89}
          defenseCount={92}
        />
        <FullArtCard
          playerImage={player10}
          playerRarity={legendary}
          playerPosition="SF"
          playerName="Kaito Watanabe"
          offenseCount={89}
          defenseCount={92}
        />
      </CardList>
    </section>
  );
}
export default FeaturedSection;
