import styles from "./SunHat.module.css";
import shared from "./shared.module.css";

export default function SunHat() {
  return (
    <div className={shared.element} role="img" aria-label="Sun Hat">
      <div className={styles.wrapper}>
        {/* Ground Drop Shadow */}
        <div className={styles.groundShadow}></div>
        
        {/* Straw Brim */}
        <div className={styles.brim}>
          <div className={styles.brimTexture}></div>
        </div>

        {/* Inner shadow cast by crown onto brim */}
        <div className={styles.crownShadow}></div>

        {/* Dome Crown */}
        <div className={styles.crown}>
          <div className={styles.crownTexture}></div>
        </div>

        {/* Ribbon Band */}
        <div className={styles.ribbonBand}></div>

        {/* Ribbon Bow & Tails */}
        <div className={styles.bowCenter}></div>
        <div className={styles.bowLoopLeft}></div>
        <div className={styles.bowLoopRight}></div>
        <div className={styles.bowTailLeft}></div>
        <div className={styles.bowTailRight}></div>
      </div>
    </div>
  );
}