import { getLineupAverages } from "../../../utils/helpers/getLineup";

import Statistic from "../../common/statistic/Statistic";

function StatisticsSection({ user, lineup, loading, errorMsg }) {
  // get only the players that the user owns
  const players = user.Players || [];

  // total unique cards collected
  // get only the legendary players that the user owns
  const legendaryPlayers = players.filter(
    (player) => player.rarity === "Legendary",
  );

  // get the offensive and defensive averages of the lineup
  const { offensiveAverage, defensiveAverage } = getLineupAverages(lineup);

  // show 0% until the user has played a game
  const wins = user.wins ?? 0;
  const totalGames = wins + (user.losses ?? 0);
  const winRate = totalGames > 0 ? Math.round((wins / totalGames) * 100) : 0;

  if (loading) return <span>Loading statistics...</span>;
  if (errorMsg) return <span className="text-error">{errorMsg}</span>;

  return (
    <section className="flex gap-5 overflow-x-scroll overflow-y-hidden">
      <div className="flex flex-col sm:flex-row gap-5">
        <Statistic
          title="Offense"
          count={offensiveAverage}
          countSize="large"
          textAlign="center"
        />
        <Statistic
          title="Defense"
          count={defensiveAverage}
          countSize="large"
          textAlign="center"
        />
      </div>

      <div className="divider divider-horizontal m-0"></div>
      <div className="flex flex-col sm:flex-row gap-5">
        <Statistic
          title="Team Record"
          count={user.wins + "-" + user.losses}
          countSize="medium"
          textAlign="end"
        />
        <Statistic
          title="Win Rate"
          count={winRate + "%"}
          countSize="medium"
          textAlign="end"
        />
      </div>

      <div className="divider divider-horizontal m-0"></div>
      <div className="flex flex-col sm:flex-row gap-5">
        <Statistic
          title="Collection Progress"
          count={players.length + "/" + 60}
          countSize="medium"
          textAlign="end"
        />
        <Statistic
          title="Legendaries"
          count={legendaryPlayers.length}
          countSize="medium"
          textAlign="end"
        />
      </div>
    </section>
  );
}
export default StatisticsSection;
