import styles from "./Sunflower.module.css";
import shared from "./shared.module.css";

export default function Sunflower() {
  return (
    <div className={shared.element}>
      <div className={styles.sunflower}>
        {/* Stem and Leaf */}
        <div className={styles.stem}>
          <div className={styles.leafLeft}></div>
          <div className={styles.leafRight}></div>
        </div>

        {/* Back Layer of Petals */}
        <div className={styles.petalsBack}>
          <div className={styles.petalBack} style={{ transform: "rotate(15deg)" }} />
          <div className={styles.petalBack} style={{ transform: "rotate(45deg)" }} />
          <div className={styles.petalBack} style={{ transform: "rotate(75deg)" }} />
          <div className={styles.petalBack} style={{ transform: "rotate(105deg)" }} />
          <div className={styles.petalBack} style={{ transform: "rotate(135deg)" }} />
          <div className={styles.petalBack} style={{ transform: "rotate(165deg)" }} />
        </div>

        {/* Front Layer of Petals */}
        <div className={styles.petalsFront}>
          <div className={styles.petalFront} style={{ transform: "rotate(0deg)" }} />
          <div className={styles.petalFront} style={{ transform: "rotate(30deg)" }} />
          <div className={styles.petalFront} style={{ transform: "rotate(60deg)" }} />
          <div className={styles.petalFront} style={{ transform: "rotate(90deg)" }} />
          <div className={styles.petalFront} style={{ transform: "rotate(120deg)" }} />
          <div className={styles.petalFront} style={{ transform: "rotate(150deg)" }} />
        </div>

        {/* The Brown Center */}
        <div className={styles.center}>
          <div className={styles.seeds}></div>
          <div className={styles.details}></div>
        </div>
      </div>
    </div>
  );
}
