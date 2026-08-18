import styles from "./Projects.module.scss";


interface ProjectCardProps {
  name: string;
  url: string;
  description?: string | null;
  language?: string | null;
  stars?: string | number;
  forks?: string | number;
}

export function ProjectCard(props: ProjectCardProps) {
  const { name, url, description, language, stars, forks } = props;
  return (
    <article className={styles.project}>
      <h3 className={styles["project-name"]}>
        <a href={url}>{name}</a>
      </h3>
      <p className={styles["project-description"]}>{description || "—"}</p>
      <div className={styles["project-meta"]}>
        <span className={styles.language}>{language || "—"}</span>
        <span>★ {stars || "—"}</span>
        <span>⑂ {forks || "—"}</span>
      </div>
    </article>
  );
}
