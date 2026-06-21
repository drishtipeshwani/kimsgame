import styles from "./Cherries.module.css";
import shared from "./shared.module.css";

export default function Cherries() {
  return (
    <div className={shared.element} role="img" aria-label="A pair of realistic juicy red cherries with green stems and a leaf">
      <div className={styles.cherriesContainer}>
        {/* Ground Shadows */}
        <div className={styles.shadowLeft}></div>
        <div className={styles.shadowRight}></div>

        {/* Stems */}
        <div className={styles.stemLeft}></div>
        <div className={styles.stemRight}></div>

        {/* Top Leaf and Joint Node */}
        <div className={styles.leaf}></div>
        <div className={styles.joint}></div>

        {/* Left Cherry (In Front) */}
        <div className={`${styles.cherry} ${styles.cherryLeft}`}>
          <div className={styles.indent}></div>
          <div className={styles.highlight}></div>
          <div className={styles.subHighlight}></div>
        </div>

        {/* Right Cherry (Slightly Behind) */}
        <div className={`${styles.cherry} ${styles.cherryRight}`}>
          <div className={styles.indent}></div>
          <div className={styles.highlight}></div>
          <div className={styles.subHighlight}></div>
        </div>
      </div>
    </div>
  );
}