import CardList from "../../common/list/CardList";
// import SmallCard from "../../common/playerCard/SmallCard";

// import player2 from "../../../assets/card/player/player2.png";
// import common from "../../../assets/card/rarity/common-bg.png";

function Team({
  children,
  teamName,
  teamNameColor,
}: {
  children: React.ReactNode;
  teamName: string;
  teamNameColor: string;
}) {
  return (
    <div className="flex gap-4 mx-auto">
      <div className="flex w-8 items-center justify-center">
        <h3
          className={`${teamNameColor} text-3xl rotate-270 whitespace-nowrap`}
        >
          {teamName}
        </h3>
      </div>

      <CardList className="bg-base-300 rounded-lg shadow-lg p-5 w-fit">
        {children}
      </CardList>
    </div>
  );
}
export default Team;
