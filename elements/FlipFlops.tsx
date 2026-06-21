import styles from "./FlipFlops.module.css";
import shared from "./shared.module.css";

export default function FlipFlops() {
  return (
    <div className={shared.element}>
      <div 
        className={styles.wrapper} 
        role="img" 
        aria-label="A pair of colorful beach flip flops"
      >
        {/* Soft ground shadow */}
        <div className={styles.shadow}></div>

        {/* Left Flip Flop */}
        <div className={`${styles.flipFlop} ${styles.left}`}>
          <div className={`${styles.sole} ${styles.soleLeft}`}>
            <div className={styles.stripePattern}></div>
            <div className={styles.innerRim}></div>
          </div>
          <div className={`${styles.strap} ${styles.strapLeftOuter}`}></div>
          <div className={`${styles.strap} ${styles.strapLeftInner}`}></div>
          <div className={`${styles.toePost} ${styles.toePostLeft}`}></div>
        </div>

        {/* Right Flip Flop */}
        <div className={`${styles.flipFlop} ${styles.right}`}>
          <div className={`${styles.sole} ${styles.soleRight}`}>
            <div className={styles.stripePattern}></div>
            <div className={styles.innerRim}></div>
          </div>
          <div className={`${styles.strap} ${styles.strapRightInner}`}></div>
          <div className={`${styles.strap} ${styles.strapRightOuter}`}></div>
          <div className={`${styles.toePost} ${styles.toePostRight}`}></div>
        </div>
      </div>
    </div>
  );
}