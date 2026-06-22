import styles from "./Jar.module.css";
import shared from "./shared.module.css";

export default function Jar() {
  return (
    <div className={shared.element} role="img" aria-label="Empty glass mason jar">
      <div className={styles.jarWrapper}>
        {/* Ground shadow under the jar */}
        <div className={styles.shadow}></div>
        
        {/* Metal lid of the mason jar */}
        <div className="styles.lidContainer">
          <div className={styles.lidTop}></div>
          <div className={styles.lidBand}></div>
        </div>

        {/* Jar Neck */}
        <div className={styles.neck}></div>

        {/* Jar Body */}
        <div className={styles.body}>
          {/* Glass thickness base */}
          <div className={styles.baseGlass}></div>
          
          {/* Embossed glass details typical of mason jars */}
          <div className={styles.embossRing}></div>

          {/* Highlights & Reflections */}
          <div className={styles.highlightLeft}></div>
          <div className={styles.highlightRight}></div>
        </div>
      </div>
    </div>
  );
}