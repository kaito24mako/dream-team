function PlayerCardList({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`${className} flex gap-5 flex-wrap`}>{children}</div>;
}
export default PlayerCardList;
