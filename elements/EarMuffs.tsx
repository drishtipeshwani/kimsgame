import styles from "./EarMuffs.module.css";
import shared from "./shared.module.css";

export default function EarMuffs() {
  return (
    <div className={shared.element}>
      <div className={styles.wrapper} role="img" aria-label="Fluffy pink earmuffs">
        {/* Drop Shadow */}
        <div className={styles.shadow}></div>

        {/* Headband */}
        <div className={styles.headband}></div>

        {/* Metallic connectors */}
        <div className={styles.connectorLeft}></div>
        <div className={styles.connectorRight}></div>

        {/* Left Muff */}
        <div className={styles.muffLeft}>
          <div className={styles.muffInner}></div>
        </div>

        {/* Right Muff */}
        <div className={styles.muffRight}>
          <div className={styles.muffInner}></div>
        </div>
      </div>
    </div>
  );
}