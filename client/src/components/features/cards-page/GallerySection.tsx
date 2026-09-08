import { useState } from "react";
import { RxLightningBolt } from "react-icons/rx";
import {
  filterPlayers,
  handleFilterByPosition,
  handleFilterByRarity,
  handleSortByRating,
} from "../../../utils/helpers/getPlayers";

import SectionHeading from "../../common/text/SectionHeading";
import FullArtCard from "../../common/playerCard/FullArtCard";
import CardList from "../../common/list/CardList";
import SearchForm from "../../common/form/SearchForm";
import DropdownBtn from "../../common/button/DropdownBtn";
import Divider from "../../common/divider/Divider";

function GallerySection({ players, loading, errorMsg }) {
  //* filters
  const [rarityFilter, setRarityFilter] = useState("");
  const [positionFilter, setPositionFilter] = useState("");
  const [ratingSort, setRatingSort] = useState("");

  // get list of players who have been filtered/sorted
  const filteredPlayers = filterPlayers(
    players,
    rarityFilter,
    positionFilter,
    ratingSort,
  );

  if (loading) return <span>Loading players...</span>;
  if (errorMsg) return <span className="text-error">{errorMsg}</span>;

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
              onClick={(rating) => handleSortByRating(rating, setRatingSort)}
            />
            <DropdownBtn
              buttonText="Position"
              dropdownItems={["PG", "SG", "SF", "PF", "C"]}
              onClick={(position) =>
                handleFilterByPosition(position, setPositionFilter)
              }
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
              onClick={(rarity) =>
                handleFilterByRarity(rarity, setRarityFilter)
              }
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
