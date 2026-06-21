import styles from "./ChristmasTree.module.css";
import shared from "./shared.module.css";

export default function ChristmasTree() {
  return (
    <div className={shared.element} role="img" aria-label="Decorated Christmas Tree">
      <div className={styles.treeWrapper}>
        {/* Soft shadow at the base */}
        <div className={styles.shadow}></div>

        {/* Wooden Trunk */}
        <div className={styles.trunk}></div>

        {/* Bottom Layer of Branches */}
        <div className={`${styles.layer} ${styles.layerBottom}`}></div>

        {/* Soft shadow under Middle Layer */}
        <div className={styles.shadowMiddle}></div>

        {/* Middle Layer of Branches */}
        <div className={`${styles.layer} ${styles.layerMiddle}`}></div>

        {/* Soft shadow under Top Layer */}
        <div className={styles.shadowTop}></div>

        {/* Top Layer of Branches */}
        <div className={`${styles.layer} ${styles.layerTop}`}></div>

        {/* Garlands / Tinsel */}
        <div className={styles.garland1}></div>
        <div className={styles.garland2}></div>

        {/* Star Glow and Top Star */}
        <div className={styles.starGlow}></div>
        <div className={styles.star}></div>

        {/* Ornaments strategically scattered to overlap layers */}
        <div className={`${styles.ornament} ${styles.red}`} style={{ bottom: "10px", left: "7px" }}></div>
        <div className={`${styles.ornament} ${styles.gold}`} style={{ bottom: "12px", left: "22px" }}></div>
        <div className={`${styles.ornament} ${styles.blue}`} style={{ bottom: "10px", right: "7px" }}></div>
        <div className={`${styles.ornament} ${styles.pink}`} style={{ bottom: "20px", left: "11px" }}></div>
        <div className={`${styles.ornament} ${styles.gold}`} style={{ bottom: "20px", right: "11px" }}></div>
        <div className={`${styles.ornament} ${styles.blue}`} style={{ bottom: "22px", left: "22px" }}></div>
        <div className={`${styles.ornament} ${styles.red}`} style={{ bottom: "28px", left: "17px" }}></div>
        <div className={`${styles.ornament} ${styles.pink}`} style={{ bottom: "28px", right: "17px" }}></div>
      </div>
    </div>
  );
}