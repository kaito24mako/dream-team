import Button from "../button/Button";

function PlayerModal({
  userId,
  addToLineup,
  removeFromLineup,
  selectedPlayer,
  setSelectedPlayer,
}) {
  const isInLineup = selectedPlayer.UserPlayer?.inLineup;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={() => setSelectedPlayer(null)}
    >
      <div
        className="relative w-full max-w-sm rounded-lg bg-base-100 p-8 md:p-9 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-5 items-center text-center">
          <div className="flex gap-2">
            <span>{selectedPlayer.position}</span>
            <span
              className={`font-semibold ${
                selectedPlayer.rarity === "Legendary"
                  ? "text-rarity-legendary"
                  : selectedPlayer.rarity === "Superstar"
                    ? "text-rarity-superstar"
                    : selectedPlayer.rarity === "Rare"
                      ? "text-rarity-rare"
                      : ""
              }`}
            >
              {selectedPlayer.fullName}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            {" "}
            <span>Offensive: {selectedPlayer.offensiveRating}</span>
            <span>Defensive: {selectedPlayer.defensiveRating}</span>
            <span>Quantity owned: {selectedPlayer.UserPlayer.quantity}</span>
          </div>

          <div className="flex gap-3">
            <Button
              size="small"
              className="bg-neutral-700 p-4"
              onClick={() => setSelectedPlayer(null)}
            >
              Close
            </Button>
            <Button
              bgColor="primary"
              textColor="black"
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                if (isInLineup) {
                  removeFromLineup(userId, selectedPlayer.id);
                } else {
                  addToLineup(userId, selectedPlayer.id);
                }
                setSelectedPlayer(null);
              }}
            >
              {isInLineup ? "Remove from lineup" : "Add to lineup"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PlayerModal;
