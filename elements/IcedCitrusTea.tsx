import styles from "./IcedCitrusTea.module.css";
import shared from "./shared.module.css";

export default function IcedCitrusTea() {
  return (
    <div className={shared.element} role="img" aria-label="Iced Citrus Tea">
      <div className={styles.wrapper}>
        {/* Drop shadow under the glass */}
        <div className={styles.shadow}></div>

        {/* Straw in the background of the liquid */}
        <div className={styles.straw}></div>

        {/* Glass back layer */}
        <div className={styles.glassBack}>
          {/* Rich citrus tea liquid */}
          <div className={styles.liquid}>
            {/* Top liquid surface ellipse */}
            <div className={styles.liquidSurface}></div>
            
            {/* Translucent ice cubes floating */}
            <div className={styles.iceCube1}></div>
            <div className={styles.iceCube2}></div>
          </div>
        </div>

        {/* Citrus slice wedged on the rim */}
        <div className={styles.citrusSlice}>
          <div className={styles.rind}></div>
          <div className={styles.pith}></div>
          <div className={styles.segment1}></div>
          <div className={styles.segment2}></div>
          <div className={styles.segment3}></div>
        </div>

        {/* Fresh mint leaf garnish */}
        <div className={styles.mintLeaf}></div>

        {/* Glass front reflections and highlights to give shine and depth */}
        <div className={styles.glassFront}>
          <div className={styles.rim}></div>
          <div className={styles.highlightLeft}></div>
          <div className={styles.highlightRight}></div>
        </div>
      </div>
    </div>
  );
}
