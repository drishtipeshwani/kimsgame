import styles from "./Sunglasses.module.css";
import shared from "./shared.module.css";

export default function Sunglasses() {
  return (
    <div className={shared.element} role="img" aria-label="Stylish Sunglasses">
      <div className={styles.wrapper}>
        <div className={styles.shadow}></div>
        <div className={styles.templeLeft}></div>
        <div className={styles.templeRight}></div>
        <div className={styles.glassesBody}>
          <div className={styles.leftFrame}>
            <div className={styles.stud}></div>
            <div className={styles.lens}>
              <div className={styles.glare}></div>
            </div>
          </div>
          <div className={styles.bridge}></div>
          <div className={styles.rightFrame}>
            <div className={styles.stud}></div>
            <div className={styles.lens}>
              <div className={styles.glare}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}