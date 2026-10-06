const resultDisplay = {
  win: {
    label: "W",
    cardClass: "ring-1 ring-green-700 shadow-lg shadow-green-700/30 scale-105",
    labelClass: "bg-green-700",
  },
  loss: {
    label: "L",
    cardClass: "opacity-60 grayscale",
    labelClass: "bg-neutral-500",
  },
  draw: {
    label: "D",
    cardClass: "ring-1 ring-yellow-400 shadow-lg shadow-yellow-400/30",
    labelClass: "bg-yellow-400 text-black",
  },
};

function ResultFrame({ result, children }) {
  // use one of the stylings above if there's a result in the matchup
  const display = result ? resultDisplay[result] : null;

  return (
    <div
      className={`${display?.cardClass || ""} relative transition-all duration-300 rounded-sm`}
    >
      {display && (
        <span
          className={`${display.labelClass} absolute -right-2 -top-2  flex items-center justify-center z-10 h-7 w-7 rounded-full font-primary text-sm shadow-md`}
        >
          {display.label}
        </span>
      )}
      {children}
    </div>
  );
}
export default ResultFrame;
