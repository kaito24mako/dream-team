function SectionWrapper({ children, className = "" }) {
  return (
    <section
      className={`border border-border mt-6 p-6 pb-10 bg-base-200 rounded-md shadow-neutral-100 ${className}`}
    >
      {children}
    </section>
  );
}
export default SectionWrapper;
