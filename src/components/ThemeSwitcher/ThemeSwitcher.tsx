import { useEffect, useState } from "react";
import MoonIcon from "../../assets/icon-moon.svg";
import SunIcon from "../../assets/icon-sun.svg";
import styles from "./ThemeSwitcher.module.scss";


export function ThemeSwitcher() {
  const [isDark, setDark] = useState(false);

  const themeText = isDark ? "Dark" : "Light";
  const ThemeIcon = isDark ? MoonIcon : SunIcon;

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div 
      className={styles["theme-switcher"]}
      onClick={() => setDark(!isDark)}
    >
      <span>{themeText}</span>
      <img 
        src={ThemeIcon} 
        alt="Theme Icon" 
        className={styles["icon"]}
      />
    </div>
  );
}