import { IoTrophyOutline } from "react-icons/io5";
import { opponents } from "../../../data/opponents";

import MatchItem from "./MatchItem";
import MajorHeading from "../../common/text/MajorHeading";
import SectionWrapper from "../../common/wrapper/SectionWrapper";

function MatchesSection() {
  return (
    <SectionWrapper className="max-w-7xl">
      <MajorHeading
        heading="LEAGUE MATCHES"
        description="Battle for rewards. The greater the opponent, the higher the payout."
        Icon={IoTrophyOutline}
      />

      <ul className="flex flex-col gap-5 overflow-scroll">
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
    </SectionWrapper>
  );
}
export default MatchesSection;
