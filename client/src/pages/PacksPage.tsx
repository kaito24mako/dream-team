import BuyPacksSection from "../components/features/cards-page/BuyPacksSection";
import FeaturedSection from "../components/features/cards-page/FeaturedSection";

function PacksPage() {
  return (
    <>
      <title>Packs | Dream Team</title>

      <main className="flex flex-col gap-4 mb-15">
        <BuyPacksSection />

        <FeaturedSection />
      </main>
    </>
  );
}
export default PacksPage;
