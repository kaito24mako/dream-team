import { RiTeamLine } from "react-icons/ri";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../../utils/redux/slices/authSlice.js";
import { useLineup } from "../../../utils/context/LineupContext.jsx";

import SectionHeading from "../../common/text/SectionHeading";
import CardList from "../../common/list/CardList";
import EmptyCard from "../../common/playerCard/EmptyCard";
import RegularCard from "../../common/playerCard/RegularCard";
import FullArtCard from "../../common/playerCard/FullArtCard";
import Divider from "../../common/divider/Divider";
import PlayerModal from "../../common/modal/PlayerModal.js";

function LineupSection({ lineup, loading, errorMsg }) {
  // to get the logged in user's id
  const authUser = useSelector(getUser);
  const userId = authUser?.userId;

  const { addToLineup, removeFromLineup } = useLineup();

  // set the clicked player in state
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  // to check for positions in the lineup that have no players
  const lineup_positions = ["PG", "SG", "SF", "PF", "C"];

  let content;

  if (loading) {
    content = <span>Loading lineup...</span>;
  } else if (errorMsg) {
    content = <span className="text-error">{errorMsg}</span>;
  } else {
    content = (
      <div className="mb-5">
        <CardList>
          {lineup_positions.map((position) => {
            const player = lineup.find((p) => p.position === position);

            return !player ? (
              <EmptyCard key={position} playerPosition={position} />
            ) : player.rarity === "Legendary" ? (
              <FullArtCard
                key={player.id}
                playerImage={player.image}
                playerRarity={player.rarity}
                playerPosition={player.position}
                playerName={player.fullName}
                offenseCount={player.offensiveRating}
                defenseCount={player.defensiveRating}
                onClick={() => setSelectedPlayer(player)}
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
                onClick={() => setSelectedPlayer(player)}
              />
            );
          })}
        </CardList>
      </div>
    );
  }

  return (
    <section className="mt-6">
      <SectionHeading heading="STARTING LINEUP" Icon={RiTeamLine} />

      <Divider color="default" />

      {content}

      {selectedPlayer && (
        <PlayerModal
          userId={userId}
          addToLineup={addToLineup}
          removeFromLineup={removeFromLineup}
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
        />
      )}
    </section>
  );
}
export default LineupSection;
