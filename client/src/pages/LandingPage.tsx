import FixedSection from "../components/features/landing-page/FixedSection";
import ScrollableSection from "../components/features/landing-page/ScrollableSection";
import BottomSection from "../components/features/landing-page/BottomSection";

function LandingPage() {
  return (
    <main className="flex flex-col gap-10">
      <div className="flex flex-col items-center lg:items-start lg:grid lg:grid-cols-2 gap-8 py-15 lg:py-7 px-7 lg:px-14">
        <FixedSection />
        <ScrollableSection />
      </div>
      <BottomSection />
    </main>
  );
}
export default LandingPage;
