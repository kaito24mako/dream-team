import Button from "../../common/button/Button";
import MysteryCard from "../../common/playerCard/MysteryCard";

function PackModal({ selectedPack, setSelectedPack }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={() => setSelectedPack(null)}
    >
      <div
        className="w-full max-w-sm rounded-lg bg-base-100 p-6 md:p-8 text-base-content shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="mb-2 text-xl">{selectedPack.title}</h3>

        <p className="mb-4">
          Buy this pack for{" "}
          <span className="font-bold text-coin">{selectedPack.price}</span>{" "}
          coins?
        </p>

        <div className="flex justify-start gap-3 mb-6">
          <Button
            size="small"
            className="bg-neutral-700 p-4"
            onClick={() => setSelectedPack(null)}
          >
            Cancel
          </Button>
          <Button
            size="small"
            textColor="black"
            className="bg-primary p-4"
            onClick={() => setSelectedPack(null)}
          >
            Confirm
          </Button>
        </div>

        <div className="flex justify-center">
          <MysteryCard />
        </div>
      </div>
    </div>
  );
}
export default PackModal;
