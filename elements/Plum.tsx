import styles from "./Plum.module.css";
import shared from "./shared.module.css";

export default function Plum() {
  return (
    <div className={shared.element}>
      <div className={styles.wrapper} role="img" aria-label="Plum">
        {/* Soft ground shadow */}
        <div className={styles.shadow}></div>
        
        {/* Stem tucked slightly behind the top edge of the body */}
        <div className={styles.stem}></div>
        
        {/* Asymmetrical organic plum body */}
        <div className={styles.plumBody}>
          {/* Top depression shadow where stem attaches */}
          <div className={styles.indent}></div>
          
          {/* Subtle natural vertical crease line */}
          <div className={styles.cleft}></div>
          
          {/* Dust/matte waxy bloom layer */}
          <div className={styles.bloom}></div>
          
          {/* Soft 3D volumetric highlight */}
          <div className={styles.matteHighlight}></div>
        </div>
      </div>
    </div>
  );
}