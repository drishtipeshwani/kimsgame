import styles from "./CoffeeMug.module.css";
import shared from "./shared.module.css";

export default function Mug() {
  return (
    <div className={shared.element}>
      <div className={styles.mugWrapper}>
        {/* Soft shadow under the mug */}
        <div className={styles.shadow}></div>
        
        {/* Wavy steam lines */}
        <div className={styles.steam1}></div>
        <div className={styles.steam2}></div>
        <div className={styles.steam3}></div>
        
        {/* Mug Handle */}
        <div className={styles.handle}></div>
        
        {/* Main Body */}
        <div className={styles.body}>
          {/* Top Opening/Rim */}
          <div className={styles.topRim}>
            {/* Liquid inside */}
            <div className={styles.coffee}>
              {/* Glossy reflection on the liquid */}
              <div className={styles.reflection}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
