import { Link } from "react-router-dom";

type Type = "button" | "submit" | "reset";
type Size = "default" | "xs" | "small";
type BgColor = "default" | "primary" | "secondary" | "accent";
type TextColor = "default" | "white" | "black";

type Props = {
  children: React.ReactNode;
  className?: string;
  link?: string;
  type?: Type;
  size?: Size;
  bgColor?: BgColor;
  textColor?: TextColor;
};

function Button({
  children,
  className = "",
  link = undefined,
  type = "button",
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

  if (link) {
    return (
      <Link to={`${link}`}>
        <button
          type={type}
          className={`btn ${sizeClasses[size]} ${bgColorClasses[bgColor]} ${textColorClasses[textColor]} ${className}`}
        >
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`btn ${sizeClasses[size]} ${bgColorClasses[bgColor]} ${textColorClasses[textColor]} ${className}`}
    >
      {children}
    </button>
  );
}
export default Button;
