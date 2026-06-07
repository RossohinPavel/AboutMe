import { UserStat } from '../UserStat/UserStat';
import styles from './UserCard.module.css';


export function UserCard() {

  return (
    <div className={styles["user-card"]}>
      <UserStat />
    </div>
  );
}