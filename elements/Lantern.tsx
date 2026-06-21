import styles from "./Lantern.module.css";
import shared from "./shared.module.css";

export default function Lantern() {
  return (
    <div className={shared.element} role="img" aria-label="Lit vintage lantern">
      <div className={styles.lanternWrapper}>
        {/* Soft ground shadow */}
        <div className={styles.shadow}></div>

        {/* Ambient warm glow behind lantern */}
        <div className={styles.ambientGlow}></div>

        {/* Top Hanging Ring */}
        <div className={styles.topRing}></div>

        {/* Cap Tier 1 (Small Top Dome) */}
        <div className={styles.tier1}></div>

        {/* Cap Tier 2 (Main Roof) */}
        <div className={styles.tier2}></div>

        {/* Glass Chamber with Flame and Highlights */}
        <div className={styles.glassContainer}>
          <div className={styles.glass}></div>
          <div className={styles.glassHighlight}></div>
          <div className={styles.flame}></div>
        </div>

        {/* Protective Metal Wire Cage */}
        <div className={styles.cageLeft}></div>
        <div className={styles.cageRight}></div>
        <div className={styles.cageHorizontal}></div>

        {/* Metallic Base */}
        <div className={styles.base}></div>
      </div>
    </div>
  );
}