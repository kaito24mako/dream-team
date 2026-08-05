type Size = "xs" | "small";
type BgColor = "primary" | "secondary" | "accent";
type TextColor = "white" | "black";

type Props = {
  children: React.ReactNode;
  size?: Size;
  bgColor?: BgColor;
  textColor?: TextColor;
};

function Button({ children, size, bgColor, textColor }: Props) {
  const sizeClasses: Record<Size, string> = {
    xs: "btn-xs",
    small: "btn-sm",
  };
  const bgColorClasses: Record<BgColor, string> = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
  };
  const textColorClasses: Record<TextColor, string> = {
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
