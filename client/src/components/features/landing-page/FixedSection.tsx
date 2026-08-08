import { Link } from "react-router-dom";

import Button from "../../common/button/Button";

function FixedSection() {
  return (
    <section className="md:sticky md:top-75 text-center md:text-start">
      <div className="flex flex-col gap-5 items-center md:items-start">
        <div className="flex flex-col gap-2 text-5xl md:text-6xl">
          <h1>
            Build Your{" "}
            <span className="text-primary whitespace-nowrap">Dream Team</span>,
          </h1>
          <h1>
            Conquer the{" "}
            <span className="text-primary whitespace-nowrap">League</span>.
          </h1>
        </div>

        <div className="text-xl md:text-2xl opacity-93">
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
    </section>
  );
}
export default FixedSection;
