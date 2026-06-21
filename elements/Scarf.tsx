import styles from "./Scarf.module.css";
import shared from "./shared.module.css";

export default function Scarf() {
  return (
    <div className={shared.element}>
      <div className={styles.scarfWrapper} role="img" aria-label="Cozy striped winter scarf">
        {/* Soft shadow below the scarf tails */}
        <div className={styles.shadow}></div>
        
        {/* Dark inner fold representing the neck space */}
        <div className={styles.neckInner}></div>
        
        {/* Left hanging tail (in the background) */}
        <div className={styles.tailLeft}>
          <div className={styles.fringesLeft}>
            <div className={styles.fringe}></div>
            <div className={styles.fringe}></div>
            <div className={styles.fringe}></div>
          </div>
        </div>
        
        {/* Main wrapped loop around the neck */}
        <div className={styles.neckLoop}></div>
        
        {/* Overlapping knot/intersection */}
        <div className={styles.knot}></div>
        
        {/* Right hanging tail (in the foreground) */}
        <div className={styles.tailRight}>
          <div className={styles.fringesRight}>
            <div className={styles.fringe}></div>
            <div className={styles.fringe}></div>
            <div className={styles.fringe}></div>
          </div>
        </div>
      </div>
    </div>
  );
}