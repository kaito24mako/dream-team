import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../utils/redux/slices/authSlice.js";

import AuthForm from "../../common/form/AuthForm";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    errors: {},
  });

  const { email, password, errors } = formData;

  const dispatch = useDispatch();

  // on changes to input fields
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // on form submission
  function handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit(), formData:", formData);

    //? add validation

    // dispatch the login action
    dispatch(login({ email, password }));
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
      {/* {errors.email && <p>{errors.email}</p>} */}

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
      {/* {errors.password && <p>{errors.password}</p>} */}
    </AuthForm>
  );
}
export default LoginForm;
