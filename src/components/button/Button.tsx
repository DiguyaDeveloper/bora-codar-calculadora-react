import styles from './Button.module.scss';

interface ButtonProps {
  children: string;
  color: string;
  value: string;
  onClick: (key: string) => void;
}

export function Button(props: ButtonProps) {
  return (
    <button
      onClick={() => props.onClick(props.children)}
      className={styles.button}>
      <span>{props.children}</span>
    </button>
  );
}
