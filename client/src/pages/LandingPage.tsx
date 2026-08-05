import Button from "../components/common/button/Button";

function LandingPage() {
  return (
    <section className="min-h-dvh flex flex-col flex-1">
      <section className="flex flex-col flex-1 justify-center gap-5">
        <h1 className="text-6xl">
          Build Your <span className="text-primary">Dream Team</span>,
          <br />
          Conquer the <span className="text-primary">League</span>.
        </h1>
        <div className="text-2xl">
          <p>
            Dream Team is a fictional TCG made by a passionate basketball
            enthusiast.
          </p>
          <p>Open packs, collect cards, and battle for glory!</p>
        </div>
        <div className="flex gap-4">
          <Button bgColor="primary" textColor="black">
            Login
          </Button>
          <Button bgColor="secondary" textColor="black">
            Create Account
          </Button>
        </div>
      </section>
    </section>
  );
}
export default LandingPage;
