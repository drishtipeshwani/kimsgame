import styles from "./Strawberry.module.css";
import shared from "./shared.module.css";

export default function Strawberry() {
  return (
    <div className={shared.element} role="img" aria-label="Strawberry">
      <div className={styles.strawberryWrapper}>
        {/* Ground shadow */}
        <div className={styles.shadow}></div>

        {/* Leaves / Calyx on top */}
        <div className={styles.calyx}>
          <div className={`${styles.leaf} ${styles.leaf1}`}></div>
          <div className={`${styles.leaf} ${styles.leaf2}`}></div>
          <div className={`${styles.leaf} ${styles.leaf3}`}></div>
          <div className={`${styles.leaf} ${styles.leaf4}`}></div>
          <div className={`${styles.leaf} ${styles.leaf5}`}></div>
          <div className={styles.stem}></div>
        </div>

        {/* Strawberry Main Body */}
        <div className={styles.body}>
          {/* Seeds placed systematically for 3D curvature */}
          <div className={styles.seed} style={{ top: "22%", left: "28%", transform: "rotate(-15deg)" }}></div>
          <div className={styles.seed} style={{ top: "20%", left: "50%", transform: "rotate(0deg)" }}></div>
          <div className={styles.seed} style={{ top: "22%", left: "72%", transform: "rotate(15deg)" }}></div>

          <div className={styles.seed} style={{ top: "42%", left: "18%", transform: "rotate(-30deg)" }}></div>
          <div className={styles.seed} style={{ top: "40%", left: "38%", transform: "rotate(-10deg)" }}></div>
          <div className={styles.seed} style={{ top: "40%", left: "62%", transform: "rotate(10deg)" }}></div>
          <div className={styles.seed} style={{ top: "42%", left: "82%", transform: "rotate(30deg)" }}></div>

          <div className={styles.seed} style={{ top: "62%", left: "26%", transform: "rotate(-20deg)" }}></div>
          <div className={styles.seed} style={{ top: "62%", left: "50%", transform: "rotate(0deg)" }}></div>
          <div className={styles.seed} style={{ top: "62%", left: "74%", transform: "rotate(20deg)" }}></div>

          <div className={styles.seed} style={{ top: "80%", left: "38%", transform: "rotate(-10deg)" }}></div>
          <div className={styles.seed} style={{ top: "80%", left: "62%", transform: "rotate(10deg)" }}></div>
        </div>
      </div>
    </div>
  );
}
