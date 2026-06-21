import styles from "./YuleLog.module.css";
import shared from "./shared.module.css";

export default function YuleLog() {
  return (
    <div className={shared.element} role="img" aria-label="Yule Log Cake">
      <div className={styles.yuleWrapper}>
        {/* Soft shadow under the chocolate log */}
        <div className={styles.shadow}></div>

        {/* Main Log Body */}
        <div className={styles.logBody}>
          <div className={styles.barkTexture}></div>
        </div>

        {/* Sliced Roll End showing chocolate/cream spiral */}
        <div className={styles.cutFace}></div>

        {/* Small branching node */}
        <div className={styles.branch}>
          <div className={styles.branchCut}></div>
        </div>

        {/* Holly Leaves */}
        <div className={styles.leafLeft}></div>
        <div className={styles.leafRight}></div>

        {/* Glossy Red Berries */}
        <div className={styles.berry1}></div>
        <div className={styles.berry2}></div>
        <div className={styles.berry3}></div>

        {/* Dusting of Powdered Sugar */}
        <div className={styles.sugar}></div>
      </div>
    </div>
  );
}