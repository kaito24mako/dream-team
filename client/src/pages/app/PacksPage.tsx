import { useEffect } from "react";
import { usePlayers } from "../../utils/context/PlayerContext.jsx";
import { useUser } from "../../utils/context/UserContext.jsx";

import BuyPacksSection from "../../components/features/packs-page/BuyPacksSection";
import GallerySection from "../../components/features/packs-page/GallerySection.js";

function PacksPage() {
  const { players, getAllPlayers, loading, errorMsg } = usePlayers();
  const { user } = useUser();

  // once on mount, update players state with all players in the db
  useEffect(() => {
    getAllPlayers();
  }, []);

  return (
    <>
      <title>Packs | Dream Team</title>

      <main className="flex flex-col gap-4 mb-15">
        <BuyPacksSection user={user} />

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
