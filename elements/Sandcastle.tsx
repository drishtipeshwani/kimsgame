import styles from './Sandcastle.module.css';
import shared from './shared.module.css';

export default function Sandcastle() {
  return (
    <div className={shared.element}>
      <div className={styles.sandcastleWrapper} role="img" aria-label="Sandcastle">
        {/* Sandy Base / Mound */}
        <div className={styles.sandMound}></div>
        <div className={styles.sandMoundFront}></div>

        {/* Connecting Walls */}
        <div className={styles.connectingWall}></div>

        {/* Left Tower & Cone Roof */}
        <div className={styles.leftTower}>
          <div className={styles.leftRoof}></div>
          <div className={styles.window}></div>
        </div>

        {/* Right Tower & Cone Roof */}
        <div className={styles.rightTower}>
          <div className={styles.rightRoof}></div>
          <div className={styles.window}></div>
        </div>

        {/* Center Keep / Main Tower */}
        <div className={styles.centerKeep}>
          {/* Battlements / Crenelations on top */}
          <div className={styles.battlements}></div>
          {/* Arched Gate */}
          <div className={styles.gate}></div>
        </div>

        {/* Flagpole and Flag on Center Keep */}
        <div className={styles.flagpole}>
          <div className={styles.flag}></div>
        </div>
      </div>
    </div>
  );
}