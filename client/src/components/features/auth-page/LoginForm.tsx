import AuthForm from "../../common/form/AuthForm";

function LoginForm() {
  return (
    <AuthForm legend="Login" link="/home" buttonTitle="Login">
      <label className="label">Username</label>
      <input
        type="text"
        className="input focus-within:outline-none focus-within:ring-0"
        placeholder="username"
        name="username"
      />

      <label className="label mt-2">Password</label>
      <input
        type="password"
        className="input focus-within:outline-none focus-within:ring-0"
        placeholder="password"
        name="password"
        autoComplete="current-password"
      />
    </AuthForm>
  );
}
export default LoginForm;
