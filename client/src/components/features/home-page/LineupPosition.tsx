import Button from "../../common/button/Button";

function LineupPosition({
  children,
  position,
}: {
  children: React.ReactNode;
  position: string;
}) {
  return (
    <div className="flex flex-col gap-4 mx-auto">
      {children}
      <div className="flex items-center gap-4 mx-auto">
        <p className="font-primary text-primary text-2xl">{position}</p>
        <Button bgColor="primary" size="small" textColor="black">
          Swap
        </Button>
      </div>
    </div>
  );
}
export default LineupPosition;
