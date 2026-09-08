import { useUser } from "../../utils/context/UserContext.jsx";
import { useLineup } from "../../utils/context/LineupContext.jsx";

import StatisticsSection from "../../components/features/home-page/StatisticsSection";
import LineupSection from "../../components/features/home-page/LineupSection";
import CollectionSection from "../../components/features/home-page/CollectionSection";

function HomePage() {
  const { user, loading: userLoading, errorMsg: userErrorMsg } = useUser();
  const {
    lineup,
    loading: lineupLoading,
    errorMsg: lineupErrorMsg,
  } = useLineup();

  return (
    <>
      <title>Home | Dream Team</title>

      <main className="flex flex-col gap-4 mb-15">
        <div className="font-primary">
          <p className="text-xl">Welcome to</p>
          <h1 className="text-4xl text-primary">{user.teamName}</h1>
        </div>

        <StatisticsSection
          user={user}
          lineup={lineup}
          loading={userLoading}
          errorMsg={userErrorMsg}
        />

        <LineupSection
          lineup={lineup}
          loading={lineupLoading}
          errorMsg={lineupErrorMsg}
        />

        <CollectionSection
          user={user}
          loading={userLoading}
          errorMsg={userErrorMsg}
        />
      </main>
    </>
  );
}
export default HomePage;
