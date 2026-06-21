import styles from "./WateringCan.module.css";
import shared from "./shared.module.css";

export default function WateringCan() {
  return (
    <div className={shared.element} role="img" aria-label="Watering Can">
      <div className={styles.container}>
        {/* Ground Shadow */}
        <div className={styles.shadow}></div>

        {/* Water Droplets spraying out */}
        <div className={styles.droplet1}></div>
        <div className={styles.droplet2}></div>
        <div className={styles.droplet3}></div>

        {/* Back Handle (Pouring Handle) */}
        <div className={styles.backHandle}></div>

        {/* Top Handle (Carrying Handle) */}
        <div className={styles.topHandle}></div>

        {/* Main Cylindrical Body */}
        <div className={styles.body}>
          {/* Subtle body highlight */}
          <div className={styles.bodyHighlight}></div>
        </div>

        {/* Angled Spout */}
        <div className={styles.spout}></div>

        {/* Brass Rose / Sprinkler */}
        <div className={styles.rose}></div>
      </div>
    </div>
  );
}