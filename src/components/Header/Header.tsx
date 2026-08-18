import { useEffect, useState } from "react";
import MoonIcon from "../../assets/icon-moon.svg?react";
import SunIcon from "../../assets/icon-sun.svg?react";
import styles from "./Header.module.scss";


const themes = ["light", "dark"] as const;
const themeStorageKey = "color-theme";

export function Header() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem(themeStorageKey) === themes[1],
  );
  const theme = themes[Number(isDark)];
  const nextTheme = themes[Number(!isDark)];

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem(themeStorageKey, theme);
  }, [theme]);

  const handleThemeClick = () => {
    setIsDark((currentIsDark) => !currentIsDark);
  };

  return (
    <div className={styles.header}>
      <button
        aria-label={`switch to ${nextTheme} theme`}
        aria-pressed={isDark}
        className={styles["theme-button"]}
        onClick={handleThemeClick}
        type="button"
      >
        <span>{theme}</span>
        {isDark ? <MoonIcon aria-hidden="true" /> : <SunIcon aria-hidden="true" />}
      </button>
    </div>
  );
}
