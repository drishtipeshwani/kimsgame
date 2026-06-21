import styles from "./YellowCandle.module.css";
import shared from "./shared.module.css";

export default function YellowCandle() {
  return (
    <div className={shared.element} role="img" aria-label="Yellow Candle">
      <div className={styles.candleWrapper}>
        {/* Table/Surface Shadow */}
        <div className={styles.shadow}></div>

        {/* Ambient Warm Glow */}
        <div className={styles.ambientGlow}></div>

        {/* The Candle Flame */}
        <div className={styles.flame}></div>

        {/* Dark Wick */}
        <div className={styles.wick}></div>

        {/* Top Molten Wax Pool */}
        <div className={styles.waxTop}></div>

        {/* Main Candle Body */}
        <div className={styles.candleBody}>
          {/* Wax Drips on the Body */}
          <div className={styles.dripLeft}></div>
          <div className={styles.dripRight}></div>
        </div>
      </div>
    </div>
  );
}