import VS from "./VS";

function VSList() {
  return (
    <div className="flex flex-col md:flex-row gap-4 my-auto md:mx-auto">
      <div className="w-1 md:w-8" />

      <div className="grid md:grid-cols-5 w-fit gap-30 md:gap-5 md:px-5 font-primary">
        <VS isActive={true} />
        <VS isActive={false} />
        <VS isActive={false} />
        <VS isActive={false} />
        <VS isActive={false} />
      </div>
    </div>
  );
}
export default VSList;
