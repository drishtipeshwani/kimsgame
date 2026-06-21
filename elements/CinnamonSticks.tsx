import styles from "./CinnamonSticks.module.css";
import shared from "./shared.module.css";

export default function CinnamonSticks() {
  return (
    <div className={shared.element}>
      <div className={styles.canvas} role="img" aria-label="Cinnamon Sticks">
        {/* Ground shadow beneath the sticks */}
        <div className={styles.groundShadow}></div>

        {/* Back Cinnamon Stick (Stick 1) */}
        <div className={`${styles.stick} ${styles.stickBack}`}>
          <div className={styles.barkBody}>
            <div className={styles.textureLine1}></div>
            <div className={styles.textureLine2}></div>
          </div>
          <div className={styles.topRoll}>
            <div className={styles.spiral1}></div>
            <div className={styles.spiral2}></div>
          </div>
          <div className={styles.bottomRoll}></div>
        </div>

        {/* Front Cinnamon Stick (Stick 2) */}
        <div className={`${styles.stick} ${styles.stickFront}`}>
          {/* Shadow cast from Stick 2 onto Stick 1 */}
          <div className={styles.castShadow}></div>
          <div className={styles.barkBody}>
            <div className={styles.textureLine1}></div>
            <div className={styles.textureLine2}></div>
          </div>
          <div className={styles.topRoll}>
            <div className={styles.spiral1}></div>
            <div className={styles.spiral2}></div>
          </div>
          <div className={styles.bottomRoll}></div>
        </div>
      </div>
    </div>
  );
}