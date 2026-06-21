import styles from "./Honeybee.module.css";
import shared from "./shared.module.css";

export default function Honeybee() {
  return (
    <div className={shared.element}>
      <div 
        className={styles.wrapper} 
        role="img" 
        aria-label="A small, cute honeybee hovering in the air"
      >
        {/* Ground shadow representing flight height */}
        <div className={styles.shadow}></div>
        
        {/* Hovering container of the bee */}
        <div className={styles.bee}>
          {/* Legs */}
          <div className={styles.legBack}></div>
          <div className={styles.legFront}></div>
          
          {/* Stinger */}
          <div className={styles.stinger}></div>
          
          {/* Striped Body with highlight */}
          <div className={styles.body}>
            <div className={styles.bodyHighlight}></div>
          </div>
          
          {/* Head & Eye */}
          <div className={styles.head}>
            <div className={styles.eye}></div>
          </div>
          
          {/* Wings - split into back and front for depth */}
          <div className={styles.wingBack}></div>
          <div className={styles.wingFront}></div>
        </div>
      </div>
    </div>
  );
}