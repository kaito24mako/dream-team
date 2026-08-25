import { useParams } from "react-router-dom";
import { useState } from "react";

import { currentUser } from "../../utils/data/getUsers";
import { userLineup } from "../../utils/data/getLineup";
import {
  getSelectedOpponent,
  getRandomRating,
} from "../../utils/data/getOpponents";

import Button from "../../components/common/button/Button";
import Scoreboard from "../../components/features/battle-page/Scoreboard";
import Team from "../../components/features/battle-page/Team";
import VSList from "../../components/features/battle-page/VSList";
import RegularCardXS from "../../components/common/playerCard/RegularCardXS";
import FullArtCardXS from "../../components/common/playerCard/FullArtCardXS";

import black from "../../assets/card/rarity/black-bg.png";
import red from "../../assets/card/rarity/red-bg.png";
import enemy1 from "../../assets/card/enemy/enemy1.png";
import enemy2 from "../../assets/card/enemy/enemy2.png";
import enemy3 from "../../assets/card/enemy/enemy3.png";
import enemy4 from "../../assets/card/enemy/enemy4.png";
import enemy5 from "../../assets/card/enemy/enemy5.png";

function BattlePage() {
  const { levelSlug } = useParams();
  const level = Number(levelSlug.replace("lvl", ""));

  const selectedOpponent = getSelectedOpponent(level);

  const [battleStarted, setBattleStarted] = useState(false);

  // using state to prevent the ratings from generating again on re-render
  //! prevent page reloads from re-generating the ratings
  const [opponentLineup] = useState(() => [
    {
      position: "PG",
      name: "Ja Verant",
      image: enemy1,
      offensiveRating: getRandomRating(selectedOpponent),
      defensiveRating: getRandomRating(selectedOpponent),
    },
    {
      position: "SG",
      name: "Jimmy Guttler",
      image: enemy2,
      offensiveRating: getRandomRating(selectedOpponent),
      defensiveRating: getRandomRating(selectedOpponent),
    },
    {
      position: "SF",
      name: "Kevin Reaper",
      image: enemy3,
      offensiveRating: getRandomRating(selectedOpponent),
      defensiveRating: getRandomRating(selectedOpponent),
    },
    {
      position: "PF",
      name: "Zion Dunkson",
      image: enemy4,
      offensiveRating: getRandomRating(selectedOpponent),
      defensiveRating: getRandomRating(selectedOpponent),
    },
    {
      position: "C",
      name: "Joel Jimbeed",
      image: enemy5,
      offensiveRating: getRandomRating(selectedOpponent),
      defensiveRating: getRandomRating(selectedOpponent),
    },
  ]);

  //* battle logic

  function handleStartBattle() {
    setBattleStarted(true);
    getPlayerOveralls();
  }

  function getPlayerOveralls() {
    // get an array of the user's players' overall ratings at each position
    const userOverallRating = userLineup.map(
      (position) => position.overallRating,
    );
    console.log("userOverallRating:", userOverallRating);

    // get an array of the opponent's players' overall ratings at each position
    const opponentOverallRating = opponentLineup.map(
      (player) => (player.offensiveRating + player.defensiveRating) / 2,
    );
    console.log("opponentOverallRating:", opponentOverallRating);

    comparePlayerRatings(userOverallRating, opponentOverallRating);
  }

  function comparePlayerRatings(userOverallRating, opponentOverallRating) {
    const positions = ["PG", "SG", "SF", "PF", "C"];

    // compare the ratings of the user and opponent's players at each position
    positions.forEach((position, index) => {
      if (userOverallRating[index] < opponentOverallRating[index]) {
        alert(`your ${position} lost`);
      } else if (userOverallRating[index] > opponentOverallRating[index]) {
        alert(`your ${position} won`);
      } else if (userOverallRating[index] === opponentOverallRating[index]) {
        alert(`it is a draw`);
      }
    });
  }

  //? how to move the VS after each matchup
  //? how to show indication of winner and loser on each card

  return (
    <>
      <title>Battle | Dream Team</title>

      <main className="flex flex-col gap-5 pb-5">
        <Scoreboard />

        <div className="flex flex-row md:flex-col md:gap-5">
          {/* user's team */}
          <Team teamName={currentUser.teamName} teamNameColor="text-primary">
            {userLineup.map((player) =>
              player.rarity === "Legendary" ? (
                <FullArtCardXS
                  key={player.id}
                  playerImage={player.image}
                  playerRarity={player.rarity}
                  playerPosition={player.position}
                  playerName={player.fullName}
                  offenseCount={player.offensiveRating}
                  defenseCount={player.defensiveRating}
                />
              ) : (
                <RegularCardXS
                  key={player.id}
                  playerImage={player.image}
                  playerRarity={player.rarity}
                  playerPosition={player.position}
                  playerName={player.fullName}
                  offenseCount={player.offensiveRating}
                  defenseCount={player.defensiveRating}
                />
              ),
            )}
          </Team>

          {battleStarted ? (
            <VSList />
          ) : (
            <Button
              className="btn-info w-fit mx-auto"
              onClick={handleStartBattle}
            >
              Start Match
            </Button>
          )}

          {/* opponent's team */}
          <Team teamName={selectedOpponent.teamName} teamNameColor="text-white">
            {opponentLineup.map((player) => (
              <RegularCardXS
                key={player.image}
                playerPosition={player.position}
                playerName={player.name}
                offenseCount={player.offensiveRating}
                defenseCount={player.defensiveRating}
                playerImage={player.image}
                playerRarity={level >= 9 ? red : black}
                isEnemy={true}
              />
            ))}
          </Team>
        </div>
      </main>
    </>
  );
}
export default BattlePage;
