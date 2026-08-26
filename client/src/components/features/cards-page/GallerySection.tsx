import { useState } from "react";
import { RxLightningBolt } from "react-icons/rx";

import SectionHeading from "../../common/text/SectionHeading";
import FullArtCard from "../../common/playerCard/FullArtCard";
import CardList from "../../common/list/CardList";
import SearchForm from "../../common/form/SearchForm";
import DropdownBtn from "../../common/button/DropdownBtn";
import Divider from "../../common/divider/Divider";

function GallerySection({ players }) {
  //* filter by rarity
  const [rarityFilter, setRarityFilter] = useState("");

  const filteredPlayers = rarityFilter
    ? players.filter((player) => player.rarity === rarityFilter)
    : players;

  function handleSortByRarity(rarity) {
    if (rarity === "All") {
      setRarityFilter("");
    } else {
      setRarityFilter(rarity);
    }
  }

  return (
    <section>
      <div className="flex justify-between items-end">
        <SectionHeading heading="ALL CARDS" Icon={RxLightningBolt} />

        <div className="flex flex-col sm:flex-row items-center gap-2 mb-3">
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
              dropdownItems={[
                "All",
                "Legendary",
                "Superstar",
                "Rare",
                "Common",
              ]}
              handleClick={handleSortByRarity}
            />
          </div>
        </div>
      </div>

      <Divider color="default" />

      <CardList>
        {filteredPlayers.map((player) => (
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
