import styles from "./SnowGlobe.module.css";
import shared from "./shared.module.css";

export default function SnowGlobe() {
  return (
    <div className={shared.element} role="img" aria-label="Magical Snow Globe">
      <div className={styles.globeWrapper}>
        {/* Drop shadow of the physical globe */}
        <div className={styles.dropShadow}></div>

        {/* The Wooden & Gold Base */}
        <div className={styles.base}>
          <div className={styles.baseTopRim}></div>
        </div>

        {/* Glass Dome Container */}
        <div className={styles.dome}>
          {/* Snowy Hill Inside */}
          <div className={styles.snowGround}></div>

          {/* Miniature Snowman */}
          <div className={styles.snowman}>
            <div className={styles.snowmanBody}></div>
            <div className={styles.snowmanHead}></div>
            <div className={styles.scarf}></div>
            <div className={styles.hat}></div>
          </div>

          {/* Drifted Snowflakes */}
          <div className={styles.flake1}></div>
          <div className={styles.flake2}></div>
          <div className={styles.flake3}></div>
          <div className={styles.flake4}></div>
          <div className={styles.flake5}></div>

          {/* Glass Glare and Shimmer Reflection */}
          <div className={styles.glassHighlight}></div>
          <div className={styles.glassShimmer}></div>
        </div>
      </div>
    </div>
  );
}