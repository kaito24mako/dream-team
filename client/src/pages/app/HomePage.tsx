import { users } from "../../data/users";
import { currentUserId } from "../../data/session";

import StatisticsSection from "../../components/features/home-page/StatisticsSection";
import LineupSection from "../../components/features/home-page/LineupSection";
import CollectionSection from "../../components/features/home-page/CollectionSection";

function HomePage() {
  // to get json object of current session's user
  const currentUser = users.find((user) => user.id === currentUserId);
  console.log(currentUser);

  return (
    <>
      <title>Home | Dream Team</title>

      <main className="flex flex-col gap-4 mb-15">
        <div className="font-primary">
          <p className="text-xl">Welcome to</p>
          <h1 className="text-4xl text-primary">{currentUser.teamName}</h1>
        </div>

        <StatisticsSection currentUser={currentUser} />

        <LineupSection />

        <CollectionSection />
      </main>
    </>
  );
}
export default HomePage;
