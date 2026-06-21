import styles from "./PicnicBasket.module.css";
import shared from "./shared.module.css";

export default function PicnicBasket() {
  return (
    <div className={shared.element}>
      <div 
        className={styles.basketWrapper} 
        role="img" 
        aria-label="A cute, realistic miniature picnic basket with a checkered red-and-white cloth draping over the side"
      >
        {/* Ground shadow */}
        <div className={styles.shadow}></div>
        
        {/* Basket Handle */}
        <div className={styles.handle}></div>
        <div className={styles.handleJointLeft}></div>
        <div className={styles.handleJointRight}></div>

        {/* Basket Lid (split lids showing behind the rim) */}
        <div className={styles.lidLeft}></div>
        <div className={styles.lidRight}></div>

        {/* Gingham Picnic Cloth draping out */}
        <div className={styles.ginghamCloth}>
          <div className={styles.clothFold1}></div>
          <div className={styles.clothFold2}></div>
        </div>

        {/* Main Basket Body with wicker texture */}
        <div className={styles.body}>
          <div className={styles.weaveHorizontal}></div>
          <div className={styles.weaveVertical}></div>
        </div>

        {/* Basket Rim */}
        <div className={styles.rim}></div>
      </div>
    </div>
  );
}
