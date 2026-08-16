import { extractGitHubUsername } from "../../user/helpers";
import { userManifest } from "../../user/manifest";
import styles from "./GitHub.module.scss";


export function GitHubHeader() {
  return (
    <header className={styles.header}>
      <h2>GitHub</h2>
      <a href={userManifest.github.main}>@{extractGitHubUsername()} ↗</a>
    </header>
  );
}
