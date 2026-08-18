import { useIsFetching } from "@tanstack/react-query";
import LoaderIcon from "../../../assets/loader.svg?react";
import { extractGitHubUsername } from "../../../user/helpers";
import { userManifest } from "../../../user/manifest";
import styles from "./Header.module.scss";


export function Header() {
  const isFetching = useIsFetching();
  const loaderClassName = isFetching > 0 ? styles.loaderActive : styles.loaderInactive;
  return (
    <header className={styles.header}>
      <h2>
        GitHub
        <LoaderIcon aria-hidden="true" className={loaderClassName} />
      </h2>
      <a href={userManifest.github.main}>@{extractGitHubUsername()} ↗</a>
    </header>
  );
}
