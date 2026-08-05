import StatisticsSection from "../components/features/home-page/StatisticsSection";
import LineupSection from "../components/features/home-page/LineupSection";
import CollectionSection from "../components/features/home-page/CollectionSection";

function HomePage() {
  return (
    <>
      <title>Home | Dream Team</title>

      <main className="flex flex-col gap-4 mb-15">
        <div className="font-primary">
          <p className="text-xl">Welcome to</p>
          <h1 className="text-4xl text-primary">Melbourne Demons</h1>
        </div>

        <StatisticsSection />

        <LineupSection />

        <CollectionSection />
      </main>
    </>
  );
}
export default HomePage;
