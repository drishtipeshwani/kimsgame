import styles from "./TropicalTree.module.css";
import shared from "./shared.module.css";

export default function TropicalTree() {
  return (
    <div className={shared.element}>
      <div 
        className={styles.canvas} 
        role="img" 
        aria-label="Tropical Palm Tree on a Sandy Island"
      >
        {/* Island Base and Shadows */}
        <div className={styles.islandShadow}></div>
        <div className={styles.island}></div>

        {/* Segmented Palm Trunk */}
        <div className={styles.trunk}>
          <div className={`${styles.trunkSegment} ${styles.seg1}`}></div>
          <div className={`${styles.trunkSegment} ${styles.seg2}`}></div>
          <div className={`${styles.trunkSegment} ${styles.seg3}`}></div>
          <div className={`${styles.trunkSegment} ${styles.seg4}`}></div>
          <div className={`${styles.trunkSegment} ${styles.seg5}`}></div>
        </div>

        {/* Canopy of Palm Fronds */}
        <div className={styles.canopy}>
          {/* Background Fronds (Darker) */}
          <div className={`${styles.frond} ${styles.frondBg1}`}></div>
          <div className={`${styles.frond} ${styles.frondBg2}`}></div>
          <div className={`${styles.frond} ${styles.frondBg3}`}></div>

          {/* Foreground Fronds (Brighter) */}
          <div className={`${styles.frond} ${styles.frondFg1}`}></div>
          <div className={`${styles.frond} ${styles.frondFg2}`}></div>
          <div className={`${styles.frond} ${styles.frondFg3}`}></div>
          <div className={`${styles.frond} ${styles.frondFg4}`}></div>
          <div className={`${styles.frond} ${styles.frondFg5}`}></div>
        </div>

        {/* Coconuts */}
        <div className={styles.coconutCluster}>
          <div className={`${styles.coconut} ${styles.coco1}`}></div>
          <div className={`${styles.coconut} ${styles.coco2}`}></div>
          <div className={`${styles.coconut} ${styles.coco3}`}></div>
        </div>
      </div>
    </div>
  );
}