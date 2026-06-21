import styles from "./Jar.module.css";
import shared from "./shared.module.css";

export default function Jar() {
  return (
    <div className={shared.element} role="img" aria-label="A realistic glass jar filled with golden honey">
      <div className={styles.jarWrapper}>
        {/* Ground shadow */}
        <div className={styles.shadow}></div>
        
        {/* Glass Body container */}
        <div className={styles.body}>
          {/* Liquid content (Honey) */}
          <div className={styles.content}></div>
          
          {/* Glass glare and highlight */}
          <div className={styles.glassHighlight}></div>
          <div className={styles.glassReflection}></div>
          
          {/* Front Label */}
          <div className={styles.label}>
            <div className={styles.labelPattern}></div>
          </div>
        </div>

        {/* Neck of the jar */}
        <div className={styles.neck}></div>

        {/* Metallic Lid */}
        <div className={styles.lid}>
          <div className={styles.lidRidge}></div>
        </div>
      </div>
    </div>
  );
}
