import styles from "./Book.module.css";
import shared from "./shared.module.css";

export default function Book() {
  return (
    <div className={shared.element} role="img" aria-label="Semi-open 3D Book">
      <div className={styles.bookWrapper}>
        {/* Soft bottom shadow under the book */}
        <div className={styles.shadow}></div>

        {/* The ribbon bookmark hanging out from the bottom */}
        <div className={styles.ribbon}></div>

        {/* The hardback book cover (crimson leather texture with slight golden corner hints) */}
        <div className={styles.cover}></div>

        {/* Page stack depth effect (simulating multiple pages underneath) */}
        <div className={styles.pageStackLeft}></div>
        <div className={styles.pageStackRight}></div>

        {/* Left main open page with simulated curved surface */}
        <div className={styles.pageLeft}>
          <div className={styles.textLineShort}></div>
          <div className={styles.textLineLong}></div>
          <div className={styles.textLineMedium}></div>
          <div className={styles.textLineLong}></div>
        </div>

        {/* Right main open page */}
        <div className={styles.pageRight}>
          <div className={styles.textLineLong}></div>
          <div className={styles.textLineMedium}></div>
          <div className={styles.textLineLong}></div>
          <div className={styles.textLineShort}></div>
        </div>

        {/* Spine crease shadow for 3D depth */}
        <div className={styles.spineCrease}></div>
      </div>
    </div>
  );
}