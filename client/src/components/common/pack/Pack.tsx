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
      className="relative flex flex-col gap-8 border border-border bg-neutral-950 rounded-lg shadow-md py-7 px-10 overflow-hidden bg-cover bg-center w-50 lg:w-58 h-80"
      style={{ backgroundImage: `url(${packBg})` }}
    >
      <div className="text-center">
        <h3 className="text-2xl">{title}</h3>
        <p className="text-sm">{content}</p>
      </div>

      <ul className="text-xs lg:text-sm">
        {chances.map((chance) => (
          <li key={chance}>{chance}</li>
        ))}
      </ul>

      <button className="absolute btn btn-primary btn-sm bottom-5 left-18.5">
        Buy: {price}
      </button>
    </div>
  );
}
export default Pack;
