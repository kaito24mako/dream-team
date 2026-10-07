import VS from "./VS";

function VSList({ matchupIndex = 0 }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 my-auto md:mx-auto">
      <div className="h-11 md:h-auto md:w-8" />

      <div className="grid md:grid-cols-5 w-fit gap-5 md:px-5 font-primary">
        {[0, 1, 2, 3, 4].map((index) => (
          <VS key={index} isActive={index === matchupIndex} />
        ))}
      </div>
    </div>
  );
}
export default VSList;
