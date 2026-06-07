import styles from "./InfoItem.module.scss";


export interface InfoItemProps {
  icon: string;
  text?: string | null;
  isLink?: boolean
}

export function InfoItem(props: InfoItemProps) {
  const { icon, text, isLink } = props;

  const currentText = text || "Not Available";
  
  let currentHref: string = "";
  if (isLink) {
    currentHref = text && text.startsWith("http") ? text : `https://${text}`;
  }

  return (
    <div className={`${styles["info-item"]}${text ? "" : ` ${styles["empty"]}`}`}>
      <img 
        src={icon} 
        alt="Icon" 
        className={styles["icon"]}
      />
      <div>
        {isLink && text ? (
          <a
            href={currentHref}
            target='_blank'
            rel="noreferrer"
            className={styles["link"]}
          >
            currentText
          </a>
        ) : currentText}
      </div>
    </div>
  );
}