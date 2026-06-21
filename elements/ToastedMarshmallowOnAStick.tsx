import styles from "./ToastedMarshmallowOnAStick.module.css";
import shared from "./shared.module.css";

export default function ToastedMarshmallowOnAStick() {
  return (
    <div className={shared.element}>
      <div 
        className={styles.wrapper} 
        role="img" 
        aria-label="Toasted marshmallow on a stick"
      >
        {/* Ground Drop Shadow */}
        <div className={styles.shadow}></div>
        
        {/* Heat / Steam waves rising */}
        <div className={styles.steam}></div>

        {/* Tilted assembly containing stick and marshmallow */}
        <div className={styles.container}>
          {/* Wooden Stick */}
          <div className={styles.stick}>
            <div className={styles.stickShade}></div>
          </div>

          {/* Marshmallow Body */}
          <div className={styles.marshmallow}>
            {/* Creamy, gooey bottom drip */}
            <div className={styles.drip}></div>
            
            {/* Main cylindrical body */}
            <div className={styles.body}>
              {/* Flame-toasted caramelized gradients & char spots */}
              <div className={styles.toastedGradient}></div>
              <div className={styles.charSpot1}></div>
              <div className={styles.charSpot2}></div>
            </div>

            {/* Top surface of the cylinder showing 3D perspective */}
            <div className={styles.topSurface}>
              <div className={styles.topToasted}></div>
            </div>
            
            {/* Stick tip piercing through the top slightly */}
            <div className={styles.stickTip}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
