import { useAppContext } from '../../contexts/App/context';
import styles from './UserTitle.module.css';


const localDate = new Intl.DateTimeFormat('en-GB', {
  day: "numeric",
  month: "short",
  year: "numeric"
})

export function UserTitle() {
  const { me } = useAppContext();

  if ( !me ) {
    return null;
  }

  return (
    <div className={styles["user-title"]}>
      UserTitle Component
    </div>
  );
}