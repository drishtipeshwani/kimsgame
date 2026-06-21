import styles from './CinnamonRoll.module.css';
import shared from './shared.module.css';

export default function CinnamonRoll() {
  return (
    <div className={shared.element} role="img" aria-label="Cinnamon Roll">
      <div className={styles.rollWrapper}>
        {/* Soft shadow beneath the pastry */}
        <div className={styles.shadow}></div>
        
        {/* Outer Pastry Layer */}
        <div className={styles.pastryBase}>
          {/* Outer Spiral Crevice */}
          <div className={styles.spiralOuter}></div>
          
          {/* Middle Pastry Layer */}
          <div className={styles.pastryMiddle}>
            {/* Middle Spiral Crevice */}
            <div className={styles.spiralMiddle}></div>
            
            {/* Inner Pastry Layer */}
            <div className={styles.pastryInner}>
              {/* Center Core */}
              <div className={styles.pastryCenter}></div>
            </div>
          </div>
        </div>

        {/* Melted Frosting Layers */}
        <div className={styles.frostingBack}></div>
        <div className={styles.frostingMain}></div>
        <div className={styles.frostingDrip}></div>
        <div className={styles.frostingCenter}></div>

        {/* Cinnamon Powder Dusting */}
        <div className={styles.cinnamonDust1}></div>
        <div className={styles.cinnamonDust2}></div>
      </div>
    </div>
  );
}