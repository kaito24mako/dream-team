import {
  teamRecord,
  winRate,
  collectionProgress,
} from "../../../utils/data/getUsers";
import {
  lineup,
  offensiveAverage,
  defensiveAverage,
} from "../../../utils/data/getLineup";

import Statistic from "../../common/statistic/Statistic";

function StatisticsSection() {
  console.log(lineup);

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
          count={teamRecord}
          countSize="medium"
          textAlign="end"
        />
        <Statistic
          title="Win Rate"
          count={winRate}
          countSize="medium"
          textAlign="end"
        />
        {/* <Statistic
        title="Win Streak"
        count="5W"
        countSize="medium"
        textAlign="end"
      /> */}
      </div>

      <div className="divider divider-horizontal m-0"></div>
      <div className="flex flex-col sm:flex-row gap-5">
        <Statistic
          title="Collection Progress"
          count={collectionProgress}
          countSize="medium"
          textAlign="end"
        />
        <Statistic
          title="Legendaries"
          count={7}
          countSize="medium"
          textAlign="end"
        />
      </div>
    </section>
  );
}
export default StatisticsSection;
