import CoinIcon from "../../common/icon/ui/CoinIcon";
import CurrencyItem from "../../features/league-page/CurrencyItem";
import logo from "../../../assets/icon/logo.png";

function BattleNavbar() {
  return (
    <header className="bg-base-200 shadow-sm w-full rounded-md text-sm py-2.5 px-2 md:px-10">
      <nav className="navbar">
        <div className="navbar-start">
          <img src={logo} className="w-24 h-12" alt="Logo" />
        </div>

        <div className="navbar-center">
          <ul className="flex items-center gap-5">
            <li>Level 1</li>
            <li>
              <CurrencyItem
                heading="Win"
                headingColor="text-secondary"
                currency={100}
                currencyColor="text-coin"
              />
            </li>
            <li>
              <CurrencyItem
                heading="Loss"
                headingColor="text-error"
                currency={50}
                currencyColor="text-red-500"
              />
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="text-coin mr-2.5 mt-0.5 flex items-center gap-1">
            <CoinIcon />
            <span>250</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default BattleNavbar;
