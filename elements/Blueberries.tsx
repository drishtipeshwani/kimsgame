import styles from './Blueberries.module.css';
import shared from "./shared.module.css";

export default function Blueberries() {
  return (
    <div className={shared.element} role="img" aria-label="Blueberries">
      <div className={styles.wrapper}>
        {/* Ground Drop Shadow */}
        <div className={styles.shadow}></div>

        {/* Small Leaf */}
        <div className={styles.leaf}></div>

        {/* Back Blueberry */}
        <div className={`${styles.berry} ${styles.back}`}>
          <div className={styles.bloom}></div>
          <div className={styles.calyx}>
            <div className={styles.calyxCenter}></div>
            <div className={styles.calyxPetal} style={{ transform: "rotate(0deg) translateY(-2px)" }}></div>
            <div className={styles.calyxPetal} style={{ transform: "rotate(72deg) translateY(-2px)" }}></div>
            <div className={styles.calyxPetal} style={{ transform: "rotate(144deg) translateY(-2px)" }}></div>
            <div className={styles.calyxPetal} style={{ transform: "rotate(216deg) translateY(-2px)" }}></div>
            <div className={styles.calyxPetal} style={{ transform: "rotate(288deg) translateY(-2px)" }}></div>
          </div>
        </div>

        {/* Front Blueberry */}
        <div className={`${styles.berry} ${styles.front}`}>
          <div className={styles.bloom}></div>
          <div className={styles.highlight}></div>
          <div className={styles.calyx}>
            <div className={styles.calyxCenter}></div>
            <div className={styles.calyxPetal} style={{ transform: "rotate(15deg) translateY(-2.5px)" }}></div>
            <div className={styles.calyxPetal} style={{ transform: "rotate(87deg) translateY(-2.5px)" }}></div>
            <div className={styles.calyxPetal} style={{ transform: "rotate(159deg) translateY(-2.5px)" }}></div>
            <div className={styles.calyxPetal} style={{ transform: "rotate(231deg) translateY(-2.5px)" }}></div>
            <div className={styles.calyxPetal} style={{ transform: "rotate(303deg) translateY(-2.5px)" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}