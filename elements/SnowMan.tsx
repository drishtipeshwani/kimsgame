import styles from "./SnowMan.module.css";
import shared from "./shared.module.css";

export default function SnowMan() {
  return (
    <div className={shared.element}>
      <div className={styles.snowmanWrapper} role="img" aria-label="A realistic 3D Snowman with a top hat and red scarf">
        {/* Ground shadow */}
        <div className={styles.groundShadow}></div>
        
        {/* Branch Arms */}
        <div className={styles.leftArm}></div>
        <div className={styles.rightArm}></div>
        
        {/* Bottom snowball */}
        <div className={styles.bottomBall}></div>
        
        {/* Middle snowball & buttons */}
        <div className={styles.middleBall}>
          <div className={styles.button1}></div>
          <div className={styles.button2}></div>
        </div>
        
        {/* Scarf Tail (behind head, over chest) */}
        <div className={styles.scarfTail}></div>
        
        {/* Scarf Neck band */}
        <div className={styles.scarfNeck}></div>
        
        {/* Head with eyes and carrot nose */}
        <div className={styles.head}>
          <div className={styles.eyeLeft}></div>
          <div className={styles.eyeRight}></div>
          <div className={styles.nose}></div>
        </div>
        
        {/* Top Hat */}
        <div className={styles.hatBrim}></div>
        <div className={styles.hatCrown}></div>
        <div className={styles.hatBand}></div>
      </div>
    </div>
  );
}