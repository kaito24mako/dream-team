import { useState } from "react";
import AuthForm from "../../common/form/AuthForm";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    teamName: "",
    email: "",
    password: "",
    passwordCompare: "",
    errors: {},
  });

  const { name, teamName, email, password, passwordCompare, errors } = formData;

  // on changes to input fields
  function handleChange(e) {
    console.log("onChange(), formData:", formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // on form submission
  function handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit(), formData:", formData);
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
        required
      />

      <label className="label mt-2">Team Name</label>
      <input
        type="text"
        className="input focus-within:outline-none focus-within:ring-0"
        name="teamName"
        placeholder="team name"
        value={teamName}
        onChange={(e) => handleChange(e)}
        required
      />

      <label className="label mt-2">Email</label>
      <input
        type="text"
        className="input focus-within:outline-none focus-within:ring-0"
        name="email"
        placeholder="email"
        value={email}
        onChange={(e) => handleChange(e)}
        required
      />

      <label className="label mt-2">Password</label>
      <input
        type="password"
        className="input focus-within:outline-none focus-within:ring-0"
        name="password"
        placeholder="password"
        pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E])[\x20-\x7E]+$"
        title="Password must contain at least one uppercase letter, lowercase letter, number, and special character"
        value={password}
        onChange={(e) => handleChange(e)}
        required
      />

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
        required
      />
      {/* Error message rendering */}
      {/* {errors.passwordCompare && (
        <div className="invalid-feedback">{errors.passwordCompare}</div>
      )} */}

      <p className="label text-xs opacity-75">
        Must contain:
        <br />
        • 1 uppercase letter
        <br />
        • 1 lowercase letter
        <br />
        • 1 number
        <br />• 1 special character
      </p>
    </AuthForm>
  );
}
export default RegisterForm;
