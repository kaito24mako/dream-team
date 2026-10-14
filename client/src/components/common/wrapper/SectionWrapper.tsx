function SectionWrapper({ children, className = "" }) {
  return (
    <section
      className={`mt-6 rounded-md border border-base-300 bg-base-200 p-5 pb-8 shadow-[0_4px_14px_rgba(0,0,0,0.08)] sm:p-6 sm:pb-10 ${className}`}
    >
      {children}
    </section>
  );
}
export default SectionWrapper;
