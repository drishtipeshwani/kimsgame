import styles from "./Scarf.module.css";
import shared from "./shared.module.css";

export default function Scarf() {
  return (
    <div className={shared.element}>
      <div 
        className={styles.scarfWrapper} 
        role="img" 
        aria-label="A cozy pink and white striped scarf"
      >
        {/* Soft shadow underneath the scarf */}
        <div className={styles.shadow}></div>
        
        {/* Back neck loop */}
        <div className={styles.neckLoop}></div>
        
        {/* Left Tail */}
        <div className={styles.tailLeft}>
          <div className={styles.fringe}></div>
        </div>
        
        {/* Right Tail */}
        <div className={styles.tailRight}>
          <div className={styles.fringe}></div>
        </div>
        
        {/* Overlapping Knot / Fold */}
        <div className={styles.knot}></div>
      </div>
    </div>
  );
}