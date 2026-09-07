import { RiUserAddLine } from "react-icons/ri";

function EmptyCard({ playerPosition }: { playerPosition: string }) {
  return (
    <div>
      <div className="w-37 h-65 md:w-40 lg:w-60 lg:h-85 font-secondary border border-border-base rounded-lg shadow-sm overflow-hidden">
        {/* top half */}
        <div className="relative flex h-38 lg:h-58 items-center justify-center bg-base-300">
          <RiUserAddLine className="text-6xl lg:text-8xl text-base-content/30" />
          <p className="absolute top-2 lg:top-1.5 left-3 text-sm lg:text-lg">
            {playerPosition}
          </p>
        </div>

        {/* bottom half */}
        <div className="flex flex-col items-center justify-center gap-2 h-27 bg-base-200">
          <p className="text-sm lg:text-lg">None</p>
        </div>
      </div>
    </div>
  );
}

export default EmptyCard;
