type Prop = {
  color?: string;
};

function Divider({ color = "default" }: Prop) {
  const colorClasses = {
    default: "",
    border: "before:h-px after:h-px [--divider-color:var(--color-border)]",
  };

  return (
    <div className={`${colorClasses[color]} divider w-full m-0 mb-4`}></div>
  );
}
export default Divider;
