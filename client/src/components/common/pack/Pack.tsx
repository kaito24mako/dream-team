type Props = {
  packBg: string;
  title: string;
  content: string;
  chances: string[];
  price: string;
};

function Pack({ packBg, title, content, chances, price }: Props) {
  return (
    <div
      className="flex flex-col gap-8 border border-border bg-neutral-950 rounded-lg shadow-md text-neutral-100 py-7 px-8 sm:px-10 overflow-hidden bg-cover bg-center w-43 sm:w-58 h-80"
      style={{ backgroundImage: `url(${packBg})` }}
    >
      <div className="text-center">
        <h3 className="text-base sm:text-lg lg:text-xl">{title}</h3>
        <p className="text-xxs sm:text-sm">{content}</p>
      </div>

      <div className="flex flex-col justify-between h-full">
        <ul className="text-xxs sm:text-xs lg:text-sm">
          {chances.map((chance) => (
            <li key={chance}>{chance}</li>
          ))}
        </ul>

        <button className="btn btn-primary btn-xs sm:btn-sm text-black">
          Buy: {price}
        </button>
      </div>
    </div>
  );
}
export default Pack;
