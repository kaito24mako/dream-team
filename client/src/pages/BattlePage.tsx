import Button from "../components/common/button/Button";
import Scoreboard from "../components/features/battle-page/Scoreboard";
import Team from "../components/features/battle-page/Team";

// import RegularCard from "../components/common/playerCard/RegularCard";
// import player2 from "../assets/card/player/player2.png";
// import common from "../assets/card/rarity/common-bg.png";
// import CardList from "../components/common/list/CardList";

function BattlePage() {
  return (
    <main className="flex flex-col gap-7">
      <Scoreboard />
      <Button className="btn-info w-fit mx-auto">Start Match</Button>

      <div className="flex flex-col gap-10">
        <Team />
        <Team />
      </div>
    </main>
  );
}
export default BattlePage;
