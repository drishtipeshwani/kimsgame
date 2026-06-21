import styles from "./Sweater.module.css";
import shared from "./shared.module.css";

export default function Sweater() {
  return (
    <div className={shared.element} role="img" aria-label="Cozy knitted winter sweater">
      <div className={styles.sweaterWrapper}>
        {/* Soft shadow below the sweater */}
        <div className={styles.shadow}></div>
        
        {/* Left Sleeve */}
        <div className={styles.sleeveLeft}>
          <div className={styles.cuff}></div>
        </div>
        
        {/* Right Sleeve */}
        <div className={styles.sleeveRight}>
          <div className={styles.cuff}></div>
        </div>
        
        {/* Main Body Torso */}
        <div className={styles.body}>
          {/* Knit pattern band on chest */}
          <div className={styles.patternBand}>
            <div className={styles.patternDetail}></div>
          </div>
          
          {/* Bottom Ribbed Hem */}
          <div className={styles.hem}></div>
        </div>

        {/* Ribbed Neck Collar */}
        <div className={styles.collar}></div>
      </div>
    </div>
  );
}