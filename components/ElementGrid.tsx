import type { ElementMeta } from "@/lib/elementRegistry";
import styles from "./ElementGrid.module.css";

type ElementGridProps = {
  elements: ElementMeta[];
};

export default function ElementGrid({ elements }: ElementGridProps) {
  // We can safely render empty cells to maintain the grid structure if there are fewer elements
  return (
    <ul className={styles.grid}>
      {elements.map((element) => {
        const { Component } = element;
        return (
          <li key={element.id} className={styles.cell}>
            <div className={styles.icon}>
              <Component />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
