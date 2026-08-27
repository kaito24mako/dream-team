import packsScreenshot from "../../../assets/screenshots/packs-ss.png";

function CollectSection() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl text-secondary">Collect Players</h2>
      <div className="flex flex-col gap-1">
        <p>
          With in-game currency that you earn from winning matches, you can open{" "}
          <span className="font-bold text-secondary">packs</span> to acquire new
          players.
        </p>
        <p>
          These players will be added to your{" "}
          <span className="font-bold text-secondary">collection</span>, which
          you can choose to add to your{" "}
          <span className="font-bold text-secondary">starting lineup</span> to
          compete in matches.
        </p>
      </div>

      {/* Rarities */}
      <div className="collapse collapse-arrow bg-base-200 p-5">
        <input type="checkbox" />
        <h3 className="text-lg collapse-title p-0!">Rarities</h3>
        <ul className="collapse-content p-0!">
          <div className="flex flex-col gap-1 mt-2">
            <p>
              The players come in four different rarities with a range of
              offensive and defensive ratings:
            </p>
            <li className="list-disc ml-8">
              <span className="text-rarity-common">Common</span> (Ratings: 50 -
              69)
            </li>
            <li className="list-disc ml-8">
              <span className="text-rarity-rare">Rare</span> (Ratings: 70 - 84)
            </li>
            <li className="list-disc ml-8">
              <span className="text-rarity-superstar">Superstar</span> (Ratings:
              85 - 94)
            </li>
            <li className="list-disc ml-8">
              <span className="text-rarity-legendary">Legendary</span> (Ratings:
              95 - 99)
            </li>
          </div>
        </ul>
      </div>

      {/* Packs */}
      <div className="collapse collapse-arrow bg-base-200 p-5">
        <input type="checkbox" />
        <h3 className="text-lg collapse-title p-0!">Packs</h3>
        <div className="collapse-content p-0!">
          <p className="mt-2">
            There are four unique packs, each with different drop rates for
            player rarities.
          </p>
          <img
            src={packsScreenshot}
            alt="The packs with their chances for pulling different player rarities"
            className="w-180 rounded-lg border border-base-300 shadow-sm mt-2"
          />
        </div>
      </div>
    </div>
  );
}
export default CollectSection;
