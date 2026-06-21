import styles from "./Lemons.module.css";
import shared from "./shared.module.css";

export default function Lemons() {
  return (
    <div className={shared.element}>
      <div 
        className={styles.lemonsWrapper} 
        role="img" 
        aria-label="A realistic fresh whole lemon with a glossy cut slice and a green leaf"
      >
        {/* Soft realistic floor shadow */}
        <div className={styles.shadow}></div>
        
        {/* Green Leaf peaking from behind */}
        <div className={styles.leaf}></div>
        
        {/* Whole Lemon in the background */}
        <div className={styles.wholeLemon}>
          {/* Texture & Highlight overlay */}
          <div className={styles.lemonHighlight}></div>
          <div className={styles.nodeLeft}></div>
          <div className={styles.nodeRight}></div>
        </div>

        {/* Juicy Lemon Slice in the foreground */}
        <div className={styles.sliceRind}>
          <div className={styles.slicePith}>
            <div className={styles.slicePulp}>
              {/* Shiny glint on the wet pulp */}
              <div className={styles.glint}></div>
              {/* Core pith center */}
              <div className={styles.core}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}