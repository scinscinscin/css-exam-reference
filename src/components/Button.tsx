import styles from "./Button.module.scss";
type ButtonProps = {
  children: React.ReactNode;
  backgroundColor: string;
} & ({ href: string } | { onClick: () => void });

export function Button(props: ButtonProps) {
  if ("href" in props) {
    return (
      <a className={styles.button} style={{ backgroundColor: props.backgroundColor }} href={props.href}>
        {props.children}
      </a>
    );
  } else {
    return (
      <button
        className={styles.button}
        style={{ backgroundColor: props.backgroundColor }}
        onClick={() => props.onClick()}
      >
        {props.children}
      </button>
    );
  }
}
