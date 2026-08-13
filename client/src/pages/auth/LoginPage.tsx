import { Link } from "react-router-dom";
import LoginForm from "../../components/features/auth-page/LoginForm";
import logo from "../../assets/icon/logo.png";

function LoginPage() {
  return (
    <>
      <title>Login | Dream Team</title>

      <main className="flex flex-col justify-center items-center mb-15">
        <img src={logo} className="w-100 h-50" />

        <LoginForm />

        <p className="text-sm mt-4">
          No account?{" "}
          <Link to="/register" className="link link-primary">
            Create one
          </Link>
        </p>
      </main>
    </>
  );
}
export default LoginPage;
