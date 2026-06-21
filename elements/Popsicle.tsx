import styles from "./Popsicle.module.css";
import shared from "./shared.module.css";

export default function Popsicle() {
  return (
    <div className={shared.element} role="img" aria-label="Popsicle">
      <div className={styles.wrapper}>
        {/* Soft Drop Shadow */}
        <div className={styles.shadow}></div>

        {/* Wooden Stick */}
        <div className={styles.stick}></div>

        {/* Main Popsicle Body */}
        <div className={styles.body}>
          {/* Classic vertical ridges */}
          <div className={styles.ridgeLeft}></div>
          <div className={styles.ridgeRight}></div>

          {/* Ice Gloss & Highlights */}
          <div className={styles.glossMain}></div>
          <div className={styles.glossSide}></div>

          {/* Subtle melting drip for realism */}
          <div className={styles.drip}></div>
        </div>
      </div>
    </div>
  );
}