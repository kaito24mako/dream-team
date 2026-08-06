import FixedSection from "../components/features/landing-page/FixedSection";
import ScrollableSection from "../components/features/landing-page/ScrollableSection";
import BottomSection from "../components/features/landing-page/BottomSection";

function LandingPage() {
  return (
    <main className="flex flex-col gap-10">
      <div className="grid grid-cols-2 items-start gap-10">
        <FixedSection />
        <ScrollableSection />
      </div>
      <BottomSection />
    </main>
  );
}
export default LandingPage;
