import { useQuery } from "@tanstack/react-query";
import { number, object, parse, string } from "valibot";
import { buildGitHubProfileApiUrl } from "../../../user/helpers";
import { createJsonQueryFn, formatDate } from "../../../utils";
import { ProfileDataItem } from "./ProfileDataItem";
import styles from "./ProfileData.module.scss";


const githubProfileSchema = object({
  created_at: string(),
  followers: number(),
  public_repos: number(),
});

const validateGithubProfile = (v: unknown) => parse(githubProfileSchema, v);

export function ProfileData() {
  const { data } = useQuery({
    queryKey: ["github-profile"],
    queryFn: createJsonQueryFn(buildGitHubProfileApiUrl(), validateGithubProfile),
    select: validateGithubProfile,
  });
  return (
    <dl className={styles.stats}>
      <ProfileDataItem name="Зарегистрирован" value={data && formatDate(data.created_at)} />
      <ProfileDataItem name="Репозитории" value={data?.public_repos} />
      <ProfileDataItem name="Подписчики" value={data?.followers} />
    </dl>
  );
}
