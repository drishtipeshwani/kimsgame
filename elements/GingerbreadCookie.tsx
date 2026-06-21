import styles from "./GingerbreadCookie.module.css";
import shared from "./shared.module.css";

export default function GingerbreadCookie() {
  return (
    <div className={shared.element} role="img" aria-label="Gingerbread Cookie">
      <div className={styles.cookieWrapper}>
        {/* Drop shadow on the surface */}
        <div className={styles.shadow}></div>

        {/* Left Arm */}
        <div className={styles.armLeft}>
          <div className={styles.icingArm}></div>
        </div>

        {/* Right Arm */}
        <div className={styles.armRight}>
          <div className={styles.icingArm}></div>
        </div>

        {/* Left Leg */}
        <div className={styles.legLeft}>
          <div className={styles.icingLeg}></div>
        </div>

        {/* Right Leg */}
        <div className={styles.legRight}>
          <div className={styles.icingLeg}></div>
        </div>

        {/* Torso / Body */}
        <div className={styles.torso}>
          {/* Candy Buttons */}
          <div className={styles.buttonRed}></div>
          <div className={styles.buttonGreen}></div>
        </div>

        {/* Head and Face Details */}
        <div className={styles.head}>
          <div className={styles.eyeLeft}></div>
          <div className={styles.eyeRight}></div>
          <div className={styles.blushLeft}></div>
          <div className={styles.blushRight}></div>
          <div className={styles.smile}></div>
        </div>
      </div>
    </div>
  );
}