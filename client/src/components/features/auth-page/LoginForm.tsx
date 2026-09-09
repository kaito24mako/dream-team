import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../utils/redux/slices/authSlice.js";
import { useNavigate } from "react-router-dom";

import AuthForm from "../../common/form/AuthForm";

type LoginFormErrors = Partial<Record<"email" | "password" | "server", string>>;

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    errors: {} as LoginFormErrors,
  });

  const { email, password, errors } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // on changes to input fields
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // on form submission
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("login - handleSubmit(), formData:", formData);

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

    // reset errors
    setFormData({ ...formData, errors: {} });

    try {
      // dispatch the login action
      await dispatch(login({ email, password })).unwrap();

      console.log("Successfully logged in");

      navigate("/home");
    } catch (err) {
      console.error(err);
      setFormData({ ...formData, errors: { server: err } });
    }
  }

  return (
    <AuthForm legend="Login" buttonTitle="Login" onSubmit={handleSubmit}>
      <label className="label">Email</label>
      <input
        type="text"
        className="input focus-within:outline-none focus-within:ring-0"
        placeholder="email"
        name="email"
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
        placeholder="password"
        name="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => handleChange(e)}
      />
      {errors.password && (
        <p className="text-error text-xs mt-1">{errors.password}</p>
      )}

      {errors.server && (
        <p className="text-error text-xs mt-1">{errors.server}</p>
      )}
    </AuthForm>
  );
}
export default LoginForm;
