import styles from "./StoryBook.module.css";
import shared from "./shared.module.css";

export default function StoryBook() {
  return (
    <div className={shared.element} role="img" aria-label="Magical Story Book">
      <div className={styles.bookWrapper}>
        {/* Soft base shadow under the book */}
        <div className={styles.shadow}></div>
        
        {/* Magical floating glow/sparkles rising from the book */}
        <div className={styles.sparkle1}></div>
        <div className={styles.sparkle2}></div>
        <div className={styles.sparkle3}></div>
        
        {/* Ribbon bookmark hanging from the bottom */}
        <div className={styles.ribbon}></div>
        
        {/* Hardcover Backing (peeking out) */}
        <div className={styles.coverLeft}></div>
        <div className={styles.coverRight}></div>
        
        {/* Left Page (curved with faux text lines) */}
        <div className={styles.pageLeft}>
          <div className={styles.textLine1}></div>
          <div className={styles.textLine2}></div>
          <div className={styles.textLine3}></div>
        </div>
        
        {/* Right Page (curved with faux text lines and illustration placeholder) */}
        <div className={styles.pageRight}>
          <div className={styles.illustration}></div>
          <div className={styles.textLine4}></div>
          <div className={styles.textLine5}></div>
        </div>
        
        {/* Book Spine / Center shadow crease */}
        <div className={styles.spine}></div>
      </div>
    </div>
  );
}
