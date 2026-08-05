function ScrollableItem({
  children,
  heading,
  description,
}: {
  children: React.ReactNode;
  heading: string;
  description: string;
}) {
  return (
    <div className="flex flex-col justify-center h-full shrink-0 snap-start gap-5">
      <h2 className="text-5xl text-start">{heading}</h2>
      <div className="text-2xl text-start">
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}
export default ScrollableItem;
