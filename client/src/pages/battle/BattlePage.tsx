import { useParams } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../../utils/context/UserContext.jsx";
import { useLineup } from "../../utils/context/LineupContext.jsx";
import {
  getSelectedOpponent,
  getRandomRating,
} from "../../utils/helpers/getOpponents.js";

import Button from "../../components/common/button/Button";
import Scoreboard from "../../components/features/battle-page/Scoreboard.js";
import Team from "../../components/features/battle-page/Team.js";
import VSList from "../../components/features/battle-page/VSList.js";
import RegularCardXS from "../../components/common/playerCard/RegularCardXS";
import FullArtCardXS from "../../components/common/playerCard/FullArtCardXS";
import ResultFrame from "../../components/features/battle-page/ResultFrame";

import black from "../../assets/card/rarity/black-bg.png";
import red from "../../assets/card/rarity/red-bg.png";
import enemy1 from "../../assets/card/enemy/enemy1.png";
import enemy2 from "../../assets/card/enemy/enemy2.png";
import enemy3 from "../../assets/card/enemy/enemy3.png";
import enemy4 from "../../assets/card/enemy/enemy4.png";
import enemy5 from "../../assets/card/enemy/enemy5.png";

function BattlePage() {
  const { user, loading: userLoading, errorMsg: userErrorMsg } = useUser();
  const {
    lineup,
    loading: lineupLoading,
    errorMsg: lineupErrorMsg,
  } = useLineup();
  const loading = userLoading || lineupLoading;
  const errorMsg = userErrorMsg || lineupErrorMsg;

  const { levelSlug } = useParams();
  const level = Number(levelSlug.replace("lvl", ""));

  const selectedOpponent = getSelectedOpponent(level);

  // to track if win, loss, or draw
  const [battleResults, setBattleResults] = useState({});
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

  //* Battle logic

  // Compare overalls between positions to get the user's result of each matchup
  function handleStartBattle() {
    setBattleStarted(true);

    const results = {};

    // compare ratings by position
    lineup.forEach((player, index) => {
      const opponentOverall =
        (opponentLineup[index].offensiveRating +
          opponentLineup[index].defensiveRating) /
        2;

      results[player.position] =
        player.overallRating > opponentOverall
          ? "win"
          : player.overallRating < opponentOverall
            ? "loss"
            : "draw";
    });

    setBattleResults(results);
  }

  // Get the opponent's result of each matchup
  function getOpponentResult(result) {
    if (result === "win") return "loss";
    if (result === "loss") return "win";

    return result;
  }

  //? how to move the VS after each matchup

  if (loading) return <span>Loading players...</span>;
  if (errorMsg) return <span className="text-error">{errorMsg}</span>;

  return (
    <>
      <title>Battle | Dream Team</title>

      <main className="flex flex-col gap-5 pb-5">
        <Scoreboard />

        <div className="flex flex-row md:flex-col md:gap-5">
          {/* user's team */}
          <Team teamName={user.teamName} teamNameColor="text-primary">
            {lineup.map((player) => (
              <ResultFrame
                key={player.id}
                result={battleResults[player.position]}
              >
                {player.rarity === "Legendary" ? (
                  <FullArtCardXS
                    playerImage={player.image}
                    playerRarity={player.rarity}
                    playerPosition={player.position}
                    playerName={player.fullName}
                    offenseCount={player.offensiveRating}
                    defenseCount={player.defensiveRating}
                  />
                ) : (
                  <RegularCardXS
                    playerImage={player.image}
                    playerRarity={player.rarity}
                    playerPosition={player.position}
                    playerName={player.fullName}
                    offenseCount={player.offensiveRating}
                    defenseCount={player.defensiveRating}
                  />
                )}
              </ResultFrame>
            ))}
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
              <ResultFrame
                key={player.image}
                result={getOpponentResult(battleResults[player.position])}
              >
                <RegularCardXS
                  playerPosition={player.position}
                  playerName={player.name}
                  offenseCount={player.offensiveRating}
                  defenseCount={player.defensiveRating}
                  playerImage={player.image}
                  playerRarity={level >= 9 ? red : black}
                  isEnemy={true}
                />
              </ResultFrame>
            ))}
          </Team>
        </div>
      </main>
    </>
  );
}
export default BattlePage;
