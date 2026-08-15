import { useEffect, useState } from "react";
import MoonIcon from "../../assets/icon-moon.svg?react";
import SunIcon from "../../assets/icon-sun.svg?react";
import styles from "./Header.module.scss";


export function Header() {
  const [isDark, setIsDark] = useState(false);
  const themeText = isDark ? "Dark" : "Light";
  const nextThemeText = isDark ? "light" : "dark";

  useEffect(() => {
    document.body.dataset.theme = isDark ? "dark" : "light";
  }, [isDark]);

  const handleThemeClick = () => {
    setIsDark((currentIsDark) => !currentIsDark);
  };

  return (
    <div className={styles.header}>
      <button
        aria-label={`Switch to ${nextThemeText} theme`}
        aria-pressed={isDark}
        className={styles["theme-button"]}
        onClick={handleThemeClick}
        type="button"
      >
        <span>{themeText}</span>
        {isDark ? <MoonIcon aria-hidden="true" /> : <SunIcon aria-hidden="true" />}
      </button>
    </div>
  );
}
