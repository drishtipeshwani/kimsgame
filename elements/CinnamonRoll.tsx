import styles from './CinnamonRoll.module.css';
import shared from "./shared.module.css";

export default function CinnamonRoll() {
  return (
    <div className={shared.element}>
      <div 
        className={styles.rollWrapper} 
        role="img" 
        aria-label="A delicious freshly baked cinnamon roll"
      >
        {/* Soft floor shadow beneath the roll */}
        <div className={styles.shadow}></div>

        {/* Main Bun Body & Layers */}
        <div className={styles.bunBase}>
          {/* Outer Cinnamon Swirl */}
          <div className={styles.swirlOuter}></div>
          
          {/* Middle Dough Ring */}
          <div className={styles.doughMiddle}></div>
          
          {/* Inner Cinnamon Swirl */}
          <div className={styles.swirlInner}></div>
          
          {/* Center Dough Core */}
          <div className={styles.doughCenter}></div>
        </div>
      </div>
    </div>
  );
}