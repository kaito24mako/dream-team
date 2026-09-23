import { useSelector } from "react-redux";
import { useUser } from "../../utils/context/UserContext.jsx";
import { getUser } from "../../utils/redux/slices/authSlice.js";
import { useEffect } from "react";

function AccountPage() {
  const { user, loading, errorMsg, getUserById } = useUser();

  const authUser = useSelector(getUser);
  const userId = authUser?.userId;

  useEffect(() => {
    getUserById(userId);
  }, [userId]);

  console.log("Userid:", userId);
  console.log("getUserById:", user);

  return (
    <>
      <title>My Account | Dream Team</title>

      <main className="flex flex-col gap-5 mb-15">
        <h1 className="text-4xl text-primary">My Account</h1>

        {loading && "Loading user details..."}
        {errorMsg && <span className="text-error">{errorMsg}</span>}

        <div className="flex flex-col">
          <p className="text-lg font-semibold">Name</p>
          <span>{user.name}</span>
        </div>

        <div className="flex flex-col">
          <p className="text-lg font-semibold">Team Name</p>
          <span>{user.teamName}</span>
        </div>

        <div className="flex flex-col">
          <p className="text-lg font-semibold">E-mail</p>
          <span>{user.email}</span>
        </div>
      </main>
    </>
  );
}
export default AccountPage;
