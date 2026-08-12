import { Link } from "react-router-dom";
import Button from "../button/Button";

function AuthForm({
  children,
  legend,
  link,
  buttonTitle,
}: {
  children: React.ReactNode;
  legend: string;
  link: string;
  buttonTitle: string;
}) {
  return (
    <form className="fieldset bg-base-200 rounded-box w-xs border border-base-300 shadow-sm p-7">
      <legend className="fieldset-legend mx-auto text-base">{legend}</legend>
      {children}
      <Link to={link}>
        <Button bgColor="primary" textColor="black" className="mt-5 w-full">
          {buttonTitle}
        </Button>
      </Link>
    </form>
  );
}
export default AuthForm;
