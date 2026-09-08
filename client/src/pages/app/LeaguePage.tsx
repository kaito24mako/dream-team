import { useUser } from "../../utils/context/UserContext.jsx";
import { useLineup } from "../../utils/context/LineupContext.jsx";
import { getLineupAverages } from "../../utils/helpers/getLineup.js";

import Statistic from "../../components/common/statistic/Statistic";
import MatchesSection from "../../components/features/league-page/MatchesSection";

function LeaguePage() {
  const { user, loading: userLoading, errorMsg: userErrorMsg } = useUser();
  const {
    lineup,
    loading: lineupLoading,
    errorMsg: lineupErrorMsg,
  } = useLineup();
  const loading = userLoading || lineupLoading;
  const errorMsg = userErrorMsg || lineupErrorMsg;

  const { offensiveAverage, defensiveAverage } = getLineupAverages(lineup);

  let content;

  if (loading) {
    content = <span>Loading information...</span>;
  } else if (errorMsg) {
    content = <span className="text-error">{errorMsg}</span>;
  } else {
    content = (
      <>
        <div className="flex flex-col items-start md:items-center">
          <p className="font-primary text-xl">It's Game Time</p>
          <p className="font-primary text-primary text-4xl">{user.teamName}</p>
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
      </>
    );
  }

  return (
    <>
      <title>League | Dream Team</title>

      <main className="flex flex-col gap-5 mb-15">
        <div className="flex justify-center items-end gap-10">{content}</div>
        <MatchesSection />
      </main>
    </>
  );
}
export default LeaguePage;
