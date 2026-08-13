import CardList from "../../common/list/CardList";

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
    <div className="flex flex-col md:flex-row gap-4 mx-auto items-center">
      <div className="flex w-8 items-center justify-center">
        <h3
          className={`${teamNameColor} text-lg md:text-2xl lg:text-3xl rotate-0 md:rotate-270 whitespace-nowrap`}
        >
          {teamName}
        </h3>
      </div>

      <CardList className="bg-base-300 rounded-lg shadow-lg p-5 w-fit flex-col md:flex-row">
        {children}
      </CardList>
    </div>
  );
}
export default Team;
