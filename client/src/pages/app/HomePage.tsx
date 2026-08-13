import { currentUser } from "../../utils/data/getUsers";

import StatisticsSection from "../../components/features/home-page/StatisticsSection";
import LineupSection from "../../components/features/home-page/LineupSection";
import CollectionSection from "../../components/features/home-page/CollectionSection";

function HomePage() {
  return (
    <>
      <title>Home | Dream Team</title>

      <main className="flex flex-col gap-4 mb-15">
        <div className="font-primary">
          <p className="text-xl">Welcome to</p>
          <h1 className="text-4xl text-primary">{currentUser.teamName}</h1>
        </div>

        <StatisticsSection user={currentUser} />

        <LineupSection user={currentUser} />

        <CollectionSection />
      </main>
    </>
  );
}
export default HomePage;
