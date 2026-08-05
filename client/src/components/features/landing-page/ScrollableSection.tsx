import RegularCard from "../../common/playerCard/RegularCard";
import ScrollableItem from "./ScrollableItem";

import player1 from "../../../assets/card/player/player5.png";
import common from "../../../assets/card/rarity/common-bg.png";
import superstar from "../../../assets/card/rarity/superstar-bg.png";

import fivePlayers from "../../../assets/bg/five-players-bg.png";
import battle from "../../../assets/bg/battle.png";
import coin from "../../../assets/icon/coin.png";

function ScrollableSection() {
  return (
    <section className="h-full w-[50%] overflow-y-auto snap-y snap-mandatory">
      <div className="flex items-center h-full shrink-0 snap-start">
        <div
          className="h-[80%] w-full rounded-md shadow-md bg-cover bg-center"
          style={{ backgroundImage: `url(${fivePlayers})` }}
        ></div>
      </div>

      <ScrollableItem
        heading="Collect Players"
        description="Open packs to collect players from a custom database of over 100 cards."
      >
        <div className="flex gap-5">
          <RegularCard
            playerImage={player1}
            playerRarity={common}
            playerPosition="PG"
            playerName="Kaito Watanabe"
            offenseCount={89}
            defenseCount={92}
          />
          <RegularCard
            playerImage={player1}
            playerRarity={superstar}
            playerPosition="PG"
            playerName="Kaito Watanabe"
            offenseCount={89}
            defenseCount={92}
          />
        </div>
      </ScrollableItem>

      <ScrollableItem
        heading="Assemble Your Team"
        description="Assemble a five-man roster and play against various CPU teams."
      >
        <div
          className="h-[50%] w-full rounded-md shadow-md bg-cover bg-top"
          style={{ backgroundImage: `url(${battle})` }}
        ></div>
      </ScrollableItem>

      <ScrollableItem
        heading="Win for Rewards"
        description="The higher difficulty you conquer, the bigger the reward."
      >
        <img src={coin} className="h-[45%] w-[50%]" />
      </ScrollableItem>
    </section>
  );
}
export default ScrollableSection;
