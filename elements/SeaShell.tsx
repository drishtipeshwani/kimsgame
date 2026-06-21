import styles from "./SeaShell.module.css";
import shared from "./shared.module.css";

export default function SeaShell() { 
  return (
    <div className={shared.element}>
      <div 
        className={styles.shellWrapper} 
        role="img" 
        aria-label="Sea Shell"
      >
        {/* Soft shadow beneath the shell */}
        <div className={styles.shadow}></div>

        {/* Main Shell Container */}
        <div className={styles.shellInner}>
          {/* 7 Ribs radiating from the bottom */}
          <div className={`${styles.rib} ${styles.rib1}`}></div>
          <div className={`${styles.rib} ${styles.rib2}`}></div>
          <div className={`${styles.rib} ${styles.rib3}`}></div>
          <div className={`${styles.rib} ${styles.rib4}`}></div>
          <div className={`${styles.rib} ${styles.rib5}`}></div>
          <div className={`${styles.rib} ${styles.rib6}`}></div>
          <div className={`${styles.rib} ${styles.rib7}`}></div>

          {/* Subtle horizontal ridges across the shell */}
          <div className={styles.ridgesOverlay}></div>

          {/* Glossy sheen for a pearlescent finish */}
          <div className={styles.gloss}></div>
        </div>

        {/* Scallop Ear Base (Hinge) */}
        <div className={styles.baseHinge}></div>
      </div>
    </div>
  );
}