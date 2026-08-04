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
      className="flex flex-col gap-8 border border-border bg-neutral-950 rounded-lg py-7 px-10 overflow-hidden bg-cover bg-center w-60"
      style={{ backgroundImage: `url(${packBg})` }}
    >
      <div className="text-center">
        <h3 className="text-2xl">{title}</h3>
        <p className="text-sm opacity-87">Includes: {content}</p>
      </div>

      <ul className="text-xs">
        {chances.map((chance) => (
          <li key={chance}>{chance}</li>
        ))}
      </ul>

      <button className="btn btn-primary btn-sm">Buy: {price}</button>
    </div>
  );
}
export default Pack;
