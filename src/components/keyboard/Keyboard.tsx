import { Button } from '../button/Button';
import styles from './Keyboard.module.scss';

export function Keyboard() {
  return (
    <div className={styles.keyboard}>
      <Button onClick={() => {}} color="#2D2A37" value="1">
        1
      </Button>
      <Button onClick={() => {}} color="#2D2A37" value="2">
        2
      </Button>
      <Button onClick={() => {}} color="#2D2A37" value="3">
        3
      </Button>
      <Button onClick={() => {}} color="#2D2A37" value="4">
        4
      </Button>
    </div>
  );
}
