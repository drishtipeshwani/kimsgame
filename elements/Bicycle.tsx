import styles from "./Bicycle.module.css";
import shared from "./shared.module.css";

export default function Bicycle() {
  return (
    <div className={shared.element}>
      <div className={styles.bikeWrapper} role="img" aria-label="Bicycle">
        {/* Soft ground shadow */}
        <div className={styles.shadow}></div>

        {/* Mechanical/Structural Layers */}
        <div className={styles.chain}></div>
        <div className={styles.chainStay}></div>
        <div className={styles.seatStay}></div>

        {/* Wheels with hubs and spokes */}
        <div className={`${styles.wheel} ${styles.rearWheel}`}>
          <div className={styles.hub}></div>
        </div>
        <div className={`${styles.wheel} ${styles.frontWheel}`}>
          <div className={styles.hub}></div>
        </div>

        {/* Main Sporty Frame Triangles */}
        <div className={styles.seatTube}></div>
        <div className={styles.downTube}></div>
        <div className={styles.topTube}></div>
        <div className={styles.fork}></div>

        {/* Details: Water bottle cage, Crankset */}
        <div className={styles.waterBottle}></div>
        <div className={styles.crankset}>
          <div className={styles.pedal}></div>
        </div>

        {/* Steering Column & Saddle */}
        <div className={styles.seatpost}></div>
        <div className={styles.saddle}></div>
        <div className={styles.stem}></div>
        <div className={styles.handlebars}></div>
      </div>
    </div>
  );
}