import styles from "./TeaBag.module.css";
import shared from "./shared.module.css";

export default function TeaBag() {
  return (
    <div className={shared.element}>
      <div 
        className={styles.wrapper} 
        role="img" 
        aria-label="Translucent tea bag with dark tea leaves, string, and tag"
      >
        {/* Ground shadow */}
        <div className={styles.shadow}></div>
        
        {/* Tea Tag */}
        <div className={styles.tag}>
          <div className={styles.tagDesign}></div>
        </div>

        {/* Curved String */}
        <div className={styles.string}></div>

        {/* Tea Bag Main Body Container */}
        <div className={styles.bagContainer}>
          {/* Dark Tea Leaves Inside */}
          <div className={styles.teaLeaves}></div>
          
          {/* Translucent Paper Texture / Overlay */}
          <div className={styles.paperBody}></div>
          
          {/* Folded Top */}
          <div className={styles.topFold}></div>
          
          {/* Staple */}
          <div className={styles.staple}></div>
        </div>
      </div>
    </div>
  );
}