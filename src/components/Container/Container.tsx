import styles from "./Container.module.css";


export interface ContainerProps {
  children: React.ReactNode
}

export function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <div className={styles["container"]}>
      {children}
    </div>
  );
}