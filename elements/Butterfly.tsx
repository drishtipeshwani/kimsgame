import styles from "./Butterfly.module.css";
import shared from "./shared.module.css";

export default function Butterfly() {
  return (
    <div className={shared.element} role="img" aria-label="Vibrant hovering butterfly">
      <div className={styles.butterflyWrapper}>
        {/* Drop shadow simulating hover distance */}
        <div className={styles.shadow}></div>

        {/* Left Wing Pair */}
        <div className={styles.leftWings}>
          <div className={`${styles.wing} ${styles.upperLeft}`}></div>
          <div className={`${styles.wing} ${styles.lowerLeft}`}></div>
        </div>

        {/* Right Wing Pair */}
        <div className={styles.rightWings}>
          <div className={`${styles.wing} ${styles.upperRight}`}></div>
          <div className={`${styles.wing} ${styles.lowerRight}`}></div>
        </div>

        {/* Central Body & Antennae */}
        <div className={styles.bodyContainer}>
          <div className={styles.antennaLeft}></div>
          <div className={styles.antennaRight}></div>
          <div className={styles.head}></div>
          <div className={styles.body}></div>
        </div>
      </div>
    </div>
  );
}