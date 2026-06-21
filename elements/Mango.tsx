import styles from "./Mango.module.css";
import shared from "./shared.module.css";

export default function Mango() {
  return (
    <div className={shared.element}>
      <div 
        className={styles.mangoWrapper} 
        role="img" 
        aria-label="A realistic ripe mango with a leaf"
      >
        {/* Grounding drop shadow */}
        <div className={styles.shadow}></div>
        
        {/* Stem structure */}
        <div className={styles.stem}></div>

        {/* Organic green leaf */}
        <div className={styles.leaf}>
          <div className={styles.leafVein}></div>
        </div>

        {/* Main Mango Body */}
        <div className={styles.mangoBody}>
          {/* Soft glossy reflection/highlight on the skin */}
          <div className={styles.highlight}></div>
          {/* Subtle blush gradient overlay to enhance depth */}
          <div className={styles.blush}></div>
        </div>
      </div>
    </div>
  );
}