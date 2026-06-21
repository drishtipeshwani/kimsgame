import styles from "./RoastedChestnut.module.css";
import shared from "./shared.module.css";

export default function RoastedChestnut() {
  return (
    <div className={shared.element} role="img" aria-label="Two realistic roasted chestnuts">
      <div className={styles.container}>
        {/* Ground shadow */}
        <div className={styles.shadow}></div>

        {/* Back/Left Chestnut */}
        <div className={`${styles.chestnut} ${styles.back}`}>
          <div className={styles.gloss}></div>
          <div className={styles.flatBase}></div>
        </div>

        {/* Front/Right Chestnut (Overlapping) */}
        <div className={`${styles.chestnut} ${styles.front}`}>
          <div className={styles.gloss}></div>
          <div className={styles.flatBase}></div>
        </div>
      </div>
    </div>
  );
}