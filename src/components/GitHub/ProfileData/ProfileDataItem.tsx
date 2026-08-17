import styles from "./ProfileData.module.scss";


interface ProfileDataItemProps {
  name: string;
  value?: string | number;
}

export function ProfileDataItem(props: ProfileDataItemProps) {
  const { name, value = "—" } = props;
  return (
    <div className={styles.stat}>
      <dt>{name}</dt>
      <dd>{value}</dd>
    </div>
  );
}
