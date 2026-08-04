import { Helmet } from "react-helmet";
import BuyPacksSection from "../components/features/cards-page/BuyPacksSection";

function PacksPage() {
  return (
    <>
      <Helmet>
        <title>Packs | Dream Team</title>
      </Helmet>

      <main className="flex flex-col gap-4">
        <BuyPacksSection />
      </main>
    </>
  );
}
export default PacksPage;
