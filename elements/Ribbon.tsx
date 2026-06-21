import styles from "./Ribbon.module.css";
import shared from "./shared.module.css";

export default function Ribbon() {
  return (
    <div className={shared.element} role="img" aria-label="Red satin ribbon bow">
      <div className={styles.ribbonWrapper}>
        {/* Drop Shadow underneath the entire ribbon */}
        <div className={styles.dropShadow}></div>
        
        {/* Ribbon Tails (placed behind loops) */}
        <div className={`${styles.tail} ${styles.tailLeft}`}></div>
        <div className={`${styles.tail} ${styles.tailRight}`}></div>
        
        {/* Left Loop and its inner shadow/glow */}
        <div className={`${styles.loop} ${styles.loopLeft}`}>
          <div className={styles.loopInner}></div>
        </div>
        
        {/* Right Loop and its inner shadow/glow */}
        <div className={`${styles.loop} ${styles.loopRight}`}>
          <div className={styles.loopInner}></div>
        </div>
        
        {/* Central Knot */}
        <div className={styles.knot}></div>
      </div>
    </div>
  );
}