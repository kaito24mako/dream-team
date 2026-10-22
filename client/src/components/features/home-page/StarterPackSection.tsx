import axios from "axios";
import { useRef, useState } from "react";
import { useUser } from "../../../utils/context/UserContext.jsx";
import { useLineup } from "../../../utils/context/LineupContext.jsx";
import Button from "../../common/button/Button";

function StarterPackSection() {
  const { user, loading, getUserAndPlayers } = useUser();
  const { getLineup } = useLineup();
  const [claiming, setClaiming] = useState(false);
  const [claimed, setClaimed] = useState(false);
  const [error, setError] = useState("");
  const pending = useRef(false);

  if (!user.id || user.hasClaimedStarterPack || user.Players?.length > 0) {
    return null;
  }

  async function claimPlayers() {
    if (pending.current) return;
    pending.current = true;
    setClaiming(true);
    setError("");

    try {
      await axios.post("http://localhost:3001/api/users/starter-pack/claim");
      setClaimed(true);
      await Promise.all([getUserAndPlayers(user.id), getLineup(user.id)]);
    } catch (err) {
      setError(
        axios.isAxiosError(err)
          ? err.response?.data?.message || "Unable to claim your players. Please try again."
          : "Unable to claim your players. Please try again.",
      );
      if (axios.isAxiosError(err) && err.response?.status === 409) {
        await Promise.all([getUserAndPlayers(user.id), getLineup(user.id)]);
      }
    } finally {
      pending.current = false;
      setClaiming(false);
    }
  }

  return (
    <section className="rounded-xl bg-base-200 p-6 flex flex-col items-start gap-3">
      <h2 className="font-primary text-2xl">Your free starting five</h2>
      <p>
        Claim five Common players: one PG, SG, SF, PF and C. They will join your
        starting lineup. You can claim this gift once per account.
      </p>
      <Button bgColor="primary" onClick={claimPlayers} disabled={loading || claiming || claimed}>
        {claimed ? "Players claimed" : claiming ? "Claiming players…" : "Claim free players"}
      </Button>
      {error && <p role="alert" className="text-error">{error}</p>}
    </section>
  );
}

export default StarterPackSection;
