import styles from './ApplePie.module.css';
import shared from "./shared.module.css";

export default function ApplePie() {
  return (
    <div className={shared.element}>
      <div 
        className={styles.pieWrapper} 
        role="img" 
        aria-label="A golden-brown baked apple pie in a tin pan"
      >
        {/* Soft shadow under the tin */}
        <div className={styles.shadow}></div>
        
        {/* Silver Pie Pan */}
        <div className={styles.pan}></div>

        {/* Scalloped/Crimped Crust Edge */}
        <div className={styles.crimpContainer}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={styles.crimp}
              style={{ transform: `rotate(${i * 30}deg) translate(0, -17px)` }}
            />
          ))}
        </div>

        {/* Main Baked Crust Surface */}
        <div className={styles.crustSurface}>
          {/* Subtle scoring line around center */}
          <div className={styles.crustDetail}></div>

          {/* Caramelized Apple Steam Vents */}
          <div className={styles.ventContainer}>
            <div className={styles.ventCenter}></div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={styles.vent}
                style={{ transform: `rotate(${i * 72}deg) translate(0, -4px)` }}
              />
            ))}
          </div>

          {/* Decorative Pastry Leaf on top */}
          <div className={styles.pastryLeaf}></div>

          {/* Sweet Glaze Highlight */}
          <div className={styles.glaze}></div>
        </div>
      </div>
    </div>
  );
}