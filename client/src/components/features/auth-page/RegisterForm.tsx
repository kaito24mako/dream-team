import AuthForm from "../../common/form/AuthForm";

function RegisterForm() {
  return (
    <AuthForm
      legend="Create Account"
      link="/login"
      buttonTitle="Create Account"
    >
      <label className="label mt-2">Full name</label>
      <input
        type="text"
        className="input focus-within:outline-none focus-within:ring-0"
        name="fullName"
        placeholder="full name"
        required
      />

      <label className="label mt-2">Username</label>
      <input
        type="text"
        className="input focus-within:outline-none focus-within:ring-0"
        name="username"
        placeholder="username"
        minLength={4}
        required
      />

      <label className="label mt-2">Email</label>
      <input
        type="email"
        className="input focus-within:outline-none focus-within:ring-0"
        name="email"
        placeholder="email"
        required
      />

      <label className="label mt-2">Password</label>
      <input
        type="password"
        className="input focus-within:outline-none focus-within:ring-0"
        name="password"
        placeholder="password"
        pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E])[\x20-\x7E]+$"
        title="Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        required
      />

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
