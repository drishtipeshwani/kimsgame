import styles from "./Squirrel.module.css";
import shared from "./shared.module.css";

export default function Squirrel() {
  return (
    <div className={shared.element}>
      <div 
        className={styles.squirrelWrapper} 
        role="img" 
        aria-label="A cute, detailed miniature CSS art of a ginger squirrel holding a tiny acorn"
      >
        {/* Soft ground shadow */}
        <div className={styles.shadow}></div>

        {/* Back Tail Layer (For 3D depth) */}
        <div className={styles.tailBack}></div>

        {/* Main Fluffy Tail */}
        <div className={styles.tailFront}>
          <div className={styles.tailDetail}></div>
        </div>

        {/* Back Ear */}
        <div className={styles.earBack}></div>

        {/* Body & Belly */}
        <div className={styles.body}>
          <div className={styles.belly}></div>
        </div>

        {/* Back Foot */}
        <div className={styles.footBack}></div>

        {/* Front Foot */}
        <div className={styles.footFront}></div>

        {/* Head and Face Features */}
        <div className={styles.head}>
          {/* Front Ear */}
          <div className={styles.earFront}>
            <div className={styles.innerEar}></div>
          </div>
          {/* Eye with highlight */}
          <div className={styles.eye}>
            <div className={styles.highlight}></div>
          </div>
          {/* Snout & Nose */}
          <div className={styles.snout}></div>
          <div className={styles.nose}></div>
        </div>

        {/* Acorn */}
        <div className={styles.acorn}>
          <div className={styles.acornStem}></div>
          <div className={styles.acornCap}></div>
          <div className={styles.acornNut}></div>
        </div>

        {/* Tiny Arm holding the acorn */}
        <div className={styles.arm}></div>
      </div>
    </div>
  );
}