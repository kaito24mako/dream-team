import { TbCards } from "react-icons/tb";
import { players } from "../../../data/players";
import { useEffect } from "react";

import SectionHeading from "../../common/text/SectionHeading";
import SearchForm from "../../common/form/SearchForm";
import DropdownBtn from "../../common/button/DropdownBtn";
import RegularCard from "../../common/playerCard/RegularCard";
import Divider from "../../common/divider/Divider";
import CardList from "../../common/list/CardList";
import FullArtCard from "../../common/playerCard/FullArtCard";

import {
  useProducts,
  useProductsGetAll,
} from "../../../context/DaisyContext.jsx";

function CollectionSection() {
  // //! USING THE DAISYCONTEXT
  // const productList = useProducts();
  // const getAll = useProductsGetAll();
  // console.log(productList);

  // useEffect(() => {
  //   getAll();
  // }, []);

  // //! "PLAYERS" THAT I'M PASSING THROUGH NEEDS TO BE THE DATA FROM THE CONTEXT

  return (
    <section className="mt-6">
      <div className="flex justify-between items-end">
        <SectionHeading heading="MY COLLECTION" Icon={TbCards} />
        <div className="flex flex-col sm:flex-row items-center gap-2 mb-3">
          <SearchForm />
          <div className="flex">
            <DropdownBtn
              buttonText="Rating"
              dropdownItems={["Highest", "Lowest"]}
            />
            <DropdownBtn
              buttonText="Position"
              dropdownItems={["PG", "SG", "SF", "PF", "C"]}
            />
            <DropdownBtn
              buttonText="Rarity"
              dropdownItems={["Legendary", "Superstar", "Rare", "Common"]}
            />
          </div>
        </div>
      </div>

      <Divider color="default" />

      <CardList className="px-7">
        {players.map((player) =>
          player.rarity === "Legendary" ? (
            <FullArtCard
              key={player.id}
              playerImage={player.image}
              playerRarity={player.rarity}
              playerPosition={player.position}
              playerName={player.fullName}
              offenseCount={player.offensiveRating}
              defenseCount={player.defensiveRating}
            />
          ) : (
            <RegularCard
              key={player.id}
              playerImage={player.image}
              playerRarity={player.rarity}
              playerPosition={player.position}
              playerName={player.fullName}
              offenseCount={player.offensiveRating}
              defenseCount={player.defensiveRating}
            />
          ),
        )}
      </CardList>
    </section>
  );
}
export default CollectionSection;
