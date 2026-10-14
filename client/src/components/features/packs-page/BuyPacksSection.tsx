import { useState } from "react";
import { IoCashOutline } from "react-icons/io5";

import CardList from "../../common/list/CardList";
import Pack from "../../common/pack/Pack";
import PackModal from "../../common/modal/PackModal";
import MajorHeading from "../../common/text/MajorHeading";
import SectionWrapper from "../../common/wrapper/SectionWrapper";

import basicPack from "../../../assets/card/pack/basic-pack.png";
import premiumPack from "../../../assets/card/pack/premium-pack.png";
import dreamPack from "../../../assets/card/pack/dream-pack.png";

type SelectedPack = {
  title: string;
  price: number;
  type: string;
};

function BuyPacksSection({ user }) {
  const [selectedPack, setSelectedPack] = useState<SelectedPack | null>(null);

  return (
    <SectionWrapper className="mb-8 mt-2!">
      <MajorHeading
        heading="BUY PACKS"
        Icon={IoCashOutline}
        divider={true}
        description="Spend currency to improve your team with new players."
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
          packBg={dreamPack}
          title="Dream Pack"
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
              title: "Dream Pack",
              price: 1000,
              type: "hallOfFame",
            })
          }
        />
        {/* <Pack
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
        /> */}
      </CardList>

      {selectedPack && (
        <PackModal
          user={user}
          selectedPack={selectedPack}
          setSelectedPack={setSelectedPack}
        />
      )}
    </SectionWrapper>
  );
}
export default BuyPacksSection;
