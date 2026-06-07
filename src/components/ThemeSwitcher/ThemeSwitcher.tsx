import { useEffect, useState } from "react";
import MoonIcon from "../../assets/icon-moon.svg?react";
import SunIcon from "../../assets/icon-sun.svg?react";
import styles from "./ThemeSwitcher.module.scss";

console.log(MoonIcon)


export function ThemeSwitcher() {
  const [isDark, setDark] = useState(false);

  const themeText = isDark ? "Dark" : "Light";

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div 
      className={styles["theme-switcher"]}
      onClick={() => setDark(!isDark)}
    >
      <span>{themeText}</span>
      {isDark ? <MoonIcon /> : <SunIcon />}
    </div>
  );
}