import { useQuery } from "@tanstack/react-query";
import { array, nullable, number, object, parse, string, type InferOutput } from "valibot";
import { buildGitHubReposApiUrl } from "../../../user/helpers";
import { userManifest } from "../../../user/manifest";
import { createJsonQueryFn } from "../../../utils";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.scss";


const githubRepositorySchema = object({
  description: nullable(string()),
  forks_count: number(),
  language: nullable(string()),
  name: string(),
  stargazers_count: number(),
});

const githubRepositoriesSchema = array(githubRepositorySchema);

const githubRepositoryStub: InferOutput<typeof githubRepositorySchema> = {
  description: null,
  forks_count: 0,
  language: null,
  name: "",
  stargazers_count: 0,
};

const favoriteRepositoryNames = new Set<string>(userManifest.github.favorites);

const initialGithubRepositories = userManifest.github.favorites.map((name) => ({
  ...githubRepositoryStub,
  name,
}));

const validateGithubRepositories = (v: unknown) => {
  return parse(githubRepositoriesSchema, v)
    .filter(({ name }) => favoriteRepositoryNames.has(name));
};

export function Projects() {
  const { data } = useQuery({
    queryKey: ["github-repositories"],
    queryFn: createJsonQueryFn(buildGitHubReposApiUrl(), validateGithubRepositories),
    placeholderData: initialGithubRepositories,
    select: validateGithubRepositories,
  });
  return (
    <section aria-labelledby="github-projects-title">
      <h3 className={styles["projects-title"]} id="github-projects-title">
        Избранные проекты
      </h3>
      <div className={styles.projects}>
        {data?.map((repository) => (
          <ProjectCard
            name={repository.name}
            url={`${userManifest.github.main}${repository.name}`}
            description={repository.description}
            language={repository.language}
            stars={repository.stargazers_count}
            forks={repository.forks_count}
            key={repository.name}
          />
        ))}
      </div>
    </section>
  );
}
