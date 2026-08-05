import player5 from "../../../assets/card/player/player5.png";
import common from "../../../assets/card/rarity/common-bg.png";
import legendary from "../../../assets/card/rarity/legendary-bg.png";
import FullArtCard from "../../common/playerCard/FullArtCard";
import RegularCard from "../../common/playerCard/RegularCard";

function ScrollableSection() {
  return (
    <section className="flex justify-center items-center gap-5 my-10">
      <div className="flex flex-col w-full gap-5">
        <h2 className="text-5xl">Collect Players</h2>

        <div className="text-2xl">
          <p>
            Open packs to collect players from a custom database of over 100
            cards.
          </p>
        </div>
      </div>

      {/* <div
        className="border border-border w-full h-[80%] bg-cover bg-center rounded-md"
        style={{ backgroundImage: `url(${player5})` }}
      ></div> */}

      <div className="flex justify-center items-center gap-5 w-full h-[80%] rounded-md">
        <RegularCard
          playerImage={player5}
          playerRarity={common}
          playerPosition="PG"
          playerName="Kaito Watanabe"
          offenseCount={89}
          defenseCount={92}
        />
        <FullArtCard
          playerImage={player5}
          playerRarity={legendary}
          playerPosition="PG"
          playerName="Kaito Watanabe"
          offenseCount={89}
          defenseCount={92}
        />
      </div>
    </section>
  );
}
export default ScrollableSection;
