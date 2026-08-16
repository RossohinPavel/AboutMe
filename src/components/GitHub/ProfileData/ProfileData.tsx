import { ProfileDataItem } from "./ProfileDataItem";
import styles from "./ProfileData.module.scss";


export function ProfileData() {
  return (
    <dl className={styles.stats}>
      <ProfileDataItem name="Репозитории" value="—" />
      <ProfileDataItem name="Подписчики" value="—" />
      <ProfileDataItem name="Звёзды проектов" value="—" />
    </dl>
  );
}
