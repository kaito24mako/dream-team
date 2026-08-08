// import Button from "../components/common/button/Button";
import Scoreboard from "../components/features/battle-page/Scoreboard";
import Team from "../components/features/battle-page/Team";
import SmallCard from "../components/common/playerCard/SmallCard";
import VSList from "../components/features/battle-page/VSList";

import player2 from "../assets/card/player/player2.png";
import common from "../assets/card/rarity/common-bg.png";
import black from "../assets/card/rarity/black-bg.png";
import enemy1 from "../assets/card/enemy/enemy1.png";
import enemy2 from "../assets/card/enemy/enemy2.png";
import enemy3 from "../assets/card/enemy/enemy3.png";
import enemy4 from "../assets/card/enemy/enemy4.png";
import enemy5 from "../assets/card/enemy/enemy5.png";

function BattlePage() {
  return (
    <main className="flex flex-col gap-5 pb-5">
      <Scoreboard />

      <div className="flex flex-row md:flex-col md:gap-5">
        <Team teamName="MELBOURNE DEMONS" teamNameColor="text-primary">
          <SmallCard
            playerImage={player2}
            playerRarity={common}
            playerPosition="PG"
            playerName="Kaito Watanabe"
            offenseCount={89}
            defenseCount={92}
          />
          <SmallCard
            playerImage={player2}
            playerRarity={common}
            playerPosition="SG"
            playerName="Kaito Watanabe"
            offenseCount={89}
            defenseCount={92}
          />
          <SmallCard
            playerImage={player2}
            playerRarity={common}
            playerPosition="SG"
            playerName="Kaito Watanabe"
            offenseCount={89}
            defenseCount={92}
          />
          <SmallCard
            playerImage={player2}
            playerRarity={common}
            playerPosition="SG"
            playerName="Kaito Watanabe"
            offenseCount={89}
            defenseCount={92}
          />
          <SmallCard
            playerImage={player2}
            playerRarity={common}
            playerPosition="SG"
            playerName="Kaito Watanabe"
            offenseCount={89}
            defenseCount={92}
          />
        </Team>

        {/* <Button className="btn-info w-fit mx-auto">Start Match</Button> */}
        <VSList />

        <Team teamName="MANCHESTER KINGS" teamNameColor="text-white">
          <SmallCard
            playerImage={enemy1}
            playerRarity={black}
            playerPosition="PG"
            playerName="Ja Verant"
            offenseCount={89}
            defenseCount={92}
            isEnemy={true}
          />
          <SmallCard
            playerImage={enemy2}
            playerRarity={black}
            playerPosition="SG"
            playerName="Jimmy Guttler"
            offenseCount={89}
            defenseCount={92}
            isEnemy={true}
          />
          <SmallCard
            playerImage={enemy3}
            playerRarity={black}
            playerPosition="SF"
            playerName="Kevin Reaper"
            offenseCount={89}
            defenseCount={92}
            isEnemy={true}
          />
          <SmallCard
            playerImage={enemy4}
            playerRarity={black}
            playerPosition="PF"
            playerName="Zion Dunkson"
            offenseCount={89}
            defenseCount={92}
            isEnemy={true}
          />
          <SmallCard
            playerImage={enemy5}
            playerRarity={black}
            playerPosition="C"
            playerName="Joel Jimbeed"
            offenseCount={89}
            defenseCount={92}
            isEnemy={true}
          />
        </Team>
      </div>
    </main>
  );
}
export default BattlePage;
