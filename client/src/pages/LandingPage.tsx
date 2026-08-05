import FixedSection from "../components/features/landing-page/FixedSection";
import ScrollableSection from "../components/features/landing-page/ScrollableSection";

function LandingPage() {
  return (
    <main className="flex items-center gap-10 h-[86dvh]">
      <FixedSection />
      <ScrollableSection />
    </main>
  );
}
export default LandingPage;
