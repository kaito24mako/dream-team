import { AiOutlineSchedule } from "react-icons/ai";

import SectionHeading from "../../common/text/SectionHeading";
import MatchItem from "./MatchItem";

function MatchesSection() {
  return (
    <section className="border border-border rounded-sm bg-base-200 p-5 max-w-5xl mx-auto">
      <SectionHeading heading="LEAGUE MATCHES" Icon={AiOutlineSchedule} />

      <div className="flex flex-col gap-5">
        <MatchItem
          level={1}
          minRating={50}
          maxRating={59}
          opponentName="Manchester Kings"
          reward={100}
          cost={50}
        />
        <MatchItem
          level={2}
          minRating={50}
          maxRating={59}
          opponentName="Manchester Kings"
          reward={100}
          cost={50}
        />
        <MatchItem
          level={3}
          minRating={50}
          maxRating={59}
          opponentName="Manchester Kings"
          reward={100}
          cost={50}
        />
        <MatchItem
          level={4}
          minRating={50}
          maxRating={59}
          opponentName="Manchester Kings"
          reward={100}
          cost={50}
        />
        <MatchItem
          level={5}
          minRating={50}
          maxRating={59}
          opponentName="Manchester Kings"
          reward={100}
          cost={50}
        />
        <MatchItem
          level={6}
          minRating={50}
          maxRating={59}
          opponentName="Manchester Kings"
          reward={100}
          cost={50}
        />
        <MatchItem
          level={7}
          minRating={50}
          maxRating={59}
          opponentName="Manchester Kings"
          reward={100}
          cost={50}
        />
        <MatchItem
          level={8}
          minRating={50}
          maxRating={59}
          opponentName="Manchester Kings"
          reward={100}
          cost={50}
        />
        <MatchItem
          level={9}
          minRating={50}
          maxRating={59}
          opponentName="Manchester Kings"
          reward={100}
          cost={50}
        />
        <MatchItem
          level={10}
          minRating={50}
          maxRating={59}
          opponentName="Manchester Kings"
          reward={100}
          cost={50}
        />
      </div>
    </section>
  );
}
export default MatchesSection;
