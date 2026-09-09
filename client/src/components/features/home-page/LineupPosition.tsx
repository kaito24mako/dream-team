import { useLineup } from "../../../utils/context/LineupContext";
import Button from "../../common/button/Button";

// session management
import { useSelector } from "react-redux";
import { getUser } from "../../../utils/redux/slices/authSlice.js";

function LineupPosition({
  children,
  player,
  position,
}: {
  children: React.ReactNode;
  player;
  position: string;
}) {
  const { removeFromLineup } = useLineup();

  const authUser = useSelector(getUser);
  const userId = authUser?.userId;

  return (
    <div className="flex flex-col gap-4 mx-auto">
      {children}
      <div className="flex items-center gap-4 mx-auto">
        <p className="font-primary text-primary text-2xl">{position}</p>
        {player && (
          <Button
            bgColor="primary"
            size="small"
            textColor="black"
            onClick={() => removeFromLineup(userId, player.id)}
          >
            Remove
          </Button>
        )}
      </div>
    </div>
  );
}
export default LineupPosition;
