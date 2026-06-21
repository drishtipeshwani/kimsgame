import styles from "./HoneyJar.module.css";
import shared from "./shared.module.css";

export default function HoneyJar() {
  return (
    <div className={shared.element}>
      <div className={styles.jarWrapper} role="img" aria-label="Honey Jar">
        {/* Ground shadow */}
        <div className={styles.shadow}></div>
        
        {/* Glass Jar Body */}
        <div className={styles.jarBody}>
          {/* Liquid Honey Inside */}
          <div className={styles.honey}>
            {/* 3D Honey Surface */}
            <div className={styles.honeySurface}></div>
          </div>
          
          {/* Glass Highlights */}
          <div className={styles.glassHighlightLeft}></div>
          <div className={styles.glassHighlightRight}></div>
          
          {/* Cute Label */}
          <div className={styles.label}>
            <div className={styles.honeyDrop}></div>
          </div>
        </div>

        {/* Jar Neck */}
        <div className={styles.jarNeck}></div>

        {/* Fabric Cloth Lid Cover */}
        <div className={styles.clothLid}></div>
        <div className={styles.lidSkirt}></div>
        <div className={styles.lidTie}></div>
      </div>
    </div>
  );
}