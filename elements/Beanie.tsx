import styles from "./Beanie.module.css";
import shared from "./shared.module.css";

export default function Beanie() {
  return (
    <div className={shared.element}>
      <div
        className={styles.beanieWrapper}
        role="img"
        aria-label="A cozy crimson knitted beanie with a fluffy pom-pom and leather patch"
      >
        {/* Grounding Shadow */}
        <div className={styles.shadow}></div>
        
        {/* Fluffy Pom-pom */}
        <div className={styles.pompom}>
          <div className={styles.pomFluff1}></div>
          <div className={styles.pomFluff2}></div>
        </div>
        
        {/* Knitted Crown */}
        <div className={styles.crown}>
          <div className={styles.crownPattern}></div>
        </div>
        
        {/* Folded Brim & Patch */}
        <div className={styles.brim}>
          <div className={styles.patch}></div>
        </div>
      </div>
    </div>
  );
}