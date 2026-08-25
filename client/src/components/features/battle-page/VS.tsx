function VS({ isActive = false }: { isActive: boolean }) {
  return (
    <p
      className={`${isActive ? "text-primary" : "text-base-100/85 md:text-base-100/50"} flex items-center justify-center h-40 w-8 md:h-auto md:w-30 lg:w-38 text-center text-4xl font-primary`}
    >
      VS
    </p>
  );
}
export default VS;
