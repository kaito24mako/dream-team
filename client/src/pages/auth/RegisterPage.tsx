import { Link } from "react-router-dom";
import RegisterForm from "../../components/features/auth-page/RegisterForm";
import logo from "../../assets/icon/logo.png";

function RegisterPage() {
  return (
    <>
      <title>Register | Dream Team</title>

      <main className="flex flex-col justify-center items-center">
        <img src={logo} className="w-100 h-50" />

        <RegisterForm />

        <p className="text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="link link-primary">
            Log in
          </Link>
        </p>
      </main>
    </>
  );
}
export default RegisterPage;
