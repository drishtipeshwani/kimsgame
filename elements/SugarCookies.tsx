import styles from "./SugarCookies.module.css";
import shared from "./shared.module.css";

export default function SugarCookies() {
  return (
    <div className={shared.element}>
      <div className={styles.wrapper} role="img" aria-label="Sugar Cookies with pink frosting and sprinkles">
        {/* Soft ground shadow */}
        <div className={styles.groundShadow}></div>

        {/* Back Cookie */}
        <div className={styles.backCookie}></div>

        {/* Front Cookie */}
        <div className={styles.frontCookie}>
          {/* Creamy Pink Frosting */}
          <div className={styles.icing}>
            {/* Frosting Highlight */}
            <div className={styles.glazeHighlight}></div>
            
            {/* Sprinkles */}
            <div className={`${styles.sprinkle} ${styles.sprinkleWhite}`} style={{ top: "6px", left: "12px", transform: "rotate(15deg)" }}></div>
            <div className={`${styles.sprinkle} ${styles.sprinkleBlue}`} style={{ top: "10px", left: "6px", transform: "rotate(-45deg)" }}></div>
            <div className={`${styles.sprinkle} ${styles.sprinkleYellow}`} style={{ top: "16px", left: "10px", transform: "rotate(30deg)" }}></div>
            <div className={`${styles.sprinkle} ${styles.sprinkleGreen}`} style={{ top: "8px", left: "18px", transform: "rotate(110deg)" }}></div>
            <div className={`${styles.sprinkle} ${styles.sprinkleWhite}`} style={{ top: "15px", left: "18px", transform: "rotate(-20deg)" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}