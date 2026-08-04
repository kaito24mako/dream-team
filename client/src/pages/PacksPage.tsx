import { Helmet } from "react-helmet";
import BuyPacksSection from "../components/features/cards-page/BuyPacksSection";
import FeaturedSection from "../components/features/cards-page/FeaturedSection";

function PacksPage() {
  return (
    <>
      <Helmet>
        <title>Packs | Dream Team</title>
      </Helmet>

      <main className="flex flex-col gap-4">
        <BuyPacksSection />

        <FeaturedSection />
      </main>
    </>
  );
}
export default PacksPage;
