import styles from './Plum.module.css';
import shared from './shared.module.css';

export default function Plum() {
  return (
    <div className={shared.element} role="img" aria-label="Two realistic plums side by side">
      <div className={styles.canvas}>
        {/* Ground shadow beneath the fruit */}
        <div className={styles.dropShadow}></div>
        
        {/* Stem and Leaf attached to the plums */}
        <div className={styles.stemContainer}>
          <div className={styles.stem}></div>
          <div className={styles.leaf}></div>
        </div>

        {/* Plum 1 (Back/Left) */}
        <div className={styles.plumBack}>
          <div className={styles.cleft}></div>
          <div className={styles.bloom}></div>
          <div className={styles.highlight}></div>
        </div>

        {/* Plum 2 (Front/Right) */}
        <div className={styles.plumFront}>
          <div className={styles.cleft}></div>
          <div className={styles.bloom}></div>
          <div className={styles.highlight}></div>
        </div>
      </div>
    </div>
  );
}