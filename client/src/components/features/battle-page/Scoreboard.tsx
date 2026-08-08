function Scoreboard() {
  return (
    <div className="bg-base-200 border-x border-b border-border w-fit mx-auto py-7 px-8 md:px-10 rounded-b-sm">
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center">
          <h3 className="text-secondary text-base md:text-lg">
            WIN PERCENTAGE
          </h3>
          <h3 className="text-secondary font-secondary text-5xl">60%</h3>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-base md:text-lg">QUARTER 1</h3>
          <div className="border border-border bg-base-100 py-2 px-8">
            <p className="font-secondary">00:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Scoreboard;
