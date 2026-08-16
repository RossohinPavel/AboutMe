import { userManifest } from "../../../user/manifest";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.scss";


export function Projects() {
  return (
    <section aria-labelledby="github-projects-title">
      <h3 className={styles["projects-title"]} id="github-projects-title">
        Избранные проекты
      </h3>
      <div className={styles.projects}>
        {userManifest.github.favorites.map((name) => (
          <ProjectCard
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
