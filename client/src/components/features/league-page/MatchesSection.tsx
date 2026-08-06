import { AiOutlineSchedule } from "react-icons/ai";

import SectionHeading from "../../common/text/SectionHeading";
import MatchItem from "./MatchItem";

function MatchesSection() {
  return (
    <section className="border border-border rounded-sm bg-base-200 p-4 pb-6 sm:p-6 sm:px-8 sm:pb-8 max-w-7xl mx-auto">
      <SectionHeading heading="LEAGUE MATCHES" Icon={AiOutlineSchedule} />

      <ul className="flex flex-col gap-5">
        <MatchItem
          level={1}
          minRating={50}
          maxRating={54}
          opponentName="Manchester Kings"
          reward={100}
          loss={0}
        />
        <MatchItem
          level={2}
          minRating={55}
          maxRating={59}
          opponentName="Manchester Kings"
          reward={150}
          loss={0}
        />
        <MatchItem
          level={3}
          minRating={60}
          maxRating={64}
          opponentName="Manchester Kings"
          reward={200}
          loss={50}
        />
        <MatchItem
          level={4}
          minRating={65}
          maxRating={69}
          opponentName="Manchester Kings"
          reward={250}
          loss={50}
        />
        <MatchItem
          level={5}
          minRating={70}
          maxRating={74}
          opponentName="Manchester Kings"
          reward={300}
          loss={100}
        />
        <MatchItem
          level={6}
          minRating={75}
          maxRating={79}
          opponentName="Manchester Kings"
          reward={400}
          loss={100}
        />
        <MatchItem
          level={7}
          minRating={80}
          maxRating={84}
          opponentName="Manchester Kings"
          reward={500}
          loss={200}
        />
        <MatchItem
          level={8}
          minRating={85}
          maxRating={89}
          opponentName="Manchester Kings"
          reward={600}
          loss={300}
        />
        <MatchItem
          level={9}
          minRating={90}
          maxRating={94}
          opponentName="Manchester Kings"
          reward={800}
          loss={400}
        />
        <MatchItem
          level={10}
          minRating={95}
          maxRating={99}
          opponentName="Manchester Kings"
          reward={1000}
          loss={500}
        />
      </ul>
    </section>
  );
}
export default MatchesSection;
