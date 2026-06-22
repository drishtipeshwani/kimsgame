import styles from "./Clove.module.css";
import shared from "./shared.module.css";

export default function Clove() {
  return (
    <div className={shared.element} role="img" aria-label="A single dried clove spice">
      <div className={styles.cloveWrapper}>
        {/* Ground shadow */}
        <div className={styles.shadow}></div>
        
        {/* The entire clove assembly, angled for realism */}
        <div className={styles.clove}>
          {/* Cylindrical stem */}
          <div className={styles.stem}></div>
          
          {/* 4 Overlapping Triangular Buds / Sepals */}
          <div className={styles.sepalBack}></div>
          <div className={styles.sepalLeft}></div>
          <div className={styles.sepalRight}></div>
          
          {/* Central spherical ball (unopened flower bud corolla) */}
          <div className={styles.corolla}></div>
          
          {/* Front overlapping bud */}
          <div className={styles.sepalFront}></div>
        </div>
      </div>
    </div>
  );
}