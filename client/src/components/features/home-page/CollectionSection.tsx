import { TbCards } from "react-icons/tb";

import SectionHeading from "../../common/text/SectionHeading";
import SearchForm from "../../common/form/SearchForm";
import DropdownBtn from "../../common/button/DropdownBtn";
import RegularCard from "../../common/card/RegularCard";
import Divider from "../../common/divider/Divider";
import PlayerCardList from "../../common/card/PlayerCardList";

import player1 from "../../../assets/card/player/player1.png";
import common from "../../../assets/card/rarity/common-bg.png";

function CollectionSection() {
  return (
    <section className="mt-6 mb-8">
      <div className="flex justify-between items-end">
        <SectionHeading heading="MY COLLECTION" Icon={TbCards} />
        <div className="flex items-center gap-2 mb-3">
          <SearchForm />
          <div className="flex">
            <DropdownBtn
              buttonText="Rating"
              dropdownItems={["Highest", "Lowest"]}
            />
            <DropdownBtn
              buttonText="Position"
              dropdownItems={["PG", "SG", "SF", "PF", "C"]}
            />
            <DropdownBtn
              buttonText="Rarity"
              dropdownItems={["Legendary", "Superstar", "Rare", "Common"]}
            />
          </div>
        </div>
      </div>

      <Divider color="default" />

      <PlayerCardList className="px-7">
        <RegularCard
          playerImage={player1}
          playerRarity={common}
          playerPosition="PG"
          playerName="Kaito Watanabe"
          offenseCount={89}
          defenseCount={92}
        />
        <RegularCard
          playerImage={player1}
          playerRarity={common}
          playerPosition="PG"
          playerName="Kaito Watanabe"
          offenseCount={89}
          defenseCount={92}
        />
        <RegularCard
          playerImage={player1}
          playerRarity={common}
          playerPosition="PG"
          playerName="Kaito Watanabe"
          offenseCount={89}
          defenseCount={92}
        />
        <RegularCard
          playerImage={player1}
          playerRarity={common}
          playerPosition="PG"
          playerName="Kaito Watanabe"
          offenseCount={89}
          defenseCount={92}
        />
        <RegularCard
          playerImage={player1}
          playerRarity={common}
          playerPosition="PG"
          playerName="Kaito Watanabe"
          offenseCount={89}
          defenseCount={92}
        />
        <RegularCard
          playerImage={player1}
          playerRarity={common}
          playerPosition="PG"
          playerName="Kaito Watanabe"
          offenseCount={89}
          defenseCount={92}
        />
      </PlayerCardList>
    </section>
  );
}
export default CollectionSection;
