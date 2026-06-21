import styles from "./Surfboard.module.css";
import shared from "./shared.module.css";

export default function Surfboard() {
  return (
    <div className={shared.element} role="img" aria-label="Sleek retro surfboard">
      <div className={styles.canvas}>
        {/* Blurred drop shadow grounded under the surfboard */}
        <div className={styles.shadow}></div>

        {/* Main Surfboard Container (controls rotation/placement) */}
        <div className={styles.surfboardContainer}>
          {/* Bottom Fin behind the board */}
          <div className={styles.fin}></div>

          {/* Surfboard Body */}
          <div className={styles.board}>
            {/* Retro Colored Stripes */}
            <div className={styles.stripeTeal}></div>
            <div className={styles.stripeOrange}></div>
            <div className={styles.stripeYellow}></div>

            {/* Center Wooden Stringer */}
            <div className={styles.stringer}></div>

            {/* Glossy highlight/reflection overlay */}
            <div className={styles.gloss}></div>
          </div>
        </div>
      </div>
    </div>
  );
}