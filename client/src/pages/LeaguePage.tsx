import Statistic from "../components/common/statistic/Statistic";
import MatchesSection from "../components/features/league-page/MatchesSection";

function LeaguePage() {
  return (
    <>
      <title>League | Dream Team</title>

      <main className="flex flex-col gap-5 mb-15">
        <div className="flex justify-center items-end gap-10">
          <div className="flex flex-col items-start md:items-center">
            <p className="font-primary text-xl">It's Game Time</p>
            <p className="font-primary text-primary text-4xl">
              Melbourne Demons
            </p>
          </div>

          <div className="flex gap-6">
            <Statistic
              title="Offense"
              count={89}
              countSize="large"
              textAlign="center"
            />
            <Statistic
              title="Defense"
              count={95}
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
