import styles from "./Sunflower.module.css";
import shared from "./shared.module.css";

export default function Sunflower() {
  return (
    <div className={shared.element} role="img" aria-label="Beautifully crafted CSS sunflower art">
      <div className={styles.sunflower}>
        {/* Stem & Leaves Container */}
        <div className={styles.stemContainer}>
          <div className={styles.stem}></div>
          <div className={styles.leafLeft}></div>
          <div className={styles.leafRight}></div>
        </div>

        {/* Back Layer of Petals (Darker, Offset) */}
        <div className={styles.petalsBack}>
          <div className={styles.petalBack} style={{ transform: "rotate(15deg)" }} />
          <div className={styles.petalBack} style={{ transform: "rotate(45deg)" }} />
          <div className={styles.petalBack} style={{ transform: "rotate(75deg)" }} />
          <div className={styles.petalBack} style={{ transform: "rotate(105deg)" }} />
          <div className={styles.petalBack} style={{ transform: "rotate(135deg)" }} />
          <div className={styles.petalBack} style={{ transform: "rotate(165deg)" }} />
        </div>

        {/* Front Layer of Petals (Bright, Centered) */}
        <div className={styles.petalsFront}>
          <div className={styles.petalFront} style={{ transform: "rotate(0deg)" }} />
          <div className={styles.petalFront} style={{ transform: "rotate(30deg)" }} />
          <div className={styles.petalFront} style={{ transform: "rotate(60deg)" }} />
          <div className={styles.petalFront} style={{ transform: "rotate(90deg)" }} />
          <div className={styles.petalFront} style={{ transform: "rotate(120deg)" }} />
          <div className={styles.petalFront} style={{ transform: "rotate(150deg)" }} />
        </div>

        {/* Center Seed Disk */}
        <div className={styles.center}>
          <div className={styles.seeds}></div>
          <div className={styles.details}></div>
        </div>
      </div>
    </div>
  );
}