import { GitHubHeader } from "./GitHubHeader";
import { GitHubProfileData } from "./GitHubProfileData";
import { GitHubProjects } from "./GitHubProjects";


export function GitHub() {
  return (
    <div aria-label="Статистика и избранные проекты GitHub">
      <GitHubHeader />
      <GitHubProfileData />
      <GitHubProjects />
    </div>
  );
}
