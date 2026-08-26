import { useEffect } from "react";
import {
  usePlayers,
  usePlayersGetAll,
} from "../../utils/context/PlayerContext.jsx";

import BuyPacksSection from "../../components/features/cards-page/BuyPacksSection";
import GallerySection from "../../components/features/cards-page/GallerySection.js";

function PacksPage() {
  const players = usePlayers();
  const getAllPlayers = usePlayersGetAll();

  useEffect(() => {
    getAllPlayers();
  }, [getAllPlayers]);

  return (
    <>
      <title>Packs | Dream Team</title>

      <main className="flex flex-col gap-4 mb-15">
        <BuyPacksSection />
        <GallerySection players={players} />
      </main>
    </>
  );
}
export default PacksPage;
