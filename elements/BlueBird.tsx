import styles from "./BlueBird.module.css";
import shared from "./shared.module.css";

export default function BlueBird() {
  return (
    <div className={shared.element}>
      <div className={styles.canvas} role="img" aria-label="A cute, detailed 3D-styled blue bird">
        {/* Ground shadow */}
        <div className={styles.shadow}></div>
        
        {/* Tail feathers */}
        <div className={styles.tailUpper}></div>
        <div className={styles.tailLower}></div>
        
        {/* Feet */}
        <div className={styles.footLeft}></div>
        <div className={styles.footRight}></div>
        
        {/* Main Body */}
        <div className={styles.body}>
          {/* Soft belly texture */}
          <div className={styles.belly}></div>
          
          {/* Cute rosy cheek */}
          <div className={styles.cheek}></div>
          
          {/* Eye with highlight */}
          <div className={styles.eye}>
            <div className={styles.highlight}></div>
          </div>
        </div>

        {/* Wing on top of body */}
        <div className={styles.wing}></div>

        {/* Beak pointing forward */}
        <div className={styles.beak}></div>
      </div>
    </div>
  );
}
