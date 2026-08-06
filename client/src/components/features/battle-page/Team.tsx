import CardList from "../../common/list/CardList";
import RegularCard from "../../common/playerCard/RegularCard";

import player2 from "../../../assets/card/player/player2.png";
import common from "../../../assets/card/rarity/common-bg.png";

function Team() {
  return (
    <div className="flex gap-4 mx-auto">
      <div className="flex w-8 items-center justify-center">
        <h3 className="text-4xl text-primary rotate-270 whitespace-nowrap">
          MELBOURNE DEMONS
        </h3>
      </div>

      <CardList className="bg-base-300 rounded-lg shadow-lg p-6 w-fit">
        <RegularCard
          playerImage={player2}
          playerRarity={common}
          playerPosition="SG"
          playerName="Kaito Watanabe"
          offenseCount={89}
          defenseCount={92}
        />
        <RegularCard
          playerImage={player2}
          playerRarity={common}
          playerPosition="SG"
          playerName="Kaito Watanabe"
          offenseCount={89}
          defenseCount={92}
        />
        <RegularCard
          playerImage={player2}
          playerRarity={common}
          playerPosition="SG"
          playerName="Kaito Watanabe"
          offenseCount={89}
          defenseCount={92}
        />
        <RegularCard
          playerImage={player2}
          playerRarity={common}
          playerPosition="SG"
          playerName="Kaito Watanabe"
          offenseCount={89}
          defenseCount={92}
        />
        <RegularCard
          playerImage={player2}
          playerRarity={common}
          playerPosition="SG"
          playerName="Kaito Watanabe"
          offenseCount={89}
          defenseCount={92}
        />
      </CardList>
    </div>
  );
}
export default Team;
