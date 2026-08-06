type Size = "default" | "xs" | "small";
type BgColor = "default" | "primary" | "secondary" | "accent";
type TextColor = "default" | "white" | "black";

type Props = {
  children: React.ReactNode;
  size?: Size;
  bgColor?: BgColor;
  textColor?: TextColor;
};

function Button({
  children,
  size = "default",
  bgColor = "default",
  textColor = "default",
}: Props) {
  const sizeClasses: Record<Size, string> = {
    default: "",
    xs: "btn-xs",
    small: "btn-sm",
  };
  const bgColorClasses: Record<BgColor, string> = {
    default: "",
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
  };
  const textColorClasses: Record<TextColor, string> = {
    default: "",
    white: "text-white",
    black: "text-black",
  };

  return (
    <button
      type="button"
      className={`btn ${sizeClasses[size]} ${bgColorClasses[bgColor]} ${textColorClasses[textColor]}`}
    >
      {children}
    </button>
  );
}
export default Button;
