import { currentUser } from "../../utils/data/getUsers";
import {
  lineupPG,
  lineupSG,
  lineupSF,
  lineupPF,
  lineupC,
} from "../../utils/data/getLineup";

// import Button from "../components/common/button/Button";
import Scoreboard from "../../components/features/battle-page/Scoreboard";
import Team from "../../components/features/battle-page/Team";
import SmallCard from "../../components/common/playerCard/SmallCard";
import VSList from "../../components/features/battle-page/VSList";

import black from "../../assets/card/rarity/black-bg.png";
import enemy1 from "../../assets/card/enemy/enemy1.png";
import enemy2 from "../../assets/card/enemy/enemy2.png";
import enemy3 from "../../assets/card/enemy/enemy3.png";
import enemy4 from "../../assets/card/enemy/enemy4.png";
import enemy5 from "../../assets/card/enemy/enemy5.png";

function BattlePage() {
  return (
    <main className="flex flex-col gap-5 pb-5">
      <Scoreboard />

      <div className="flex flex-row md:flex-col md:gap-5">
        <Team teamName={currentUser.teamName} teamNameColor="text-primary">
          {lineupPG.rarity === "Legendary" ? (
            <SmallCard
              playerImage={lineupPG.image}
              playerRarity={lineupPG.rarity}
              playerPosition={lineupPG.position}
              playerName={lineupPG.fullName}
              offenseCount={lineupPG.offensiveRating}
              defenseCount={lineupPG.defensiveRating}
            />
          ) : (
            <SmallCard
              playerImage={lineupPG.image}
              playerRarity={lineupPG.rarity}
              playerPosition={lineupPG.position}
              playerName={lineupPG.fullName}
              offenseCount={lineupPG.offensiveRating}
              defenseCount={lineupPG.defensiveRating}
            />
          )}
          {lineupSG.rarity === "Legendary" ? (
            <SmallCard
              playerImage={lineupSG.image}
              playerRarity={lineupSG.rarity}
              playerPosition={lineupSG.position}
              playerName={lineupSG.fullName}
              offenseCount={lineupSG.offensiveRating}
              defenseCount={lineupSG.defensiveRating}
            />
          ) : (
            <SmallCard
              playerImage={lineupSG.image}
              playerRarity={lineupSG.rarity}
              playerPosition={lineupSG.position}
              playerName={lineupSG.fullName}
              offenseCount={lineupSG.offensiveRating}
              defenseCount={lineupSG.defensiveRating}
            />
          )}
          {lineupSF.rarity === "Legendary" ? (
            <SmallCard
              playerImage={lineupSF.image}
              playerRarity={lineupSF.rarity}
              playerPosition={lineupSF.position}
              playerName={lineupSF.fullName}
              offenseCount={lineupSF.offensiveRating}
              defenseCount={lineupSF.defensiveRating}
            />
          ) : (
            <SmallCard
              playerImage={lineupSF.image}
              playerRarity={lineupSF.rarity}
              playerPosition={lineupSF.position}
              playerName={lineupSF.fullName}
              offenseCount={lineupSF.offensiveRating}
              defenseCount={lineupSF.defensiveRating}
            />
          )}
          {lineupPF.rarity === "Legendary" ? (
            <SmallCard
              playerImage={lineupPF.image}
              playerRarity={lineupPF.rarity}
              playerPosition={lineupPF.position}
              playerName={lineupPF.fullName}
              offenseCount={lineupPF.offensiveRating}
              defenseCount={lineupPF.defensiveRating}
            />
          ) : (
            <SmallCard
              playerImage={lineupPF.image}
              playerRarity={lineupPF.rarity}
              playerPosition={lineupPF.position}
              playerName={lineupPF.fullName}
              offenseCount={lineupPF.offensiveRating}
              defenseCount={lineupPF.defensiveRating}
            />
          )}
          {lineupC.rarity === "Legendary" ? (
            <SmallCard
              playerImage={lineupC.image}
              playerRarity={lineupC.rarity}
              playerPosition={lineupC.position}
              playerName={lineupC.fullName}
              offenseCount={lineupC.offensiveRating}
              defenseCount={lineupC.defensiveRating}
            />
          ) : (
            <SmallCard
              playerImage={lineupC.image}
              playerRarity={lineupC.rarity}
              playerPosition={lineupC.position}
              playerName={lineupC.fullName}
              offenseCount={lineupC.offensiveRating}
              defenseCount={lineupC.defensiveRating}
            />
          )}
        </Team>

        {/* <Button className="btn-info w-fit mx-auto">Start Match</Button> */}
        <VSList />

        <Team teamName="Manchester Kings" teamNameColor="text-white">
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
