import { AiOutlineShoppingCart } from "react-icons/ai";

import SectionHeading from "../../common/text/SectionHeading";
import PlayerCardList from "../../common/playerCard/PlayerCardList";
import Pack from "../../common/pack/Pack";

import basicPack from "../../../assets/card/pack/basic-pack.png";
import premiumPack from "../../../assets/card/pack/premium-pack2.png";
import hofPack from "../../../assets/card/pack/hof-pack.png";
import positionPack from "../../../assets/card/pack/position-pack.png";

function BuyPacksSection() {
  return (
    <section className="mb-8">
      <SectionHeading
        heading="Buy Packs"
        Icon={AiOutlineShoppingCart}
        divider={true}
      />

      <PlayerCardList>
        <Pack
          packBg={basicPack}
          title="Basic Pack"
          content="1 player"
          chances={[
            "60% for common player",
            "30% for rare player",
            "8% for superstar player",
            "2% for legendary player",
          ]}
          price="$300"
        />
        <Pack
          packBg={premiumPack}
          title="Premium Pack"
          content="1 player"
          chances={[
            "60% for common player",
            "30% for rare player",
            "8% for superstar player",
            "2% for legendary player",
          ]}
          price="$300"
        />
        <Pack
          packBg={hofPack}
          title="HOF Pack"
          content="1 player"
          chances={[
            "60% for common player",
            "30% for rare player",
            "8% for superstar player",
            "2% for legendary player",
          ]}
          price="$300"
        />
        <Pack
          packBg={positionPack}
          title="Position Pack"
          content="1 player of a chosen position"
          chances={[
            "60% for common player",
            "30% for rare player",
            "8% for superstar player",
            "2% for legendary player",
          ]}
          price="$300"
        />
      </PlayerCardList>
    </section>
  );
}
export default BuyPacksSection;
