import { useQuery } from "@tanstack/react-query";
import { number, object, parse, string } from "valibot";
import { buildGitHubProfileApiUrl } from "../../../user/helpers";
import { fetchJson, formatDate } from "../../../utils";
import { ProfileDataItem } from "./ProfileDataItem";
import styles from "./ProfileData.module.scss";


const githubProfileSchema = object({
  created_at: string(),
  followers: number(),
  public_repos: number(),
});

export function ProfileData() {
  const { data } = useQuery({
    queryKey: ["github-profile"],
    queryFn: () => fetchJson(buildGitHubProfileApiUrl()),
    select: (v: unknown) => parse(githubProfileSchema, v),
  });
  return (
    <dl className={styles.stats}>
      <ProfileDataItem name="Зарегистрирован" value={data && formatDate(data.created_at)} />
      <ProfileDataItem name="Репозитории" value={data?.public_repos} />
      <ProfileDataItem name="Подписчики" value={data?.followers} />
    </dl>
  );
}
