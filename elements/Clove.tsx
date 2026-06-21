import styles from "./Clove.module.css";
import shared from "./shared.module.css";

export default function Clove() {
  return (
    <div className={shared.element}>
      <div className={styles.cloveWrapper} role="img" aria-label="Garlic Clove">
        {/* Diffused floor shadow */}
        <div className={styles.shadow}></div>
        
        {/* Main Clove Container */}
        <div className={styles.clove}> 
          {/* Root pad attachment */}
          <div className={styles.root}></div>
          
          {/* Main plump body */}
          <div className={styles.body}>
            {/* Papery striations */}
            <div className={styles.stripe1}></div>
            <div className={styles.stripe2}></div>
            {/* Glossy highlight overlay */}
            <div className={styles.highlight}></div>
          </div>
          
          {/* Pointy dried tip */}
          <div className={styles.tip}></div>
          <div className={styles.tipDetail}></div>
        </div>
      </div>
    </div>
  );
}