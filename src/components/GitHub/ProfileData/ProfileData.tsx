import { useQuery } from "@tanstack/react-query";
import { number, object, parse, string } from "valibot";
import { buildGitHubProfileApiUrl } from "../../../user/helpers";
import { ProfileDataItem } from "./ProfileDataItem";
import styles from "./ProfileData.module.scss";


const githubProfileSchema = object({
  created_at: string(),
  followers: number(),
  public_repos: number(),
});

const validateGitHubProfile = (value: unknown) => parse(githubProfileSchema, value);

const fetchGitHubProfile = async () => {
  const response = await fetch(buildGitHubProfileApiUrl());
  return response.json() as Promise<unknown>;
};

export function ProfileData() {
  const { data } = useQuery({
    queryKey: ["github-profile"],
    queryFn: fetchGitHubProfile,
    select: validateGitHubProfile,
  });
  return (
    <dl className={styles.stats}>
      <ProfileDataItem
        name="Зарегистрирован"
        value={data ? new Date(data.created_at).toLocaleDateString("ru-RU") : "—"}
      />
      <ProfileDataItem name="Репозитории" value={data?.public_repos ?? "—"} />
      <ProfileDataItem name="Подписчики" value={data?.followers ?? "—"} />
    </dl>
  );
}
