import styles from "./CampingTent.module.css";
import shared from "./shared.module.css";

export default function CampingTent() {
  return (
    <div className={shared.element}>
      <div className={styles.canvas} role="img" aria-label="Camping Tent">
        {/* Soft ground shadow underneath the tent */}
        <div className={styles.groundShadow}></div>

        {/* Metallic ground stakes / corner poles */}
        <div className={styles.pegLeft}></div>
        <div className={styles.pegRight}></div>

        {/* Main Tent Structure */}
        <div className={styles.tentBody}>
          {/* Outer nylon shell */}
          <div className={styles.outerShell}></div>

          {/* Deep dark tent interior */}
          <div className={styles.interior}>
            <div className={styles.interiorShadow}></div>
          </div>

          {/* Folded entrance flaps */}
          <div className={styles.flapLeft}></div>
          <div className={styles.flapRight}></div>

          {/* Structural seam highlight down the center peak */}
          <div className={styles.centerSeam}></div>
        </div>
      </div>
    </div>
  );
}