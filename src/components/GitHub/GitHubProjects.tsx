import { userManifest } from "../../user/manifest";
import styles from "./GitHub.module.scss";


type GitHubProjectCardProps = {
  description: string;
  forks: string | number;
  language: string;
  name: string;
  stars: string | number;
};

function GitHubProjectCard(props: GitHubProjectCardProps) {
  const { description, forks, language, name, stars } = props;
  return (
    <article className={styles.project}>
      <h3 className={styles["project-name"]}>{name}</h3>
      <p className={styles["project-description"]}>{description}</p>
      <div className={styles["project-meta"]}>
        <span className={styles.language}>{language}</span>
        <span>★ {stars}</span>
        <span>⑂ {forks}</span>
      </div>
    </article>
  );
}

export function GitHubProjects() {
  return (
    <section aria-labelledby="github-projects-title">
      <h3 className={styles["projects-title"]} id="github-projects-title">
        Избранные проекты
      </h3>
      <div className={styles.projects}>
        {userManifest.github.favorites.map((name) => (
          <GitHubProjectCard
            description="Описание проекта будет добавлено позже."
            forks="—"
            key={name}
            language="—"
            name={name}
            stars="—"
          />
        ))}
      </div>
    </section>
  );
}
