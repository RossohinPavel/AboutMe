import { useAppContext } from "../../contexts/App/context";
import { dateTimeFormat } from "../../utils/date-time-format";
import styles from "./UserTitle.module.scss";


export function UserTitle() {
  const { me } = useAppContext();

  const joindedDate = dateTimeFormat(me?.created_at || "");

  return (
    <div className={styles["user-title"]}>
      <h2>{me?.name}</h2>
      <h3>
        <a href={me?.html_url} target="_blank">
          @{me?.login}
        </a>
      </h3>
      <span>{joindedDate}</span>
    </div>
  );
}