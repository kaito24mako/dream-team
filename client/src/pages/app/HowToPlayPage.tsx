import CollectSection from "../../components/features/howToPlay-page/CollectSection";
import CompeteSection from "../../components/features/howToPlay-page/CompeteSection";

function HowToPlayPage() {
  return (
    <>
      <title>How to Play | Dream Team</title>

      <main className="flex flex-col gap-7 mb-15">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl text-primary">How to Play</h1>
          <p>
            In Dream Team, it is your goal to create a lineup of the five best
            players at your disposal, in order to compete against the highest
            level opponents to earn the best rewards.
          </p>
        </div>

        <CollectSection />
        <CompeteSection />
      </main>
    </>
  );
}
export default HowToPlayPage;
