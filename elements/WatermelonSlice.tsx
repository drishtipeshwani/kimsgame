import styles from "./WatermelonSlice.module.css";
import shared from "./shared.module.css";

export default function WatermelonSlice() {
  return (
    <div className={shared.element} role="img" aria-label="Watermelon Slice">
      <div className={styles.wrapper}>
        {/* Soft shadow beneath the slice */}
        <div className={styles.shadow}></div>
        
        {/* Main Tilted Slice Container */}
        <div className={styles.slice}>
          {/* Outer Green Rind with Stripes */}
          <div className={styles.outerRind}>
            {/* Inner Pale Green Rind */}
            <div className={styles.innerRind}>
              {/* Sweet Red/Pink Flesh */}
              <div className={styles.flesh}>
                {/* Juice/Light Highlight */}
                <div className={styles.highlight}></div>
                
                {/* Seeds scattered across the flesh */}
                <div className={`${styles.seed} ${styles.seed1}`}></div>
                <div className={`${styles.seed} ${styles.seed2}`}></div>
                <div className={`${styles.seed} ${styles.seed3}`}></div>
                <div className={`${styles.seed} ${styles.seed4}`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}