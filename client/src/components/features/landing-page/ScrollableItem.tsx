function ScrollableItem({
  children,
  heading,
  description,
  descriptionTwo,
}: {
  children: React.ReactNode;
  heading: string;
  description: string;
  descriptionTwo?: string;
}) {
  return (
    <div className="flex flex-col justify-center gap-5 min-h-[80dvh]">
      <h2 className="text-5xl text-start">{heading}</h2>
      <div className="text-2xl text-start">
        <p className="opacity-80">{description}</p>
        <p className="opacity-80">{descriptionTwo}</p>
      </div>
      {children}
    </div>
  );
}
export default ScrollableItem;
