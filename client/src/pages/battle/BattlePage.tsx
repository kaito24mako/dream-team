import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useUser } from "../../utils/context/UserContext.jsx";
import { useLineup } from "../../utils/context/LineupContext.jsx";
import {
  getSelectedOpponent,
  getRandomRating,
} from "../../utils/helpers/getOpponents.js";

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
  const {
    user,
    loading: userLoading,
    errorMsg: userErrorMsg,
    saveMatchResult,
  } = useUser();
  const {
    lineup,
    loading: lineupLoading,
    errorMsg: lineupErrorMsg,
  } = useLineup();
  const loading = userLoading || lineupLoading;
  const errorMsg = userErrorMsg || lineupErrorMsg;

  // use the level param to find the opponent chosen in the league page
  const { levelSlug } = useParams();
  const level = Number(levelSlug.replace("lvl", ""));
  const selectedOpponent = getSelectedOpponent(level);

  const [battleStarted, setBattleStarted] = useState(false);
  const [battleFinished, setBattleFinished] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [battleResults, setBattleResults] = useState({});
  const [isWinner, setIsWinner] = useState(false);
  const [winPercentage, setWinPercentage] = useState(50);
  const [matchupIndex, setMatchupIndex] = useState(0);

  const matchStarted = useRef(false);
  const revealTimeouts = useRef([]);

  // generate opponent ratings once per match
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

  // stop the reveal timers when leaving the page
  function clearRevealTimeouts() {
    revealTimeouts.current.forEach((timeout) => clearTimeout(timeout));
    revealTimeouts.current = [];
  }
  useEffect(() => {
    return clearRevealTimeouts;
  }, []);

  function handleStartBattle() {
    // require five players and ignore extra clicks
    if (matchStarted.current || lineup.length !== 5) return;
    matchStarted.current = true;
    clearRevealTimeouts();
    setBattleStarted(true);

    const allResults = {};

    // compare each player with the opponent in the same position
    lineup.forEach((player, index) => {
      const opponentOverall =
        (opponentLineup[index].offensiveRating +
          opponentLineup[index].defensiveRating) /
        2;

      allResults[player.position] =
        player.overallRating > opponentOverall
          ? "win"
          : player.overallRating < opponentOverall
            ? "loss"
            : "draw";
    });

    // reveal each matchup in order
    lineup.forEach((player, index) => {
      const timeout = setTimeout(() => {
        const result = allResults[player.position];

        setMatchupIndex(index);

        setBattleResults((currentResults) => ({
          ...currentResults,
          [player.position]: result,
        }));

        // each matchup changes the win chance by 10%
        if (result === "win") {
          setWinPercentage((percentage) => percentage + 10);
        } else if (result === "loss") {
          setWinPercentage((percentage) => percentage - 10);
        }

        // save the result after the last matchup
        if (index === lineup.length - 1) {
          void getFinalResult(allResults);
        }
      }, index * 1400);

      revealTimeouts.current.push(timeout);
    });
  }

  function getOpponentResult(result) {
    if (result === "win") return "loss";
    if (result === "loss") return "win";
    return result;
  }

  async function getFinalResult(finalResults) {
    // use the five matchups to calculate the final win chance
    const finalWinPercentage =
      50 +
      Object.values(finalResults).filter((result) => result === "win").length *
        10 -
      Object.values(finalResults).filter((result) => result === "loss").length *
        10;
    const userWon = Math.random() * 100 <= finalWinPercentage;

    setIsWinner(userWon);

    try {
      // save the result before showing the exit button
      await saveMatchResult(userWon, level);
    } catch (err) {
      console.error("Failed to save match result:", err);
      setSaveError(
        "Could not save your match result. Your record and coins may not have updated.",
      );
    } finally {
      setBattleFinished(true);
    }
  }

  if (loading) return <span>Loading players...</span>;
  if (errorMsg) return <span className="text-error">{errorMsg}</span>;

  return (
    <>
      <title>Battle | Dream Team</title>

      <div
        aria-hidden="true"
        className="battle-outcome-glow"
        data-outcome={battleFinished ? (isWinner ? "win" : "loss") : undefined}
      />

      <main className="flex flex-col gap-5 pb-5">
        <Scoreboard
          winPercentage={winPercentage}
          battleStarted={battleStarted}
          onStartBattle={handleStartBattle}
          battleFinished={battleFinished}
          isWinner={isWinner}
          selectedOpponent={selectedOpponent}
          canStart={lineup.length === 5}
        />

        {saveError && (
          <p role="alert" className="text-error text-center">
            {saveError}
          </p>
        )}

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
            <VSList matchupIndex={matchupIndex} />
          ) : (
            <div className="h-10" />
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
