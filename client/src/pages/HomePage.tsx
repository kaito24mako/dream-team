import StatisticsSection from "../components/features/home-page/StatisticsSection";
import PlayerCard from "../components/common/card/PlayerCard";

import grid from "../assets/bg/grid-black.png";
import player1 from "../assets/card/player/player-1.png";

function HomePage() {
  return (
    <main className="flex flex-col gap-4">
      <div className="font-primary">
        <p className="text-xl">Welcome to</p>
        <h1 className="text-4xl text-primary">Melbourne Demons</h1>
      </div>

      <StatisticsSection />

      <div className="mt-6">
        <h2 className="text-2xl mb-3">😤 STARTING LINEUP</h2>

        <div className="border border-border">
          <img src={grid} className="bg-cover bg-full w-full" />
        </div>

        <PlayerCard
          playerImage={player1}
          playerName="Kaito Watanabe"
          offenseCount={89}
          defenseCount={92}
        />
      </div>
    </main>
  );
}
export default HomePage;
