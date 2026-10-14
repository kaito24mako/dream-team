import { useState } from "react";
import { VscCollection } from "react-icons/vsc";
import {
  handleFilterByPosition,
  handleFilterByRarity,
  handleSortByRating,
  getFilteredPlayers,
  getSearchedPlayers,
} from "../../../utils/helpers/getPlayers";

import FullArtCard from "../../common/playerCard/FullArtCard";
import RegularCard from "../../common/playerCard/RegularCard";
import CardList from "../../common/list/CardList";
import SearchForm from "../../common/form/SearchForm";
import DropdownBtn from "../../common/button/DropdownBtn";
import Divider from "../../common/divider/Divider";
import SectionWrapper from "../../common/wrapper/SectionWrapper";
import MajorHeading from "../../common/text/MajorHeading";
import PlayerModal from "../../common/modal/PlayerModal";

function GallerySection({ user, players, loading, errorMsg }) {
  // filters
  const [rarityFilter, setRarityFilter] = useState("");
  const [positionFilter, setPositionFilter] = useState("");
  const [ratingSort, setRatingSort] = useState("");
  const [search, setSearch] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  // get list of players who have been filtered/sorted
  const filteredPlayers = getFilteredPlayers(
    players,
    rarityFilter,
    positionFilter,
    ratingSort,
  );

  const searchedPlayers = getSearchedPlayers(filteredPlayers, search);

  // check if the user owns the selected player
  function handleSelectedPlayer(player) {
    const ownedPlayer = user.Players?.find(
      (ownedPlayer) => ownedPlayer.id === player.id,
    );

    setSelectedPlayer({
      ...player,
      UserPlayer: ownedPlayer?.UserPlayer || {
        quantity: 0,
        inLineup: false,
      },
    });
  }

  return (
    <SectionWrapper className="mt-0!">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end">
        <MajorHeading
          heading="ALL CARDS"
          description="View the entire database, containing 60 players."
          Icon={VscCollection}
        />

        <div className="flex items-center gap-2 mb-3">
          <SearchForm value={search} onSearch={setSearch} />

          <div className="flex">
            <DropdownBtn
              buttonText="Rating"
              dropdownItems={["All", "Highest", "Lowest"]}
              onClick={(rating) => handleSortByRating(rating, setRatingSort)}
            />
            <DropdownBtn
              buttonText="Position"
              dropdownItems={["All", "PG", "SG", "SF", "PF", "C"]}
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

      {loading && <span>Loading players...</span>}
      {errorMsg && <span className="text-error">{errorMsg}</span>}

      <CardList>
        {searchedPlayers.map((player) =>
          player.rarity === "Legendary" ? (
            <FullArtCard
              key={player.id}
              playerImage={player.image}
              playerRarity={player.rarity}
              playerPosition={player.position}
              playerName={player.fullName}
              offenseCount={player.offensiveRating}
              defenseCount={player.defensiveRating}
              pointerCursor={true}
              onClick={() => handleSelectedPlayer(player)}
            />
          ) : (
            <RegularCard
              key={player.id}
              playerImage={player.image}
              playerRarity={player.rarity}
              playerPosition={player.position}
              playerName={player.fullName}
              offenseCount={player.offensiveRating}
              defenseCount={player.defensiveRating}
              pointerCursor={true}
              onClick={() => handleSelectedPlayer(player)}
            />
          ),
        )}
      </CardList>

      {selectedPlayer && (
        <PlayerModal
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
        />
      )}
    </SectionWrapper>
  );
}
export default GallerySection;
