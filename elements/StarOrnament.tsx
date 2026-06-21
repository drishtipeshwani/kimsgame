import styles from "./StarOrnament.module.css";
import shared from "./shared.module.css";

export default function StarOrnament() {
  return (
    <div className={shared.element} role="img" aria-label="Shiny gold 3D star ornament">
      <div className={styles.wrapper}>
        {/* Soft background glow */}
        <div className={styles.glow}></div>

        {/* Hanging mechanism */}
        <div className={styles.string}></div>
        <div className={styles.cap}></div>

        {/* Star Body */}
        <div className={styles.starContainer}>
          {/* Diagonal Points (Back Layer) */}
          <div className={`${styles.facet} ${styles.diag1}`}></div>
          <div className={`${styles.facet} ${styles.diag2}`}></div>

          {/* Main Points (Front Layer) */}
          <div className={`${styles.facet} ${styles.horizontal}`}></div>
          <div className={`${styles.facet} ${styles.vertical}`}></div>

          {/* 3D Center Core */}
          <div className={styles.centerCore}></div>

          {/* Specular Sparkle Highlight */}
          <div className={styles.sparkle}></div>
        </div>
      </div>
    </div>
  );
}