import { currentUser } from "../../utils/data/getUsers";
import {
  lineupPG,
  lineupSG,
  lineupSF,
  lineupPF,
  lineupC,
} from "../../utils/data/getLineup";
// import { opponents } from "../../data/opponents";

// import Button from "../components/common/button/Button";
import Scoreboard from "../../components/features/battle-page/Scoreboard";
import Team from "../../components/features/battle-page/Team";
import VSList from "../../components/features/battle-page/VSList";
import RegularCardXS from "../../components/common/playerCard/RegularCardXS";
import FullArtCardXS from "../../components/common/playerCard/FullArtCardXS";

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
        {/* user's team */}
        <Team teamName={currentUser.teamName} teamNameColor="text-primary">
          {lineupPG.rarity === "Legendary" ? (
            <FullArtCardXS
              playerImage={lineupPG.image}
              playerRarity={lineupPG.rarity}
              playerPosition={lineupPG.position}
              playerName={lineupPG.fullName}
              offenseCount={lineupPG.offensiveRating}
              defenseCount={lineupPG.defensiveRating}
            />
          ) : (
            <RegularCardXS
              playerImage={lineupPG.image}
              playerRarity={lineupPG.rarity}
              playerPosition={lineupPG.position}
              playerName={lineupPG.fullName}
              offenseCount={lineupPG.offensiveRating}
              defenseCount={lineupPG.defensiveRating}
            />
          )}
          {lineupSG.rarity === "Legendary" ? (
            <FullArtCardXS
              playerImage={lineupSG.image}
              playerRarity={lineupSG.rarity}
              playerPosition={lineupSG.position}
              playerName={lineupSG.fullName}
              offenseCount={lineupSG.offensiveRating}
              defenseCount={lineupSG.defensiveRating}
            />
          ) : (
            <RegularCardXS
              playerImage={lineupSG.image}
              playerRarity={lineupSG.rarity}
              playerPosition={lineupSG.position}
              playerName={lineupSG.fullName}
              offenseCount={lineupSG.offensiveRating}
              defenseCount={lineupSG.defensiveRating}
            />
          )}
          {lineupSF.rarity === "Legendary" ? (
            <FullArtCardXS
              playerImage={lineupSF.image}
              playerRarity={lineupSF.rarity}
              playerPosition={lineupSF.position}
              playerName={lineupSF.fullName}
              offenseCount={lineupSF.offensiveRating}
              defenseCount={lineupSF.defensiveRating}
            />
          ) : (
            <RegularCardXS
              playerImage={lineupSF.image}
              playerRarity={lineupSF.rarity}
              playerPosition={lineupSF.position}
              playerName={lineupSF.fullName}
              offenseCount={lineupSF.offensiveRating}
              defenseCount={lineupSF.defensiveRating}
            />
          )}
          {lineupPF.rarity === "Legendary" ? (
            <FullArtCardXS
              playerImage={lineupPF.image}
              playerRarity={lineupPF.rarity}
              playerPosition={lineupPF.position}
              playerName={lineupPF.fullName}
              offenseCount={lineupPF.offensiveRating}
              defenseCount={lineupPF.defensiveRating}
            />
          ) : (
            <RegularCardXS
              playerImage={lineupPF.image}
              playerRarity={lineupPF.rarity}
              playerPosition={lineupPF.position}
              playerName={lineupPF.fullName}
              offenseCount={lineupPF.offensiveRating}
              defenseCount={lineupPF.defensiveRating}
            />
          )}
          {lineupC.rarity === "Legendary" ? (
            <FullArtCardXS
              playerImage={lineupC.image}
              playerRarity={lineupC.rarity}
              playerPosition={lineupC.position}
              playerName={lineupC.fullName}
              offenseCount={lineupC.offensiveRating}
              defenseCount={lineupC.defensiveRating}
            />
          ) : (
            <RegularCardXS
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

        {/* opponent's team */}
        <Team teamName="Manchester Kings" teamNameColor="text-white">
          <RegularCardXS
            playerImage={enemy1}
            playerRarity={black}
            playerPosition="PG"
            playerName="Ja Verant"
            offenseCount={89}
            defenseCount={92}
            isEnemy={true}
          />
          <RegularCardXS
            playerImage={enemy2}
            playerRarity={black}
            playerPosition="SG"
            playerName="Jimmy Guttler"
            offenseCount={89}
            defenseCount={92}
            isEnemy={true}
          />
          <RegularCardXS
            playerImage={enemy3}
            playerRarity={black}
            playerPosition="SF"
            playerName="Kevin Reaper"
            offenseCount={89}
            defenseCount={92}
            isEnemy={true}
          />
          <RegularCardXS
            playerImage={enemy4}
            playerRarity={black}
            playerPosition="PF"
            playerName="Zion Dunkson"
            offenseCount={89}
            defenseCount={92}
            isEnemy={true}
          />
          <RegularCardXS
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
