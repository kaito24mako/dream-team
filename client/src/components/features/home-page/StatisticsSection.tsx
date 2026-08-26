import { useEffect } from "react";
import {
  offensiveAverage,
  defensiveAverage,
} from "../../../utils/data/getLineup";
import {
  useUser,
  useUserGetById,
} from "../../../utils/context/UserContext.jsx";

import Statistic from "../../common/statistic/Statistic";

function StatisticsSection() {
  const user = useUser();
  const getUserById = useUserGetById();
  console.log("user state", user);

  useEffect(() => {
    getUserById();
  }, [getUserById]);

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
          count={user.totalCards + "/" + 60}
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
