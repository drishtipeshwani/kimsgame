import styles from './PicnicBasket.module.css';
import shared from './shared.module.css';

export default function PicnicBasket() {
  return (
    <div className={shared.element} role="img" aria-label="Picnic Basket">
      <div className={styles.basketWrapper}>
        {/* Drop Shadow below the basket */}
        <div className={styles.shadow}></div>
        
        {/* Woven Overhead Handle */}
        <div className={styles.handle}></div>
        <div className={styles.handleMountLeft}></div>
        <div className={styles.handleMountRight}></div>

        {/* Twin Lids (Left & Right Flaps) */}
        <div className={styles.lidLeft}></div>
        <div className={styles.lidRight}></div>

        {/* Outer Rim / Basket Collar */}
        <div className={styles.rim}></div>

        {/* Main Basket Body with Woven Mesh Texture */}
        <div className={styles.body}></div>
      </div>
    </div>
  );
}