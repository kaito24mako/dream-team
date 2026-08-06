import { TbCards } from "react-icons/tb";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";

import RegularCard from "../../common/playerCard/RegularCard";
import ScrollableItem from "./ScrollableItem";

import player5 from "../../../assets/card/player/player5.png";
import player2 from "../../../assets/card/player/player2.png";
import rare from "../../../assets/card/rarity/rare-bg.png";
import legendary from "../../../assets/card/rarity/legendary-bg.png";

import fivePlayers from "../../../assets/bg/five-players-bg.png";
import battle from "../../../assets/bg/battle.png";
import coin from "../../../assets/icon/coin.png";
import FullArtCard from "../../common/playerCard/FullArtCard";

function ScrollableSection() {
  return (
    <section className="flex flex-col">
      <div className="flex items-center min-h-[80dvh]">
        <div
          className="h-[64dvh] w-full rounded-md shadow-md bg-cover bg-center"
          style={{ backgroundImage: `url(${fivePlayers})` }}
        ></div>
      </div>

      <ScrollableItem
        heading="Collect Players"
        Icon={TbCards}
        description="Open packs to collect players from a custom database of over 100 cards. Acquire players of varying rarities, from common to legendary."
      >
        <div className="flex gap-5">
          <FullArtCard
            playerImage={player5}
            playerRarity={legendary}
            playerPosition="PG"
            playerName="Kaito Watanabe"
            offenseCount={94}
            defenseCount={96}
          />
          <RegularCard
            playerImage={player2}
            playerRarity={rare}
            playerPosition="SF"
            playerName="Steven Curry"
            offenseCount={76}
            defenseCount={73}
          />
        </div>
      </ScrollableItem>

      <ScrollableItem
        heading="Assemble Your Team"
        Icon={RiTeamLine}
        description="Assemble a five-man roster from your collected players. Choose players with the best offensive and defensive statistics."
      >
        <div
          className="h-[40dvh] w-full rounded-md shadow-md bg-cover bg-top"
          style={{ backgroundImage: `url(${battle})` }}
        ></div>
      </ScrollableItem>

      <ScrollableItem
        heading="Compete for Rewards"
        Icon={AiOutlineShoppingCart}
        description="Face-off against CPU teams of varying difficulties. The higher difficulty you conquer, the bigger the reward. Your rewards are used to open packs."
      >
        <img src={coin} className="h-[36dvh] w-[50%] object-contain" />
      </ScrollableItem>
    </section>
  );
}
export default ScrollableSection;
