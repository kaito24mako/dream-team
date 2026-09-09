import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../../utils/redux/slices/authSlice.js";
import { useNavigate } from "react-router-dom";

import AuthForm from "../../common/form/AuthForm";

type RegisterFormErrors = Partial<
  Record<
    "name" | "teamName" | "email" | "password" | "passwordCompare" | "server",
    string
  >
>;

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    teamName: "",
    email: "",
    password: "",
    passwordCompare: "",
    errors: {} as RegisterFormErrors,
  });

  // state to show the status of saving a new user
  const [registerStatus, setRegisterStatus] = useState("idle");

  const { name, teamName, email, password, passwordCompare, errors } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // if we can save the new user or not
  const canSave =
    name !== "" &&
    teamName !== "" &&
    email !== "" &&
    password !== "" &&
    passwordCompare !== "" &&
    registerStatus === "idle";

  // on changes to input fields
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // on form submission
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("register - handleSubmit(), formData:", formData);

    // validations
    if (!name) {
      setFormData({ ...formData, errors: { name: "Name is required" } });
      return;
    }

    if (!teamName) {
      setFormData({
        ...formData,
        errors: { teamName: "Team name is required" },
      });
      return;
    }

    if (!email) {
      setFormData({ ...formData, errors: { email: "Email is required" } });
      return;
    }

    if (!password) {
      setFormData({
        ...formData,
        errors: { password: "Password is required" },
      });
      return;
    }

    if (!passwordCompare) {
      setFormData({
        ...formData,
        errors: { passwordCompare: "Please re-enter your password" },
      });
      return;
    }

    if (password !== passwordCompare) {
      setFormData({
        ...formData,
        errors: { passwordCompare: "Passwords do not match" },
      });
      return;
    }

    // reset errors
    setFormData({ ...formData, errors: {} });

    // if we can save the user, register the user
    try {
      if (canSave) {
        setRegisterStatus("pending");

        // call the register action
        await dispatch(register({ name, teamName, email, password })).unwrap();

        console.log("Successfully registered the user");

        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      setFormData({ ...formData, errors: { server: err } });
    } finally {
      setRegisterStatus("idle");
    }
  }

  return (
    <AuthForm
      legend="Create Account"
      buttonTitle="Create Account"
      onSubmit={handleSubmit}
    >
      <label className="label mt-2">Name</label>
      <input
        type="text"
        className="input focus-within:outline-none focus-within:ring-0"
        name="name"
        placeholder="name"
        value={name}
        onChange={(e) => handleChange(e)}
      />
      {errors.name && <p className="text-error text-xs mt-1">{errors.name}</p>}

      <label className="label mt-2">Team Name</label>
      <input
        type="text"
        className="input focus-within:outline-none focus-within:ring-0"
        name="teamName"
        placeholder="team name"
        value={teamName}
        onChange={(e) => handleChange(e)}
      />
      {errors.teamName && (
        <p className="text-error text-xs mt-1">{errors.teamName}</p>
      )}

      <label className="label mt-2">Email</label>
      <input
        type="text"
        className="input focus-within:outline-none focus-within:ring-0"
        name="email"
        placeholder="email"
        value={email}
        onChange={(e) => handleChange(e)}
      />
      {errors.email && (
        <p className="text-error text-xs mt-1">{errors.email}</p>
      )}

      <label className="label mt-2">Password</label>
      <input
        type="password"
        className="input focus-within:outline-none focus-within:ring-0"
        name="password"
        placeholder="password"
        // pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E])[\x20-\x7E]+$"
        // title="Password must contain at least one uppercase letter, lowercase letter, number, and special character"
        value={password}
        onChange={(e) => handleChange(e)}
      />
      {errors.password && (
        <p className="text-error text-xs mt-1">{errors.password}</p>
      )}

      <label htmlFor="passwordCompare" className="label mt-2">
        Re-enter Password
      </label>
      <input
        type="password"
        className="input focus-within:outline-none focus-within:ring-0"
        placeholder="re-enter password"
        name="passwordCompare"
        value={passwordCompare}
        onChange={(e) => handleChange(e)}
      />
      {errors.passwordCompare && (
        <p className="text-error text-xs mt-1">{errors.passwordCompare}</p>
      )}

      {/* <p className="label text-xs opacity-75">
        Must contain:
        <br />
        • 1 uppercase letter
        <br />
        • 1 lowercase letter
        <br />
        • 1 number
        <br />• 1 special character
      </p> */}

      {errors.server && (
        <p className="text-error text-xs mt-1">{errors.server}</p>
      )}
    </AuthForm>
  );
}
export default RegisterForm;
