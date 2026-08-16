import styles from "./GitHub.module.scss";


type GitHubProfileDataItemProps = {
  name: string;
  value: string | number;
};

function GitHubProfileDataItem(props: GitHubProfileDataItemProps) {
  const { name, value } = props;
  return (
    <div className={styles.stat}>
      <dt>{name}</dt>
      <dd>{value}</dd>
    </div>
  );
}

export function GitHubProfileData() {
  return (
    <dl className={styles.stats}>
      <GitHubProfileDataItem name="Репозитории" value="—" />
      <GitHubProfileDataItem name="Подписчики" value="—" />
      <GitHubProfileDataItem name="Звёзды проектов" value="—" />
    </dl>
  );
}
