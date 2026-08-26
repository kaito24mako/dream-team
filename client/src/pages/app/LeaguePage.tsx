import { useEffect } from "react";
import { useUser, useUserGetById } from "../../utils/context/UserContext.jsx";
import { offensiveAverage, defensiveAverage } from "../../utils/data/getLineup";

import Statistic from "../../components/common/statistic/Statistic";
import MatchesSection from "../../components/features/league-page/MatchesSection";

function LeaguePage() {
  const user = useUser();
  const getUserById = useUserGetById();

  useEffect(() => {
    getUserById();
  }, [getUserById]);

  return (
    <>
      <title>League | Dream Team</title>

      <main className="flex flex-col gap-5 mb-15">
        <div className="flex justify-center items-end gap-10">
          <div className="flex flex-col items-start md:items-center">
            <p className="font-primary text-xl">It's Game Time</p>
            <p className="font-primary text-primary text-4xl">
              {user.teamName}
            </p>
          </div>

          <div className="flex gap-6">
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
        </div>

        <MatchesSection />
      </main>
    </>
  );
}
export default LeaguePage;
