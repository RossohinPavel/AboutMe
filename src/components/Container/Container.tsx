import styles from "./Container.module.scss";


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