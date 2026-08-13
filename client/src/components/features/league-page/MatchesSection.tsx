import { AiOutlineSchedule } from "react-icons/ai";

import { opponents } from "../../../data/opponents";

import SectionHeading from "../../common/text/SectionHeading";
import MatchItem from "./MatchItem";

function MatchesSection() {
  return (
    <section className="border border-border rounded-sm bg-base-200 p-4 pb-6 sm:p-6 sm:px-8 sm:pb-8 max-w-7xl mx-auto">
      <SectionHeading heading="LEAGUE MATCHES" Icon={AiOutlineSchedule} />

      <ul className="flex flex-col gap-5">
        {opponents.map((opponent) => (
          <MatchItem
            key={opponent.id}
            level={opponent.level}
            minRating={opponent.minRating}
            maxRating={opponent.maxRating}
            opponentName={opponent.teamName}
            reward={opponent.reward}
            loss={opponent.loss}
          />
        ))}
      </ul>
    </section>
  );
}
export default MatchesSection;
