import styles from "./Surfboard.module.css";
import shared from "./shared.module.css";

export default function Surfboard() {
  return (
    <div className={shared.element}>
      <div 
        className={styles.wrapper} 
        role="img" 
        aria-label="A realistic retro surfboard slanted downwards"
      >
        {/* Soft floating shadow underneath */}
        <div className={styles.shadow}></div>
        
        {/* Main Surfboard Body */}
        <div className={styles.boardBody}>
          {/* Colored Retro Stripe Decals */}
          <div className={styles.stripeOrange}></div>
          <div className={styles.stripeYellow}></div>
          
          {/* Wooden Stringer (Center Spine) */}
          <div className={styles.stringer}></div>
          
          {/* Tail Grip Pad */}
          <div className={styles.gripPad}></div>
          
          {/* Leash Plug */}
          <div className={styles.leashPlug}></div>
          
          {/* Glossy Fiberglass Reflection */}
          <div className={styles.gloss}></div>
        </div>
      </div>
    </div>
  );
}