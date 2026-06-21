import styles from "./JingleBells.module.css";
import shared from "./shared.module.css";

export default function JingleBells() {
  return (
    <div className={shared.element}>
      <div 
        className={styles.container} 
        role="img" 
        aria-label="Festive Golden Jingle Bells"
      >
        {/* Soft ground shadow */}
        <div className={styles.groundShadow}></div>

        {/* Bell Loops (hangers) */}
        <div className={styles.loopLeft}></div>
        <div className={styles.loopRight}></div>

        {/* Back Bell (Left) */}
        <div className={`${styles.bell} ${styles.bellLeft}`}>
          <div className={styles.highlight}></div>
          <div className={styles.ridge}></div>
          <div className={styles.soundSlit}>
            <div className={styles.holeLeft}></div>
            <div className={styles.holeRight}></div>
          </div>
        </div>

        {/* Front Bell (Right) */}
        <div className={`${styles.bell} ${styles.bellRight}`}>
          <div className={styles.highlight}></div>
          <div className={styles.ridge}></div>
          <div className={styles.soundSlit}>
            <div className={styles.holeLeft}></div>
            <div className={styles.holeRight}></div>
          </div>
        </div>

        {/* Ribbon / Bow */}
        <div className={styles.bowWrapper}>
          <div className={styles.ribbonLeft}></div>
          <div className={styles.ribbonRight}></div>
          <div className={styles.bowKnot}></div>
          <div className={styles.tailLeft}></div>
          <div className={styles.tailRight}></div>
        </div>

        {/* Holly Detail */}
        <div className={styles.hollyLeaf}></div>
      </div>
    </div>
  );
}