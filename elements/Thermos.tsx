import styles from "./Thermos.module.css";
import shared from "./shared.module.css";

export default function Thermos() {
  return (
    <div className={shared.element} role="img" aria-label="Thermos Vacuum Flask">
      <div className={styles.thermosWrapper}>
        {/* Soft Drop Shadow */}
        <div className={styles.shadow}></div>
        
        {/* Carrying Strap/Loop */}
        <div className={styles.strap}></div>
        
        {/* Rugged Bottom Base */}
        <div className={styles.base}></div>
        
        {/* Main Insulated Body */}
        <div className={styles.body}>
          {/* Sporty Accent Stripe */}
          <div className={styles.stripe}></div>
          {/* Vertical Body Highlight/Gloss */}
          <div className={styles.bodyHighlight}></div>
        </div>
        
        {/* Sleek Tapered Shoulder */}
        <div className={styles.shoulder}></div>
        
        {/* Polished Steel Collar/Neck Ring */}
        <div className={styles.collar}></div>
        
        {/* Metallic Insulated Lid/Cup */}
        <div className={styles.cap}>
          <div className={styles.capHighlight}></div>
          <div className={styles.capRidge}></div>
        </div>
      </div>
    </div>
  );
}