import { Link } from "react-router-dom";

import Button from "../components/common/button/Button";
import RegularCard from "../components/common/playerCard/RegularCard";
import FullArtCard from "../components/common/playerCard/FullArtCard";

import court from "../assets/bg/court.png";
import player1 from "../assets/card/player/player5.png";
import common from "../assets/card/rarity/common-bg.png";
import superstar from "../assets/card/rarity/superstar-bg.png";

function LandingPage() {
  return (
    <main className="flex items-center gap-10 h-[86dvh]">
      {/* fixed section */}
      <section className="flex flex-col w-[50%] gap-5 overflow-hidden">
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
      </section>

      {/* scrollable section */}
      <section className="h-full w-[50%] overflow-y-auto snap-y snap-mandatory">
        {/* one sub-section - should fill entire viewport height */}
        <div className="flex items-center h-full shrink-0 snap-start">
          <div
            className="border border-border h-[80%] w-full rounded-md bg-cover bg-center"
            style={{ backgroundImage: `url(${court})` }}
          ></div>
        </div>

        {/* one sub-section - should fill entire viewport height */}
        <div className="flex flex-col justify-center h-full shrink-0 snap-start gap-5">
          <h2 className="text-5xl text-start">Collect Players</h2>

          <div className="text-2xl text-start">
            <p>
              Open packs to collect players from a custom database of over 100
              cards.
            </p>
          </div>

          <div className="flex gap-5 ">
            <RegularCard
              playerImage={player1}
              playerRarity={common}
              playerPosition="PG"
              playerName="Kaito Watanabe"
              offenseCount={89}
              defenseCount={92}
            />
            <RegularCard
              playerImage={player1}
              playerRarity={superstar}
              playerPosition="PG"
              playerName="Kaito Watanabe"
              offenseCount={89}
              defenseCount={92}
            />
          </div>
        </div>

        {/* one sub-section - should fill entire viewport height */}
        <div className="flex flex-col justify-center h-full shrink-0 snap-start gap-5">
          <h2 className="text-5xl">Collect Players</h2>

          <div className="text-2xl">
            <p>
              Open packs to collect players from a custom database of over 100
              cards.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
export default LandingPage;
