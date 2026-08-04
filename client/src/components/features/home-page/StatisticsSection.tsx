import Statistic from "../../common/statistic/Statistic";

function StatisticsSection() {
  return (
    <section className="flex gap-5 overflow-x-scroll overflow-y-hidden">
      <div className="flex flex-col sm:flex-row gap-5">
        <Statistic
          title="Offense"
          count={89}
          countSize="large"
          textAlign="center"
        />
        <Statistic
          title="Defense"
          count={95}
          countSize="large"
          textAlign="center"
        />
      </div>

      <div className="divider divider-horizontal m-0"></div>
      <div className="flex flex-col sm:flex-row gap-5">
        <Statistic
          title="Team Record"
          count="23-6"
          countSize="medium"
          textAlign="end"
        />
        <Statistic
          title="Win Rate"
          count="73%"
          countSize="medium"
          textAlign="end"
        />
        {/* <Statistic
        title="Win Streak"
        count="5W"
        countSize="medium"
        textAlign="end"
      /> */}
      </div>

      <div className="divider divider-horizontal m-0"></div>
      <div className="flex flex-col sm:flex-row gap-5">
        <Statistic
          title="Collection Progress"
          count="34/100"
          countSize="medium"
          textAlign="end"
        />
        <Statistic
          title="Legendaries"
          count={7}
          countSize="medium"
          textAlign="end"
        />
      </div>
    </section>
  );
}
export default StatisticsSection;
