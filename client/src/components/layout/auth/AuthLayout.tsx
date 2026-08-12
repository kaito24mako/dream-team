import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex flex-col min-h-dvh">
      <div className="my-auto px-7 md:px-14">
        <Outlet />
      </div>
    </div>
  );
}
export default AuthLayout;
