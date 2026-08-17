import styles from "./Projects.module.scss";


interface ProjectCardProps {
  description: string;
  forks: string | number;
  language: string;
  name: string;
  stars: string | number;
}

export function ProjectCard(props: ProjectCardProps) {
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
