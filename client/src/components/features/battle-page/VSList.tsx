import VS from "./VS";

function VSList() {
  return (
    <div className="flex gap-4 mx-auto">
      <div className="w-8" />

      <div className="grid grid-cols-5 w-fit gap-5 px-5 font-primary">
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
