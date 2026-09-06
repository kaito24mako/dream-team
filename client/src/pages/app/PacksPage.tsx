import { useEffect } from "react";
import { usePlayers } from "../../utils/context/PlayerContext.jsx";

import BuyPacksSection from "../../components/features/cards-page/BuyPacksSection";
import GallerySection from "../../components/features/cards-page/GallerySection.js";

function PacksPage() {
  const { players, getAllPlayers, loading, errorMsg } = usePlayers();

  // once on mount, update players state with all players in the db
  useEffect(() => {
    getAllPlayers();
  }, []);

  return (
    <>
      <title>Packs | Dream Team</title>

      <main className="flex flex-col gap-4 mb-15">
        <BuyPacksSection />

        <GallerySection
          players={players}
          loading={loading}
          errorMsg={errorMsg}
        />
      </main>
    </>
  );
}
export default PacksPage;
