import styles from "./LightCandles.module.css";
import shared from "./shared.module.css";

export default function LightCandles() {
  return (
    <div className={shared.element} role="img" aria-label="Two lit candles with glowing flames">
      <div className={styles.candlesWrapper}>
        {/* Ground shadow and display plate */}
        <div className={styles.groundShadow}></div>
        <div className={styles.plate}></div>

        {/* --- TALL CANDLE (Left) --- */}
        <div className={styles.candleTall}>
          {/* Flame Glow background */}
          <div className={styles.flameGlow}></div>
          
          {/* Wick & Flame */}
          <div className={styles.wick}></div>
          <div className={styles.flame}>
            <div className={styles.flameOuter}></div>
            <div className={styles.flameInner}></div>
          </div>

          {/* Candle Body & Wax Details */}
          <div className={styles.bodyTall}>
            <div className={styles.waxTop}></div>
            <div className={styles.drip}></div>
            <div className={styles.highlight}></div>
          </div>
        </div>

        {/* --- SHORT CANDLE (Right, foreground) --- */}
        <div className={styles.candleShort}>
          {/* Flame Glow background */}
          <div className={styles.flameGlow}></div>

          {/* Wick & Flame */}
          <div className={styles.wick}></div>
          <div className={styles.flame}>
            <div className={styles.flameOuter}></div>
            <div className={styles.flameInner}></div>
          </div>

          {/* Candle Body & Wax Details */}
          <div className={styles.bodyShort}>
            <div className={styles.waxTop}></div>
            <div className={styles.dripShort}></div>
            <div className={styles.highlight}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
