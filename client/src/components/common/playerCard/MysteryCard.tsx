import { MdOutlineQuestionMark } from "react-icons/md";

function MysteryCard() {
  return (
    <div className="flex items-center justify-center w-37 h-65 md:w-40 lg:w-60 lg:h-85 font-secondary border border-border-base rounded-lg shadow-sm bg-base-300">
      <MdOutlineQuestionMark className="text-6xl lg:text-8xl text-base-content/30" />
    </div>
  );
}

export default MysteryCard;
