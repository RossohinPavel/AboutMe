import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import styles from "./Header.module.scss";


export function Header() {
  return (
    <div className={styles["header"]}>
      <div className={styles["logo"]}>
        divFinder
      </div>
      <ThemeSwitcher />
    </div>
  );
}