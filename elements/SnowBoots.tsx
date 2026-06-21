import styles from "./SnowBoots.module.css";
import shared from "./shared.module.css";

export default function SnowBoots() {
  return (
    <div className={shared.element}>
      <div className={styles.wrapper} role="img" aria-label="Snow Boots">
        {/* Soft atmospheric background snow */}
        <div className={`${styles.snowflake} ${styles.sf1}`}></div>
        <div className={`${styles.snowflake} ${styles.sf2}`}></div>
        <div className={`${styles.snowflake} ${styles.sf3}`}></div>

        {/* Ground shadow */}
        <div className={styles.shadow}></div>

        {/* The Boot Structure */}
        <div className={styles.bootContainer}>
          {/* Pull Tab at the back of the shaft */}
          <div className={styles.pullTab}></div>

          {/* Shaft (Boot Leg in Tan Leather) */}
          <div className={styles.shaft}>
            {/* Tongue & Red Lacing details on front */}
            <div className={styles.tongue}></div>
            <div className={styles.lace1}></div>
            <div className={styles.lace2}></div>
            <div className={styles.lace3}></div>
            <div className={styles.laceLoop}></div>
          </div>

          {/* Fluffy Shearling Cuff */}
          <div className={styles.cuff}>
            <div className={styles.cuffTuft1}></div>
            <div className={styles.cuffTuft2}></div>
            <div className={styles.cuffTuft3}></div>
          </div>

          {/* Stitching Line between Shaft and Foot Lower */}
          <div className={styles.stitchLine}></div>

          {/* Lower Protective Shell (Vamp/Toe) */}
          <div className={styles.foot}>
            {/* Subtle gloss highlight on the rubber toe */}
            <div className={styles.toeHighlight}></div>
          </div>

          {/* Heavy Duty Rugged Sole */}
          <div className={styles.sole}>
            <div className={styles.treads}></div>
          </div>
        </div>
      </div>
    </div>
  );
}