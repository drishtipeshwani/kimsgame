import styles from "./OrangeSlice.module.css";
import shared from "./shared.module.css";

export default function OrangeSlice() {
  return (
    <div className={shared.element} role="img" aria-label="Realistic Orange Slice">
      <div className={styles.sliceWrapper}>
        {/* Drop Shadow */}
        <div className={styles.shadow}></div>

        {/* Outer Rind (Peel) */}
        <div className={styles.rind}>
          {/* Off-white Pith Layer */}
          <div className={styles.pith}>
            {/* 8 Pulp Segments */}
            <div className={styles.segment} style={{ transform: "rotate(0deg)" }} />
            <div className={styles.segment} style={{ transform: "rotate(45deg)" }} />
            <div className={styles.segment} style={{ transform: "rotate(90deg)" }} />
            <div className={styles.segment} style={{ transform: "rotate(135deg)" }} />
            <div className={styles.segment} style={{ transform: "rotate(180deg)" }} />
            <div className={styles.segment} style={{ transform: "rotate(225deg)" }} />
            <div className={styles.segment} style={{ transform: "rotate(270deg)" }} />
            <div className={styles.segment} style={{ transform: "rotate(315deg)" }} />

            {/* Center Core */}
            <div className={styles.centerCore}></div>
            
            {/* Glossy Juice Reflections */}
            <div className={styles.gloss}></div>
            <div className={styles.sparkle}></div>
          </div>
        </div>
      </div>
    </div>
  );
}