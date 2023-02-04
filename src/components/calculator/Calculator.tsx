import { Display } from '../display/Display';
import { Keyboard } from '../keyboard/Keyboard';
import styles from './Calculator.module.scss';

export function Calculator() {
  return (
    <div className={styles.calculator}>
      <Display />
      <Keyboard />
    </div>
  );
}
