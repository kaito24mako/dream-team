import { getLineupAverages } from "../../../utils/helpers/getLineup";

import Statistic from "../../common/statistic/Statistic";

function StatisticsSection({ user, lineup, loading, errorMsg }) {
  // get only the players that the user owns
  const players = user.Players || [];

  // get only the legendary players that the user owns
  const legendaryPlayers = players.filter(
    (player) => player.rarity === "Legendary",
  );

  // get the offensive and defensive averages of the lineup
  const { offensiveAverage, defensiveAverage } = getLineupAverages(lineup);

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
          count={
            Math.round((user.wins / (user.wins + user.losses)) * 100) + "%"
          }
          countSize="medium"
          textAlign="end"
        />
      </div>

      <div className="divider divider-horizontal m-0"></div>
      <div className="flex flex-col sm:flex-row gap-5">
        <Statistic
          title="Collection Progress"
          count={user.totalCards + "/" + 60}
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
