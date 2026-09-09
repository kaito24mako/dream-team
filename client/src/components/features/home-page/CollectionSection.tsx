import { TbCards } from "react-icons/tb";
import { useLineup } from "../../../utils/context/LineupContext.jsx";
import {
  filterPlayers,
  handleSortByRating,
  handleFilterByPosition,
  handleFilterByRarity,
} from "../../../utils/helpers/getPlayers.js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../../utils/redux/slices/authSlice.js";

import SectionHeading from "../../common/text/SectionHeading";
import SearchForm from "../../common/form/SearchForm";
import DropdownBtn from "../../common/button/DropdownBtn";
import RegularCard from "../../common/playerCard/RegularCard";
import Divider from "../../common/divider/Divider";
import CardList from "../../common/list/CardList";
import FullArtCard from "../../common/playerCard/FullArtCard";

function CollectionSection({ user, loading, errorMsg }) {
  // get the logged in user's id
  const authUser = useSelector(getUser);
  const userId = authUser?.userId;

  // add a player to lineup
  const { addToLineup } = useLineup();

  // to get only the Players that the user owns
  const players = user.Players || [];

  // filters
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

  return (
    <section className="mt-6">
      <div className="flex justify-between items-end">
        <SectionHeading heading="MY COLLECTION" Icon={TbCards} />

        <div className="flex flex-col sm:flex-row items-center gap-2 mb-3">
          <SearchForm />
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

      <CardList className="px-7">
        {filteredPlayers.map((player) =>
          player.rarity === "Legendary" ? (
            <FullArtCard
              key={player.id}
              playerImage={player.image}
              playerRarity={player.rarity}
              playerPosition={player.position}
              playerName={player.fullName}
              offenseCount={player.offensiveRating}
              defenseCount={player.defensiveRating}
              onClick={() => addToLineup(userId, player.id)}
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
              onClick={() => addToLineup(userId, player.id)}
            />
          ),
        )}
      </CardList>
    </section>
  );
}
export default CollectionSection;
