import { forwardRef } from "react";

import styles from "./FolderButton.module.css";

type FolderButtonProps = {
  label: string;
  onClick: () => void;
  size?: "default" | "large";
  active?: boolean;
  ariaLabel?: string;
  ariaExpanded?: boolean;
};

const FolderButton = forwardRef<HTMLButtonElement, FolderButtonProps>(
  function FolderButton(
    {
      label,
      onClick,
      size = "default",
      active = false,
      ariaLabel,
      ariaExpanded,
    },
    ref
  ) {
    return (
      <button
        ref={ref}
        type="button"
        className={`${styles.button} ${size === "large" ? styles.large : ""} ${
          active ? styles.buttonActive : ""
        }`}
        onClick={onClick}
        aria-label={ariaLabel ?? label}
        aria-pressed={active || undefined}
        aria-expanded={ariaExpanded}
      >
        <span className={styles.iconWrap} aria-hidden="true">
          <span className={styles.tab} />
          <span className={styles.body} />
        </span>
        <span className={styles.label}>{label}</span>
      </button>
    );
  }
);

export default FolderButton;
