function VS({ isActive = false }: { isActive: boolean }) {
  return (
    <p
      className={`${isActive ? "text-primary" : "text-base-100/50"} w-8 md:w-25 lg:w-40 text-center text-4xl font-primary`}
    >
      VS
    </p>
  );
}
export default VS;
