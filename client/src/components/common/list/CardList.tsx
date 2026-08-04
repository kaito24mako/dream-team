function CardList({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`${className} flex justify-center gap-5 flex-wrap`}>
      {children}
    </div>
  );
}
export default CardList;
