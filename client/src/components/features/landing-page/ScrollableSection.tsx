import { TbCards } from "react-icons/tb";
import { RiTeamLine } from "react-icons/ri";
import { PiCoins } from "react-icons/pi";
import { getPlayerByName } from "../../../utils/helpers/getPlayers";

import RegularCard from "../../common/playerCard/RegularCard";
import FullArtCard from "../../common/playerCard/FullArtCard";
import ScrollableItem from "./ScrollableItem";
import BoxedFrame from "../../common/frame/BoxedFrame";

import fivePlayers from "../../../assets/bg/five-players-bg.png";
import battle from "../../../assets/bg/battle.png";
import coin from "../../../assets/icon/coin.png";

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
        <BoxedFrame>
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
        </BoxedFrame>
      </ScrollableItem>

      <ScrollableItem
        heading="Build Your Team"
        Icon={RiTeamLine}
        description="Assemble a five-man roster from your collected players. Choose players with the best offensive and defensive statistics."
      >
        <BoxedFrame>
          <div
            className="h-65 w-full rounded-md border border-border-base bg-cover bg-top shadow-md lg:h-[40dvh]"
            style={{ backgroundImage: `url(${battle})` }}
          ></div>
        </BoxedFrame>
      </ScrollableItem>

      <ScrollableItem
        heading="Compete for Rewards"
        Icon={PiCoins}
        description="Face-off against CPU teams of varying difficulties. The higher difficulty you conquer, the bigger the reward. Your rewards are used to open packs."
      >
        <BoxedFrame>
          <div className="flex min-h-65 items-center justify-center rounded-md border border-border-base bg-base-300/40 p-8 lg:min-h-[36dvh]">
            <img
              src={coin}
              alt=""
              className="h-50 w-full object-contain drop-shadow-2xl md:h-60 lg:h-[30dvh]"
            />
          </div>
        </BoxedFrame>
      </ScrollableItem>
    </section>
  );
}
export default ScrollableSection;
