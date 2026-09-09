import Button from "../button/Button";

function AuthForm({
  children,
  legend,
  buttonTitle,
  onSubmit,
}: {
  children: React.ReactNode;
  legend: string;
  buttonTitle: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}) {
  return (
    <form
      className="fieldset bg-base-200 rounded-box w-xs border border-base-300 shadow-sm p-7"
      onSubmit={(e) => onSubmit(e)}
    >
      <legend className="fieldset-legend mx-auto text-base">{legend}</legend>
      {children}
      <Button
        bgColor="primary"
        textColor="black"
        className="mt-5 w-full"
        type="submit"
      >
        {buttonTitle}
      </Button>
    </form>
  );
}
export default AuthForm;
