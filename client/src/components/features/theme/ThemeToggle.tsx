import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useEffect, useState } from "react";

function DarkMode() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return (
    <button
      className={`transition-transform duration-600 ease-in-out cursor-pointer px-2
        ${theme === "dark" ? "rotate-0" : "rotate-180"}`}
      onClick={toggleTheme}
      aria-label="dark/light mode"
    >
      {theme === "dark" ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
    </button>
  );
}

export default DarkMode;
