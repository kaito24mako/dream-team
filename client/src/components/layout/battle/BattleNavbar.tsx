import { useParams } from "react-router-dom";
import { useUser } from "../../../utils/context/UserContext.jsx";
import { getSelectedOpponent } from "../../../utils/data/getOpponents";

import CoinIcon from "../../common/icon/ui/CoinIcon";
import CurrencyItem from "../../features/league-page/CurrencyItem";
import logo from "../../../assets/icon/logo.png";

function BattleNavbar() {
  const { levelSlug } = useParams();
  const level = Number(levelSlug.replace("lvl", ""));

  const selectedOpponent = getSelectedOpponent(level);

  // get the user data
  const user = useUser();

  return (
    <header className="bg-base-200 shadow-sm w-full rounded-md text-sm py-2.5 px-2 md:px-10">
      <nav className="navbar">
        <div className="navbar-start">
          <img src={logo} className="w-24 h-12" alt="Dream Team logo" />
        </div>

        <div className="navbar-center">
          <ul className="flex items-center gap-5">
            <li>Level {level}</li>
            <li>
              <CurrencyItem
                heading="Win"
                headingColor="text-secondary"
                currency={selectedOpponent.reward}
                currencyColor="text-coin"
              />
            </li>
            <li>
              <CurrencyItem
                heading="Loss"
                headingColor="text-error"
                currency={selectedOpponent.loss}
                currencyColor="text-red-500"
              />
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="text-coin mr-2.5 mt-0.5 flex items-center gap-1">
            <CoinIcon />
            {user.currency}
          </div>
        </div>
      </nav>
    </header>
  );
}
export default BattleNavbar;
