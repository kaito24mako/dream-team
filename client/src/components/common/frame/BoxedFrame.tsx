function BoxedFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-primary/10 bg-base-200/50 shadow-md p-6 md:p-10">
      {children}
    </div>
  );
}

export default BoxedFrame;
