import { useSelector } from "react-redux";
import { useUser } from "../../utils/context/UserContext.jsx";
import { getUser } from "../../utils/redux/slices/authSlice.js";
import { useEffect, useState } from "react";

import axios from "axios";
import Button from "../../components/common/button/Button";

function AccountPage() {
  const { user, loading, errorMsg, getUserAndPlayers } = useUser();

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    teamName: "",
    email: "",
  });

  // get the user's id
  const authUser = useSelector(getUser);
  const userId = authUser?.userId;

  // update the user state with the current user
  useEffect(() => {
    if (userId) {
      getUserAndPlayers(userId);
    }
  }, [userId]);

  // set the current form inputs to the user's details
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        teamName: user.teamName || "",
        email: user.email || "",
      });
    }
  }, [user]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:3001/api/users/${userId}/edit`,
        formData,
      );

      await getUserAndPlayers(userId);
      setIsEditing(false);
    } catch (err) {
      console.error("Failed to update account:", err);
    }
  }

  function resetForm() {
    setFormData({
      name: user.name || "",
      teamName: user.teamName || "",
      email: user.email || "",
    });
  }

  return (
    <>
      <title>My Account | Dream Team</title>

      <main className="flex flex-col gap-5 mb-15">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl text-primary">My Account</h1>
          <p>Edit your account details.</p>
        </div>

        {loading && "Loading user details..."}
        {errorMsg && <span className="text-error">{errorMsg}</span>}

        {isEditing ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-secondary">Name</p>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input focus-within:outline-none focus-within:ring-0"
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-semibold text-secondary">Team Name</p>
              <input
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                className="input focus-within:outline-none focus-within:ring-0"
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-semibold text-secondary">E-mail</p>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="input focus-within:outline-none focus-within:ring-0"
              />
            </div>

            <div className="flex gap-3">
              <Button
                className="bg-neutral-700 p-4"
                size="small"
                onClick={() => {
                  resetForm();
                  setIsEditing(false);
                }}
              >
                Cancel
              </Button>
              <Button
                bgColor="primary"
                textColor="black"
                size="small"
                type="submit"
                className="p-4"
              >
                Save
              </Button>
            </div>
          </form>
        ) : (
          <>
            <div className="flex flex-col">
              <p className="font-semibold text-secondary">Name</p>
              <span>{user.name}</span>
            </div>

            <div className="flex flex-col">
              <p className="font-semibold text-secondary">Team Name</p>
              <span>{user.teamName}</span>
            </div>

            <div className="flex flex-col">
              <p className="font-semibold text-secondary">E-mail</p>
              <span>{user.email}</span>
            </div>

            <Button
              bgColor="primary"
              textColor="black"
              size="small"
              className="w-fit"
              onClick={() => setIsEditing(true)}
            >
              Edit Account
            </Button>
          </>
        )}
      </main>
    </>
  );
}
export default AccountPage;
