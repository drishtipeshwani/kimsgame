import styles from "./WoolSocks.module.css";
import shared from "./shared.module.css";

export default function WoolSocks() {
  return (
    <div className={shared.element}>
      <div className={styles.socksWrapper} role="img" aria-label="A pair of cozy wool socks with red heels and toes, tied together with a ribbon">
        {/* Ground shadow */}
        <div className={styles.shadow}></div>

        {/* Back Sock */}
        <div className={`${styles.sock} ${styles.back}`}>
          <div className={styles.cuff}></div>
          <div className={styles.leg}></div>
          <div className={styles.heel}></div>
          <div className={styles.foot}></div>
          <div className={styles.toe}></div>
        </div>

        {/* Front Sock */}
        <div className={`${styles.sock} ${styles.front}`}>
          <div className={styles.cuff}></div>
          <div className={styles.leg}></div>
          <div className={styles.heel}></div>
          <div className={styles.foot}></div>
          <div className={styles.toe}></div>
        </div>

        {/* Red Bow holding them together */}
        <div className={styles.bow}>
          <div className={styles.loopLeft}></div>
          <div className={styles.loopRight}></div>
          <div className={styles.knot}></div>
        </div>
      </div>
    </div>
  );
}