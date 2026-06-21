import styles from "./Lavender.module.css";
import shared from "./shared.module.css";

export default function Lavender() {
  return (
    <div className={shared.element} role="img" aria-label="Lavender">
      <div className={styles.lavenderWrapper}>
        {/* Ground Shadow */}
        <div className={styles.groundShadow}></div>

        {/* Stem */}
        <div className={styles.stem}>
          {/* Foliage/Leaves */}
          <div className={styles.leafLeft}></div>
          <div className={styles.leafRight}></div>
          <div className={styles.leafUpper}></div>
        </div>

        {/* Flower Buds (Spike) - Layered from back to front for 3D depth */}
        <div className={styles.flowerSpike}>
          {/* Back/Darker Buds */}
          <div className={`${styles.bud} ${styles.budDark} ${styles.b1}`}></div>
          <div className={`${styles.bud} ${styles.budDark} ${styles.b2}`}></div>
          <div className={`${styles.bud} ${styles.budDark} ${styles.b3}`}></div>
          <div className={`${styles.bud} ${styles.budDark} ${styles.b4}`}></div>

          {/* Midground/Medium Buds */}
          <div className={`${styles.bud} ${styles.budMedium} ${styles.b5}`}></div>
          <div className={`${styles.bud} ${styles.budMedium} ${styles.b6}`}></div>
          <div className={`${styles.bud} ${styles.budMedium} ${styles.b7}`}></div>
          <div className={`${styles.bud} ${styles.budMedium} ${styles.b8}`}></div>
          <div className={`${styles.bud} ${styles.budMedium} ${styles.b9}`}></div>

          {/* Foreground/Light Highlights */}
          <div className={`${styles.bud} ${styles.budLight} ${styles.b10}`}></div>
          <div className={`${styles.bud} ${styles.budLight} ${styles.b11}`}></div>
          <div className={`${styles.bud} ${styles.budLight} ${styles.b12}`}></div>
          <div className={`${styles.bud} ${styles.budLight} ${styles.b13}`}></div>
        </div>
      </div>
    </div>
  );
}