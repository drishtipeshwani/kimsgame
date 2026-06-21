import styles from "./GardeningCan.module.css";
import shared from "./shared.module.css";

export default function GardeningCan() {
  return (
    <div className={shared.element} role="img" aria-label="Gardening Can with spout and handle">
      <div className={styles.container}>
        {/* Soft Drop Shadow beneath the body */}
        <div className={styles.shadow}></div>
        
        {/* Ergonomic Back Handle */}
        <div className={styles.backHandle}></div>
        
        {/* Main Cylindrical Body */}
        <div className={styles.body}>
          <div className={styles.bodyShine}></div>
        </div>

        {/* Thicker Top Rim */}
        <div className={styles.topRim}></div>

        {/* Angled Spout & Perforated Nozzle Assembly */}
        <div className={styles.spout}>
          <div className={styles.spoutTube}></div>
          <div className={styles.nozzle}>
            <div className={styles.nozzleFace}></div>
          </div>
          {/* A whimsical tiny water droplet dripping from the tip */}
          <div className={styles.droplet}></div>
        </div>
      </div>
    </div>
  );
}