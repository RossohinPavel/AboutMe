import { useAppContext } from '../../contexts/App/context';
import styles from './UserStat.module.css';


export function UserStat() {
  const { me } = useAppContext();

  if ( !me ) {
    return null;
  }

  return (
    <div className={styles["user-stat"]}>
      <div className={styles["info"]}>
        <div className={styles['info-title']}>Repos</div>
        <div className={styles['info-numer']}>{me.public_repos}</div>
      </div>
      <div className={styles["info"]}>
        <div className={styles['info-title']}>Following</div>
        <div className={styles['info-numer']}>{me.following}</div>
      </div>
      <div className={styles["info"]}>
        <div className={styles['info-title']}>Followers</div>
        <div className={styles['info-numer']}>{me.followers}</div>
      </div>
    </div>
  );
}