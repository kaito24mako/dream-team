import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import SectionHeading from "../../common/text/SectionHeading";
import CardList from "../../common/list/CardList";
import Pack from "../../common/pack/Pack";

import basicPack from "../../../assets/card/pack/basic-pack.png";
import premiumPack from "../../../assets/card/pack/premium-pack2.png";
import hofPack from "../../../assets/card/pack/hof-pack.png";
import positionPack from "../../../assets/card/pack/position-pack.png";
import PackModal from "./PackModal";

type SelectedPack = {
  title: string;
  price: number;
  type: string;
};

function BuyPacksSection({ user }) {
  const [selectedPack, setSelectedPack] = useState<SelectedPack | null>(null);

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
          onBuy={() =>
            setSelectedPack({ title: "Basic Pack", price: 300, type: "basic" })
          }
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
          onBuy={() =>
            setSelectedPack({
              title: "Premium Pack",
              price: 500,
              type: "premium",
            })
          }
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
          onBuy={() =>
            setSelectedPack({
              title: "HOF Pack",
              price: 1000,
              type: "hallOfFame",
            })
          }
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
          onBuy={() =>
            setSelectedPack({
              title: "Position Pack",
              price: 800,
              type: "position",
            })
          }
        />
      </CardList>

      {selectedPack && (
        <PackModal
          user={user}
          selectedPack={selectedPack}
          setSelectedPack={setSelectedPack}
        />
      )}
    </section>
  );
}
export default BuyPacksSection;
