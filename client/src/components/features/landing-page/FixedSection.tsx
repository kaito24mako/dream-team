import { Link } from "react-router-dom";
import Button from "../../common/button/Button";
import court from "../../../assets/bg/court.png";

function FixedSection() {
  return (
    <section className="flex justify-center items-center gap-5 h-[86dvh]">
      <div className="flex flex-col w-full gap-5">
        <div className="flex flex-col gap-2 text-6xl">
          <h1>
            Build Your <span className="text-primary">Dream Team</span>,
          </h1>
          <h1>
            Conquer the <span className="text-primary">League</span>.
          </h1>
        </div>

        <div className="text-2xl">
          <p>
            Dream Team is a fictional TCG made by a passionate basketball
            enthusiast.
          </p>
          <p>Open packs, collect cards, and battle for glory!</p>
        </div>

        <div className="flex gap-4">
          <Link to="/login">
            <Button bgColor="primary" textColor="black">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button bgColor="secondary" textColor="black">
              Create Account
            </Button>
          </Link>
        </div>
      </div>

      <div
        className="border border-border w-full min-h-120 bg-cover bg-center rounded-md"
        style={{ backgroundImage: `url(${court})` }}
      ></div>
    </section>
  );
}
export default FixedSection;
