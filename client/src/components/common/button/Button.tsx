type Type = "button" | "submit" | "reset";
type Size = "default" | "xs" | "small";
type BgColor = "default" | "primary" | "secondary" | "accent";
type TextColor = "default" | "white" | "black";

type Props = {
  children: React.ReactNode;
  className?: string;
  type?: Type;
  size?: Size;
  bgColor?: BgColor;
  textColor?: TextColor;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function Button({
  children,
  className = "",
  type = "button",
  size = "default",
  bgColor = "default",
  textColor = "default",
  onClick,
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
      type={type}
      className={`btn ${sizeClasses[size]} ${bgColorClasses[bgColor]} ${textColorClasses[textColor]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
