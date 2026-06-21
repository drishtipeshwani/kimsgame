import styles from "./Icecream.module.css";
import shared from "./shared.module.css";

export default function Icecream() {
  return (
    <div className={shared.element} role="img" aria-label="Ice Cream Cone with Cherry">
      <div className={styles.icecreamWrapper}>
        {/* Ground Shadow */}
        <div className={styles.shadow}></div>

        {/* Waffle Cone */}
        <div className={styles.cone}></div>
        <div className={styles.coneShadow}></div>

        {/* Ice Cream Scoop */}
        <div className={styles.scoop}>
          {/* Bottom Cream Ruffles */}
          <div className={styles.ruffleContainer}>
            <div className={styles.ruffle}></div>
            <div className={styles.ruffle}></div>
            <div className={styles.ruffle}></div>
          </div>
        </div>

        {/* Chocolate Syrup & Drips */}
        <div className={styles.syrup}></div>
        <div className={styles.drip1}></div>
        <div className={styles.drip2}></div>

        {/* Sprinkles */}
        <div className={styles.sprinkle1}></div>
        <div className={styles.sprinkle2}></div>
        <div className={styles.sprinkle3}></div>

        {/* Cherry and Stem */}
        <div className={styles.stem}></div>
        <div className={styles.cherry}>
          <div className={styles.cherryReflection}></div>
        </div>
      </div>
    </div>
  );
}