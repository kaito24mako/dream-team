import { useState } from "react";
import { usePack } from "../../../utils/context/PackContext.jsx";
import { useUser } from "../../../utils/context/UserContext.jsx";

import Button from "../../common/button/Button.js";
import MysteryCard from "../../common/playerCard/MysteryCard.js";
import RegularCard from "../../common/playerCard/RegularCard.js";
import FullArtCard from "../../common/playerCard/FullArtCard.js";

function PackModal({ user, selectedPack, setSelectedPack }) {
  const { openPack, pulledPlayer, loading, errorMsg } = usePack();
  const { getUserAndPlayers } = useUser();

  const [isBought, setIsBought] = useState(false);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={() => setSelectedPack(null)}
    >
      <div
        className="w-full max-w-sm rounded-lg bg-base-100 p-6 md:p-8 text-base-content shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* pack title */}
        <h3 className="mb-2 text-xl">{selectedPack.title}</h3>

        {/* sub-text */}
        {!isBought ? (
          <p className="mb-4">
            Buy this pack for{" "}
            <span className="font-bold text-coin">{selectedPack.price}</span>{" "}
            coins?
          </p>
        ) : (
          <p className="mb-4">
            You obtained{" "}
            <span
              className={`font-semibold ${
                pulledPlayer.rarity === "Legendary"
                  ? "text-rarity-legendary"
                  : pulledPlayer.rarity === "Superstar"
                    ? "text-rarity-superstar"
                    : pulledPlayer.rarity === "Rare"
                      ? "text-rarity-rare"
                      : ""
              }`}
            >
              {pulledPlayer.fullName}
            </span>
            !
          </p>
        )}

        {/* buttons */}
        <div className="flex justify-start gap-3 mb-6">
          {!isBought ? (
            <>
              <Button
                size="small"
                textColor="black"
                className="bg-primary p-4"
                onClick={async () => {
                  const player = await openPack(user.id, selectedPack.type);
                  if (player) {
                    setIsBought(true);
                  }
                  getUserAndPlayers(user.id);
                }}
              >
                Confirm
              </Button>
              <Button
                size="small"
                className="bg-neutral-700 p-4"
                onClick={() => setSelectedPack(null)}
              >
                Cancel
              </Button>
            </>
          ) : (
            <Button
              size="small"
              className="bg-neutral-700 p-4"
              onClick={() => {
                setSelectedPack(null);
                setIsBought(false);
              }}
            >
              Finish
            </Button>
          )}
        </div>

        {/* card */}
        {loading ? (
          <span>Opening pack...</span>
        ) : errorMsg ? (
          <span className="text-error">{errorMsg}</span>
        ) : (
          <div className="flex justify-center">
            {!isBought ? (
              <MysteryCard />
            ) : isBought && pulledPlayer.rarity === "Legendary" ? (
              <FullArtCard
                playerImage={pulledPlayer.image}
                playerRarity={pulledPlayer.rarity}
                playerPosition={pulledPlayer.position}
                playerName={pulledPlayer.fullName}
                offenseCount={pulledPlayer.offensiveRating}
                defenseCount={pulledPlayer.defensiveRating}
              />
            ) : (
              <RegularCard
                playerImage={pulledPlayer.image}
                playerRarity={pulledPlayer.rarity}
                playerPosition={pulledPlayer.position}
                playerName={pulledPlayer.fullName}
                offenseCount={pulledPlayer.offensiveRating}
                defenseCount={pulledPlayer.defensiveRating}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default PackModal;
