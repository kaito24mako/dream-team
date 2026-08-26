import { useEffect } from "react";
import {
  useUser,
  useUserGetPlayers,
} from "../../utils/context/UserContext.jsx";

import StatisticsSection from "../../components/features/home-page/StatisticsSection";
import LineupSection from "../../components/features/home-page/LineupSection";
import CollectionSection from "../../components/features/home-page/CollectionSection";

function HomePage() {
  const user = useUser();
  const getUserAndPlayers = useUserGetPlayers();

  useEffect(() => {
    getUserAndPlayers();
  }, [getUserAndPlayers]);

  return (
    <>
      <title>Home | Dream Team</title>

      <main className="flex flex-col gap-4 mb-15">
        <div className="font-primary">
          <p className="text-xl">Welcome to</p>
          <h1 className="text-4xl text-primary">{user.teamName}</h1>
        </div>

        <StatisticsSection user={user} />

        <LineupSection />

        <CollectionSection />
      </main>
    </>
  );
}
export default HomePage;
