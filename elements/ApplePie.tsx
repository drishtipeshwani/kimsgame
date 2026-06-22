import styles from "./ApplePie.module.css";
import shared from "./shared.module.css";

export default function ApplePie() {
  return (
    <div className={shared.element} role="img" aria-label="A freshly baked hot apple pie in a red ceramic dish">
      <div className={styles.pieWrapper}>
        {/* Hot Rising Steam */}
        <div className={styles.steamLeft}></div>
        <div className={styles.steamRight}></div>

        {/* Under-dish Shadow */}
        <div className={styles.dishShadow}></div>

        {/* Ceramic Pie Dish Outer Bottom */}
        <div className={styles.dishBase}></div>

        {/* Ceramic Rim of the Dish */}
        <div className={styles.dishRim}>
          {/* Scalloped Crust Edge (Crimped Crust) */}
          <div className={styles.scallopContainer}>
            <div className={`${styles.scallop} ${styles.s1}`}></div>
            <div className={`${styles.scallop} ${styles.s2}`}></div>
            <div className={`${styles.scallop} ${styles.s3}`}></div>
            <div className={`${styles.scallop} ${styles.s4}`}></div>
            <div className={`${styles.scallop} ${styles.s5}`}></div>
            <div className={`${styles.scallop} ${styles.s6}`}></div>
            <div className={`${styles.scallop} ${styles.s7}`}></div>
            <div className={`${styles.scallop} ${styles.s8}`}></div>
            <div className={`${styles.scallop} ${styles.s9}`}></div>
            <div className={`${styles.scallop} ${styles.s10}`}></div>
          </div>

          {/* Main Pie Inner Surface (Crust Base & Filling) */}
          <div className={styles.crustBase}>
            <div className={styles.fillingContainer}>
              {/* Delicious Amber Apple Filling Background */}
              <div className={styles.filling}></div>

              {/* Horizontal Lattice Strips */}
              <div className={`${styles.lattice} ${styles.horizontal} ${styles.h1}`}></div>
              <div className={`${styles.lattice} ${styles.horizontal} ${styles.h2}`}></div>
              <div className={`${styles.lattice} ${styles.horizontal} ${styles.h3}`}></div>

              {/* Vertical Lattice Strips */}
              <div className={`${styles.lattice} ${styles.vertical} ${styles.v1}`}></div>
              <div className={`${styles.lattice} ${styles.vertical} ${styles.v2}`}></div>
              <div className={`${styles.lattice} ${styles.vertical} ${styles.v3}`}></div>

              {/* Glossy Glaze Highlight */}
              <div className={styles.glazeHighlight}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}