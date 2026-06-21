import styles from "./Crystal.module.css";
import shared from "./shared.module.css";

export default function Crystal() {
  return (
    <div className={shared.element} role="img" aria-label="Magical glowing crystal cluster">
      <div className={styles.crystalWrapper}>
        {/* Ground shadow & ambient backing glow */}
        <div className={styles.ambientGlow}></div>
        <div className={styles.shadow}></div>

        {/* Background Sparkles */}
        <div className={styles.sparkle1}></div>
        <div className={styles.sparkle2}></div>

        {/* RIGHT SHARD (Back Layer) */}
        <div className={`${styles.shard} ${styles.shardRight}`}>
          <div className={`${styles.facet} ${styles.facetLeft}`}></div>
          <div className={`${styles.facet} ${styles.facetRight}`}></div>
          <div className={`${styles.facet} ${styles.facetFront}`}></div>
        </div>

        {/* LEFT SHARD (Middle Layer) */}
        <div className={`${styles.shard} ${styles.shardLeft}`}>
          <div className={`${styles.facet} ${styles.facetLeft}`}></div>
          <div className={`${styles.facet} ${styles.facetRight}`}></div>
          <div className={`${styles.facet} ${styles.facetFront}`}></div>
        </div>

        {/* MAIN SHARD (Front & Center Layer) */}
        <div className={`${styles.shard} ${styles.shardMain}`}>
          <div className={`${styles.facet} ${styles.facetLeft}`}></div>
          <div className={`${styles.facet} ${styles.facetRight}`}></div>
          <div className={`${styles.facet} ${styles.facetFront}`}></div>
          {/* Specular apex glow */}
          <div className={styles.apexGlow}></div>
        </div>
      </div>
    </div>
  );
}