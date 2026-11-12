import { TbCards } from "react-icons/tb";
import { RiTeamLine } from "react-icons/ri";
import { PiCoins } from "react-icons/pi";
import { getPlayerByName } from "../../../utils/helpers/getPlayers";

import RegularCard from "../../common/playerCard/RegularCard";
import FullArtCard from "../../common/playerCard/FullArtCard";
import ScrollableItem from "./ScrollableItem";

import fivePlayers from "../../../assets/bg/five-players-bg.png";
import battle from "../../../assets/screenshots/battle-ss.png";
import collection from "../../../assets/screenshots/collection-ss.png";

function ScrollableSection() {
  const xavierThompson = getPlayerByName("Xavier Thompson");
  const dominicKing = getPlayerByName("Dominic King");

  return (
    <section className="flex flex-col gap-20 lg:gap-0">
      <div className="lg:flex lg:items-center lg:min-h-[80dvh]">
        <div
          className="h-75 md:h-95 lg:h-[64dvh] w-full rounded-md shadow-md bg-cover bg-top"
          style={{ backgroundImage: `url(${fivePlayers})` }}
        ></div>
      </div>

      <ScrollableItem
        heading="Collect Players"
        Icon={TbCards}
        description="Open packs to collect players from a custom database of over 100 cards. Acquire players of varying rarities, from common to legendary."
      >
        <div className="flex justify-center gap-4 sm:gap-6">
          <div className="-rotate-3">
            <FullArtCard
              is3D={false}
              playerImage={xavierThompson.image}
              playerRarity={xavierThompson.rarity}
              playerPosition={xavierThompson.position}
              playerName={xavierThompson.fullName}
              offenseCount={xavierThompson.offensiveRating}
              defenseCount={xavierThompson.defensiveRating}
            />
          </div>
          <div className="translate-y-4 rotate-3">
            <RegularCard
              is3D={false}
              playerImage={dominicKing.image}
              playerRarity={dominicKing.rarity}
              playerPosition={dominicKing.position}
              playerName={dominicKing.fullName}
              offenseCount={dominicKing.offensiveRating}
              defenseCount={dominicKing.defensiveRating}
            />
          </div>
        </div>
      </ScrollableItem>

      <ScrollableItem
        heading="Build Your Team"
        Icon={RiTeamLine}
        description="Assemble a five-man roster from your collected players. Choose players with the best offensive and defensive statistics."
      >
        <div
          className="h-65 w-full rounded-md border border-border-base bg-cover bg-top shadow-md lg:h-[40dvh]"
          style={{ backgroundImage: `url(${collection})` }}
        ></div>
      </ScrollableItem>

      <ScrollableItem
        heading="Compete for Rewards"
        Icon={PiCoins}
        description="Face-off against CPU teams of varying difficulties. The higher difficulty you conquer, the bigger the reward. Your rewards are used to open packs."
      >
        <div
          className="h-65 w-full rounded-md border border-border-base bg-cover bg-top shadow-md lg:h-[40dvh]"
          style={{ backgroundImage: `url(${battle})` }}
        ></div>
      </ScrollableItem>
    </section>
  );
}
export default ScrollableSection;
