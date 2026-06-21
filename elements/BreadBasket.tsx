import styles from "./BreadBasket.module.css";
import shared from "./shared.module.css";

export default function BreadBasket() {
  return (
    <div className={shared.element} role="img" aria-label="A basket filled with fresh bread">
      <div className={styles.basketWrapper}>
        {/* Soft Drop Shadow */}
        <div className={styles.shadow}></div>

        {/* Inside/Back of Basket */}
        <div className={styles.basketBack}></div>

        {/* Gingham Checkered Napkin */}
        <div className={styles.napkin}></div>

        {/* Sourdough Round Loaf (Back Left) */}
        <div className={styles.sourdough}>
          <div className={styles.sourdoughDust}></div>
        </div>

        {/* Baguette (Tilted Right) */}
        <div className={styles.baguette}>
          <div className={styles.score1}></div>
          <div className={styles.score2}></div>
          <div className={styles.score3}></div>
        </div>

        {/* Croissant / Small Roll (Front Left) */}
        <div className={styles.croissant}></div>

        {/* Basket Front (Woven Texture) */}
        <div className={styles.basketFront}></div>

        {/* Basket Rim (Adds 3D overlap) */}
        <div className={styles.basketRim}></div>
      </div>
    </div>
  );
}
