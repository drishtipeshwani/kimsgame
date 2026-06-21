import styles from "./CandyCane.module.css";
import shared from "./shared.module.css";

export default function CandyCane() {
  return (
    <div className={shared.element} role="img" aria-label="Festive Candy Cane">
      <div className={styles.wrapper}>
        {/* Main Candy Cane Body with Clip Path and Drop Shadow */}
        <div className={styles.caneShadowContainer}>
          <div className={styles.caneBody}>
            {/* Base Red & White Stripes */}
            <div className={styles.stripes}></div>
            {/* Glossy 3D Cylinder Overlay */}
            <div className={styles.gloss}></div>
          </div>
        </div>

        {/* Decorative Green Ribbon Bow */}
        <div className={styles.bow}>
          <div className={styles.loopLeft}></div>
          <div className={styles.loopRight}></div>
          <div className={styles.knot}></div>
          <div className={styles.tailLeft}></div>
          <div className={styles.tailRight}></div>
        </div>
      </div>
    </div>
  );
}