import { useAppContext } from "../../contexts/App/context";
import { UserInfo } from "../UserInfo/UserInfo";
import { UserStat } from "../UserStat/UserStat";
import { UserTitle } from "../UserTitle/UserTitle";
import styles from "./UserCard.module.scss";


export function UserCard() {
  const { me } = useAppContext();

  if (!me) {
    return null;
  }

  return (
    <div className={styles["user-card"]}>
      <img 
        src={me?.avatar_url} 
        alt={me?.login} 
        className={styles["avatar"]}
      />
      <UserTitle />
      <p className={styles["bio"]}>
        {me.bio || ""}
      </p>
      <UserStat />
      <UserInfo />
    </div>
  );
}