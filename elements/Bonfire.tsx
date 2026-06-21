import styles from "./Bonfire.module.css";
import shared from "./shared.module.css";

export default function Bonfire() {
  return (
    <div className={shared.element} role="img" aria-label="Bonfire">
      <div className={styles.bonfireWrapper}>
        {/* Ground Glow & Embers */}
        <div className={styles.ambientGlow}></div>
        <div className={styles.embers}></div>

        {/* Sparks rising */}
        <div className={styles.sparkOne}></div>
        <div className={styles.sparkTwo}></div>
        <div className={styles.sparkThree}></div>

        {/* Flames (Layered back to front) */}
        <div className={styles.flameBackLeft}></div>
        <div className={styles.flameBackRight}></div>
        <div className={styles.flameMain}></div>
        <div className={styles.flameInner}></div>

        {/* Wood Logs */}
        <div className={styles.logBack}></div>
        <div className={styles.logLeft}>
          <div className={styles.logCut}></div>
        </div>
        <div className={styles.logRight}>
          <div className={styles.logCut}></div>
        </div>
      </div>
    </div>
  );
}