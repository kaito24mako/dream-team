import Statistic from "../../common/statistic/Statistic";

function StatisticsSection() {
  return (
    <section className="flex gap-5 overflow-x-scroll overflow-y-hidden">
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

      <div className="divider divider-horizontal"></div>
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
      <Statistic
        title="Win Streak"
        count="5W"
        countSize="medium"
        textAlign="end"
      />

      <div className="divider divider-horizontal"></div>
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
    </section>
  );
}
export default StatisticsSection;
