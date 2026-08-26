import { AiOutlineShoppingCart } from "react-icons/ai";

import SectionHeading from "../../common/text/SectionHeading";
import CardList from "../../common/list/CardList";
import Pack from "../../common/pack/Pack";

import basicPack from "../../../assets/card/pack/basic-pack.png";
import premiumPack from "../../../assets/card/pack/premium-pack2.png";
import hofPack from "../../../assets/card/pack/hof-pack.png";
import positionPack from "../../../assets/card/pack/position-pack.png";

function BuyPacksSection() {
  return (
    <section className="mb-8">
      <SectionHeading
        heading="BUY PACKS"
        Icon={AiOutlineShoppingCart}
        divider={true}
      />

      <CardList>
        <Pack
          packBg={basicPack}
          title="Basic Pack"
          content="1 player"
          chances={[
            "60% for common",
            "30% for rare",
            "8% for superstar",
            "2% for legendary",
          ]}
          price={300}
        />
        <Pack
          packBg={premiumPack}
          title="Premium Pack"
          content="1 player"
          chances={[
            "30% for common",
            "40% for rare",
            "20% for superstar",
            "10% for legendary",
          ]}
          price={500}
        />
        <Pack
          packBg={hofPack}
          title="HOF Pack"
          content="1 player"
          chances={[
            "0% for common",
            "40% for rare",
            "35% for superstar",
            "25% for legendary",
          ]}
          price={1000}
        />
        <Pack
          packBg={positionPack}
          title="Position Pack"
          content="1 positional player"
          chances={[
            "20% for common",
            "40% for rare",
            "25% for superstar",
            "15% for legendary",
          ]}
          price={800}
        />
      </CardList>
    </section>
  );
}
export default BuyPacksSection;
