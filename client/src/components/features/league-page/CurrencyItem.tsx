import CoinIcon from "../../common/icon/ui/CoinIcon";

type Prop = {
  heading: string;
  headingColor: string;
  currency: number;
  currencyColor: string;
};

function CurrencyItem({
  heading,
  headingColor,
  currency,
  currencyColor,
}: Prop) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-0 sm:gap-1">
      <p className={`${headingColor}`}>{heading}:</p>
      <div className="flex items-center gap-0.5">
        <CoinIcon />
        <span className={`${currencyColor}`}>{currency}</span>
      </div>
    </div>
  );
}
export default CurrencyItem;
